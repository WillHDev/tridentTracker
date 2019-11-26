import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import { InMemoryCache } from 'apollo-cache-inmemory'


export function withApollo (PageComponent) {
    const WithApollo = props => {
        //for client side
       const client = initApolloClient();
        return (
            <ApolloProvider client={client}>
                <PageComponent {...props}/>
            </ApolloProvider>
        );
    };
//name of component . getInit...
    WithApollo.getInitialProps = async (ctx) => {
const { AppTree } = ctx;
//for server side
const apolloClient = ( ctx.apolloClient = initApolloClient());
   let pageProps = {}
   if(PageComponent.getInitialProps) {
       //when the page component loads, we're
       //wrapping it with something we can use here
       pageProps = await PageComponent.getInitialProps(ctx);
   }
   //if server
   if(typeof window === "undefined") {
       if( ctx.res && ctx.res.finished) {
           return pageProps;
       }
       try {
           //inside get initial props, we're saying wait until this entire data tree 
           //has rendered and continue on your way

            const { getDataFromTree } = await import('@apollo/react-ssr')
            await getDataFromTree(
                <AppTree
                    pageProps={{
                        ...pageProps,
                        apolloClient
                    }}

                />
            )
       } catch (e) {
            console.error(e);
       }
       Head.rewind();
   }

   const apolloState = apolloClient.cache.extract();
   return {
       ...pageProps,
       apolloState
   };
};
    
    return WithApollo;
}

const initApolloClient = ( initialState = {} ) => {
    //we want ssr mode the server side to be true, false on client side
    //
    const ssrMode = typeof window === 'undefined'
    // create a new cache and restore it from initial state if 
    //that exists
    const cache = new InMemoryCache().restore(initialState);

    const client = new ApolloClient({
    ssrMode,
    uri: 'http://localhost:3000/api/graphql',
    fetch, 
    cache
});
return client;
}
//export default 

//props = remaining components