const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

if (numberOfFilms > 0 && numberOfFilms < 10) {
    alert("Просмотренно довольно мало фильмов")
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    alert("Вы классный зритель!")
} else if (numberOfFilms >= 30) {
    alert("Вы классный зритель!")
} else alert("Произошла ошибка!");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}


const lastFilm = [],
    filmRang = [];

for (let i = 0; i < 4; i++) {

    lastFilm[i] = prompt('Один из последних просмотренных фильмов?', '');
    while (lastFilm[i] === '' || lastFilm[i] === null || lastFilm[i].length > 50) {
        lastFilm[i] = prompt('Один из последних просмотренных фильмов?', '');
    }
    filmRang[i] = prompt('На сколько его оцените?', '');
    while (filmRang[i] === '' || filmRang[i] === null) {
        filmRang[i] = prompt('На сколько его оцените?', '');
    }
    personalMovieDB.movies[lastFilm[i]] = filmRang[i]

}


console.log(personalMovieDB);