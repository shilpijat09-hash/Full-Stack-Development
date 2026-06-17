const posts = [
    { postId: 1, likes: 100 },
    { postId: 2, likes: 200 }
];
let totalLikes = 0;
for (let i = 0; i < posts.length; i++) {
    totalLikes += posts[i].likes;
}
console.log("Total Likes:", totalLikes);