const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ''),
    b = prompt("На сколько оцените его от 0 - 10", ''),
    c = prompt("Один из последних просмотренных фильмов?", ''),
    d = prompt("На сколько оцените его от 0 - 10", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);