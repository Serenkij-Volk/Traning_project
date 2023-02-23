
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