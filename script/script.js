"use sctrict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?",2); // создаём опрос пользователя

let personalMovieDB = {                                             // обьект для хранения данных о пользователе
    count : numberOfFilms,                                          // количество фильмов
    movies : {},                                                    // фильмы
    actors : {},
    geners : [],
    privat : false   
};

let film1 = prompt("Один из последних просмотренных фильмов?", 'matrix');
let gradeFilm1 = prompt("На сколько оцените его?", 8);
let film2 = prompt("Один из последних просмотренных фильмов?", 'logan');
let gradeFilm2 = prompt("На сколько оцените его?", 6);

personalMovieDB.movies[film1] = gradeFilm1;
personalMovieDB.movies[film2] = gradeFilm2;

console.log(personalMovieDB.movies);
