//where we modify things ex post
//{habit} only one of arguments needed
export const habitsMutations = {
    Mutation: {
        async addHabit(_, { habit }) {
            console.log('add habit');
        }
    }
};