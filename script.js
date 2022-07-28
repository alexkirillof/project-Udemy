let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}




function rememberMyFilms(k) {
    const lastFilm = [],
        filmRang = [];

    for (let i = 0; i < k; i++) {

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
}

rememberMyFilms(2);


function detectPersonalLevel() {
    if (numberOfFilms > 0 && numberOfFilms < 10) {
        alert("Просмотренно довольно мало фильмов")
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        alert("Вы классный зритель!")
    } else if (numberOfFilms >= 30) {
        alert("Вы классный зритель!")
    } else alert("Произошла ошибка!");

}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.private === false) {
        console.log(personalMovieDB);
    }
}
showMyDB()

function writeYourGenres(k) {
    for (let i = 0; i < k; i++) {
        let genre = prompt(`Ваш любимы жанр под номером - ${i+1}`);
        personalMovieDB.genres[i] = genre
    }
}

writeYourGenres(2)