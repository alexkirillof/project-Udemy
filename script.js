const mumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: mumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}


const lastFilm = prompt('Один из последних просмотренных фильмов?'),
    filmRang = prompt('На сколько вы его оцените?');


personalMovieDB['movies'][lastFilm] = filmRang;

console.log(personalMovieDB);