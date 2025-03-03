// Movie details
const movieName = "Inception";
const starring = ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"];
const language = "English";
const ratings = {
    IMDB: 8.8,
    RottenTomatoes: 87,
    Metacritic: 74
};

// Display movie details
console.log("Movie Details:");
console.log(`Name: ${movieName}`);
console.log(`Starring: ${starring.join(", ")}`);
console.log(`Language: ${language}`);
console.log("Ratings:");
console.log(`- IMDB: ${ratings.IMDB}`);
console.log(`- Rotten Tomatoes: ${ratings.RottenTomatoes}%`);
console.log(`- Metacritic: ${ratings.Metacritic}`);
