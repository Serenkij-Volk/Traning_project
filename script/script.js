"use sctrict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?",2); // создаём опрос пользователя

if (numberOfFilms<=10){                                             // проверяем ввод 
    alert('Просмотренно довольно мало фильмов');
} else if(30<numberOfFilms>>10){
    alert('Вы класический зритель')
} else if(numberOfFilms>30){
    alert('Вы киноман');
} else {
    alert('Произошла ошибка')
}


let personalMovieDB = {                                             // обьект для хранения данных о пользователе
    count : numberOfFilms,                                          // количество фильмов
    movies : {},                                                    // фильмы
    actors : {},
    geners : [],
    privat : false   
};

let film;
let grade;

let i=0;         
while(i<4){                                                         // опрос о фильах  и оценках к ним

    film = prompt("Один из последних просмотренных фильмов?", 'matrix');
    if (film==null || film.length>50 || film===''){
        continue
    } else{
        i++;
    }
    grade = prompt("На сколько оцените его?", 8);
    if (grade==null || grade.length>50 || grade===''){
        continue
    } else{
        personalMovieDB.movies[film] = grade;
        i++;
    }


}

console.log(personalMovieDB.movies);  // Смотрим что получилось