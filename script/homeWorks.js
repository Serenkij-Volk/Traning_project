"use sctrict";


// Задачка 24,1
for(let i=5;i<11;i++){
    console.log(i);
}


for (let i =2; i<11;i+=2){
    console.log(i);
}


for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i=2;
while (i<=15){
    i++;
    if (i % 2 === 0) {
    continue;
   } else {
    console.log(i);
   }

}

const arrayOfNumbers = [];

let j=5;
    for(let i=0;i<=5;i++){
        arrayOfNumbers[i]=j;
        j++;
        
    }
    console.log(arrayOfNumbers);
    
    // Не трогаем
    return arrayOfNumbers;



const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
 for(let i=0;i<=lines;i++){
    //result+='*'
    for(let j=5;j>i;j--){
    
        result+=' '; 
    }
    
    for (let k=0;k<i+1;k++){
       if (k==0){result+='*';
       }else {result+='**';}
            }
    result+='\n';   
 }

 console.log(result);


function getMathResult(base,count) {
    let string='';
    let num=0;
    for (let i=0;i<count;i++){
        num+=base;
        string+=num;
        if (i==count-1){
            continue;
        }else {
            string+="---";
        }
        
    }
    if (typeof count === !"number" || count===0 || count<0){
        
        return base;
    } else {
    return string;
    }

}

console.log(getMathResult(5,3));


function calculateVolumeAndArea(Qside) {
    
    if (Qside==String || Qside<=0 || !Number.isInteger(Qside)){      
        return "При вычислении произошла ошибка";
    }else {

        V=Qside*Qside*Qside;
        S=Qside*Qside*6;

        return 'Объем куба: '+V+', площадь всей поверхности: '+S;
    }
}

console.log(calculateVolumeAndArea(5));



function getCoupeNumber(NPlace) {
    
    if (NPlace==String || NPlace<=0 || !Number.isInteger(NPlace)){   

        return "Ошибка. Проверьте правильность введенного номера места";

    }else {

        if (NPlace<=0 || NPlace>36){
            return "Таких мест в вагоне не существует"
        }else if (NPlace>=1 && NPlace<=4){
            return 1
        }else if(NPlace>=5 && NPlace<=8){
            return 2
        }else if(NPlace>=9 && NPlace<=12){
            return 3
        }else if(NPlace>=13 && NPlace<=16){
            return 4
        }else if(NPlace>=17 && NPlace<=20){
            return 5
        }else if(NPlace>=21 && NPlace<=24){
            return 6
        }else if(NPlace>=25 && NPlace<=28){
            return 7
        }else if(NPlace>=29 && NPlace<=32){
            return 8
        }else if(NPlace>=33 && NPlace<=36){
            return 9
        }

    }
}

console.log(getCoupeNumber(33));


// Задача на функции №7
function getTimeFromMinutes(minutes) {
    
    if (minutes<0 || minutes==='' || !Number.isInteger(minutes)){        
        return "Ошибка, проверьте данные"
        
    }else if (minutes===0) {        
        return "Это 0 часов и 0 минут"
        
    }else if (minutes==60){        
        return "Это 1 час и 0 минут"
        
    }else if (minutes<60){        
        return 'Это 0 часов и'+minutes+' минут'
        
    }else if (minutes%60===0){        
        let hours=minutes/60;        
        return 'Это '+hours+' часов и 0 минут'
        
    }else if (!minutes%60===0){
        if (minutes/60<5){

        let hoursRounded=Math.round(minutes/60-minutes%60/60);                         
        let minutesM=minutes%60;        
        return 'Это '+hoursRounded+' часа и '+minutesM+' минут'

        }else {

        let hoursRounded=Math.round(minutes/60-minutes%60/60);                         
        let minutesM=minutes%60;        
        return 'Это '+hoursRounded+' часов и '+minutesM+' минут'

        }
        
    }
    
}

console.log(getTimeFromMinutes(209));


// Задача на функции №8

function findMaxNumber(a,b,c,d) {
    
   
    if (!typeof(a)==="number" || typeof(a)==="string" || a===undefined){
        return 0

    }else if(!typeof(b)==="number" || typeof(b)==="string" || b===undefined){
        return 0

    }else if(!typeof(c)==="number" || typeof(c)==="string" || c===undefined){
        return 0

    }else if(!typeof(d)==="number" || typeof(d)==="string" || d===undefined){
        return 0

    }else {
        return Math.max(a,b,c,d);
    }
}

