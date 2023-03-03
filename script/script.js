"use sctrict";

let numberOfFilms;

function start(){
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?",'');
    while(numberOfFilms=='' || numberOfFilms==null || isNaN(numberOfFilms)){
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?",'');
    return
    }
}

//start();


let personalMovieDB = {                                             // обьект для хранения данных о пользователе
    count : numberOfFilms,                                          // количество фильмов
    movies : {},                                                    // фильмы
    actors : {},
    geners : [],
    privat : false   
}

function rememberMyFilms() {

    let film, grade;
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

}

//rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count<=10){                                             // проверяем ввод 
        alert('Просмотренно довольно мало фильмов');
    } else if(personalMovieDB.count>10 && personalMovieDB.count<30){
        alert('Вы класический зритель')
    } else if(personalMovieDB.count>30){
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка')
    }
}

//detectPersonalLevel();

function showMyDB(hidden){
      if (!hidden){
        console.log(personalMovieDB.privat); 
      }

}

function writeYourGenres(){

    for (let i =1;i<=3;i++){
                     
        personalMovieDB.geners[i-1]=promt(`Ваш любимы жанр под номером ${i}`);

    }
}
