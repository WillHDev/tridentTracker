export const habitsResolvers = {
    Query: {
        async habits() {
            console.log('habits');
            return [{
                _id: 'somefunkyarray',
                name: 'make my bed'
            }];
        }
    }
};

//habits.graphql = type definitions much harder to break