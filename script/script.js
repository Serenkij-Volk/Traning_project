"use sctrict";

let numberOfFilms;

let personalMovieDB = {                                             // обьект для хранения данных о пользователе
    count : numberOfFilms,                                          // количество фильмов
    movies : {},                                                    // фильмы
    actors : {},
    geners : [],
    privat : false,
    start:function (){
        //numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?",'');
        while (true){
        if (numberOfFilms==='' || numberOfFilms===null || isNaN(numberOfFilms) || numberOfFilms===undefined){
            numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?",'');

        
        }else{
            break;           
        }

    }
    return numberOfFilms
    },

    rememberMyFilms: function () {

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
    
    },

    detectPersonalLevel: function (){
        if (personalMovieDB.count<=10){                                             // проверяем ввод 
            alert('Просмотренно довольно мало фильмов');
        } else if(personalMovieDB.count>10 && personalMovieDB.count<30){
            alert('Вы класический зритель')
        } else if(personalMovieDB.count>30){
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка')
        }
    },
    showMyDB: function (hidden){
        if (!hidden){
          console.log(personalMovieDB.privat); 
        }
  
  },
  
  writeYourGenres: function (){

    let gener;
    askagain: for (let i=1;i<=3;i++){
                     
        gener=prompt(`Ваш любимы жанр под номером ${i}`);
        //console.log(gener);
        if (gener===null || gener===''){
            i--;
            console.log(i);
            continue askagain;
            }else{
                personalMovieDB.geners[i-1]=gener;
            }

        }
        personalMovieDB.geners.forEach (function (value,index){
        console.log(`Любимый жанр ${index} - это ${value}`); } )
},

toggleVisibleMyDB: function (){

    switch (personalMovieDB.privat){
        case true:
            personalMovieDB.privat=false;
            break;
        case false:
            personalMovieDB.privat=true;
            break;
    }
    
}

}

//personalMovieDB.toggleVisibleMyDB();
//personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();






