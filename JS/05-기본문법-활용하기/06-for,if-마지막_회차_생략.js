/*마지막 회차 생략*/
/*
1)반목문의 조건식이 "변수<최대값"인 경우의 조건: 변수+1<최대값
2)반복문의 조건식이 "변수<=최대값"인 경우의 조건: 변수<최대값
*/

//1)변수 < 최대값(1~8까지 출력됨)
console.group("변수<최대값");
for(let i=1; i<10; i++){
    if(i+1<10){
        console.log(i);
    }
}
console.groupEnd();

//변수+1을 안 할 경우(1~9까지 출력됨)
console.group("변수<최대값(+1을 안 할 경우)");
for(let i=1; i<10; i++){
    if(i<10){
        console.log(i);
    }
}
console.groupEnd();

//2)변수 <= 최대값(1~8까지 출력됨)
console.group("변수<=최대값");
 for(let i=1; i<=9; i++){
    if(i<9){
        console.log(i);
    }
}
console.groupEnd();

//변수<최대값으로 안 할 경우(1~9까지 출력됨)
console.group("변수<=최대값(변수<최대값을 안 할 경우)");
 for(let i=1; i<=9; i++){
    if(i<=9){
        console.log(i);
    }
}
console.groupEnd();

//1~9까지의 숫자 사이사이에 콤마를 넣어 한 문장으로 결합
console.group("글자 사이에 콤마(,)넣기");
let str="";

for(let i=1; i<10; i++){
    str+=i;
    console.log(str);
        if(i+1<10){
            str+=",";
        }
    }
console.log(str);
console.groupEnd();