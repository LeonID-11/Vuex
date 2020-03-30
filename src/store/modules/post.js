export default {
    actions: {
        async fetchPost(ctx, lim=3){
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/posts?_limit='+lim
            );
            const posts = await res.json();
            ctx.commit('updatePosts', posts);
        }
    },
    mutations: {
        updatePosts(state, posts){
            state.posts = posts;
        },
        createPost(state, newPost){
            state.posts.unshift(newPost);
        }
    },
    state: {
        posts: [],
    },
    getters: {
        allPosts(state){
            return state.posts
        },
        postCount(state){
            return state.posts.length
        }
    },
}