console.log(findMaxNumber(1,5,6.6,11));
console.log(findMaxNumber(1,5,6));

// Задача на функции №9

function fib(x) {
    let f='0 ';
    let x1=1;
    let x2=2;
    
    for (let i=0;i<x;i++){
        
        x1+=x2;
       
        for (let j=0;j<=x-1;j++){
             f+=x1+' '+x2;
        } 
       
    }
    
    
}

// Задача на функции №10

function fib(a) {

let x=[0,1,];
let f='';

if (!Number.isInteger(a) || a<0){    //!typeof(a)==="number" 
    return ''
}else if (a===1){
    return '0'
}else {
    for (let i=0;i<a-2;i++){
        x[i+2]=x[i]+x[i+1];   
       }

    for (let j=0;j<a;j++){
        if (j===a-1){
            f+=x[j];
        }else{

            f+=x[j]+' ';
        }

       }
     return f
    }
}

console.log(fib(0));
console.log(fib(1));
console.log(fib('4'));
console.log(fib(7));

//console.log(typeof('4'));

// Задание на работу с обьектами №10

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (obj){
        
        let langs=[...obj.skills.languages].join(',').toUpperCase();
        
        
        return `Мне ${obj.age} и я владею языками: ${langs}`
        
    }
};

// Задание на работу с обьектами №12

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


function showExperience(plan) {

    return plan.skills.exp

}

//console.log(showExperience(personalPlanPeter));

// Задание на работу с обьектами №11

function showProgrammingLangs(plan) {

    let i=0;
    let langs='';

    for (key in plan.skills.programmingLangs){
        i++;
        langs+=`\nЯзык ${key} изучен на ${plan.skills.programmingLangs[key]}% `;
        console.log(langs);
    }
    if (i===0){
        return '';  
    }else {
     return langs;
    }
    
}

console.log(showProgrammingLangs(personalPlanPeter));


// Задание на работу с обьектами №13


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    
    let str=arr.join('\n').toLowerCase();
    console.log(str);
        
}

// Задача на работу с массивами №14

const someString = 'This is some strange string';

function reverse(str) {

    if (typeof(str)==="string"){

    let newstr=[...str];
    let reverse=[];
    let j=str.length-1;
    for (let i=0; i<str.length; i++){
        reverse[i]=newstr[j];
        j--;
        
    }

    return reverse.join('')
}else{

    return "Ошибка"
}

}


console.log(reverse(someString));
console.log(reverse(42));

// Задача №15 работа с массивами

const baseCurrencies = ['USD', 'EUR'];
const baseCurrencies2 = [];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    
    
    if (!typeof(arr)==="object" || arr===undefined ||arr.length===0 || arr[0]===''){
        
        return "Нет доступных валют"

    }else{

        let resultCurr='';
        for (let key in arr){
            
            if (arr[key]===missingCurr){
                
                arr.splice(key,1);
            }

        }
        
        for (let j=0;j<arr.length;j++){

            resultCurr+=arr[j]+'\n';
        }
    
    return 'Доступные валюты:'+resultCurr 
    }

}

console.log(availableCurr());
console.log(availableCurr(baseCurrencies,'USD'));
console.log(availableCurr(baseCurrencies2));
console.log(availableCurr(additionalCurrencies,'CNY'));



// Задача №16 продвинутая работа с масивами

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Somebody']; // 

function sortStudentsByGroups(arr) {

    //arr.sort(); 

    let newArr=[]; // контейнер для новый групп/массивов

    let SortedArr=[...arr.sort()];   // Сортируем массив по алфавиту // Деструктуризируем массив и присваеваем содержимое в новый массив 

          //console.log(SortedArr);

    for (let j=0;j<3;j++){

        let tempArr=[];
        for (let i=0; i<3; i++){
            tempArr.push(SortedArr[i]);
            //console.log(SortedArr[i]);
            ;
        }
        for (let k=0; k<3; k++){
            SortedArr.shift();
            
        }
        newArr.push(tempArr);
}

if (arr.length<=9){

    newArr.push("Оставшиеся студенты: -");
    
    }else {
        
        let lastStr="Оставшиеся студенты: ";
        for (let i=9;i<=(arr.length-1);i++){
    
            lastStr+=arr[i];

            if (i===(arr.length-1)){
                break;
            }else{

                lastStr+=', ';
            }
    
        }
        newArr.push(lastStr);
    }

// "Оставшиеся студенты: "
return newArr;

}

console.log(sortStudentsByGroups(students));

