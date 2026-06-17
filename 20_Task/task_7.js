const movies = [
    { title: "Movie A", rating: 8.5 },
    { title: "Movie B", rating: 6.0 }
];
const highRatedMovies = [];
for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating > 8) {
        highRatedMovies.push(movies[i].title);
    }
}
console.log("Highly Rated Movies:", highRatedMovies);