
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

console.log(calculateVolumeAndArea(5));
