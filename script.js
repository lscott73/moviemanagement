let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }

}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    let addMovieText = "-------------------<br>A new movie is added<br>";
    allMovies.push(movie);
    document.getElementById("movieResult").innerHTML += addMovieText;
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    let outputText = "-------------------<br>Printing all movies...<br>";

    allMovies.forEach((movie) => {
        outputText += `${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched}<br>`;
    });

    let counter = allMovies.length;
    document.getElementById("movieResult").innerHTML += outputText;
    document.getElementById("movieResult").innerHTML += "<br>You have " + counter + " movies in total<br>";

}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    let matchesText = "-------------------<br>Printing movies with a rating higher than " + rating + "<br>";
    let actualRating = "";
    let j = 0;

    allMovies.forEach((movie) => {
        if (movie.rating > rating) {
            actualRating += `${movie.title} has a rating of ${movie.rating}<br>`;
            j++;
        }
    });

    matchesText += actualRating;
    matchesText += "<br>";
    matchesText += `In total, there are ${j} matches<br>`;

    document.getElementById("matchesCheck").innerHTML += matchesText;
}


//Toggle the 'haveWatched' property of the specified movie
let changeWatched = (title) => {
    let watchStatus = "-------------------<br>changing the status of the movie...<br>";
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title == title) {
            allMovies[i].haveWatched = !allMovies[i].haveWatched;
            break;
        }
    }
    document.getElementById("movieResult").innerHTML += watchStatus;
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);
printMovies();
let movie1 = new Movie("Parasite", 2, false);
addMovie(movie1);
changeWatched("Spiderman");
printMovies();
changeWatched("Spiderman");
printMovies();
highRatings(3.5);