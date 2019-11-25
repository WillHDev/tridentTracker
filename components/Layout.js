import Nav from './nav';
import Head from 'next/head'



const Layout = ({children}) => {
    return (
<div>   <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav ></Nav>
    <main>
        {children}
    </main>
    </div>
    );
};

export default Layout;