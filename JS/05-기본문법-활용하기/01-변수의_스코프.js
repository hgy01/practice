/**
 * 예제 코드 중간중간 에러가 있으니 전체 실행은 하지 말 것!
 */

/*1)var 중복 선언 
조건문이 실행되지 않을 경우
if가 false일 때 if는 실행되지 않아서 num1의 값이 정의 되지 않는다>정의되지 않는 값*/

if(false){
    var num1=100;
    console.log("블록안: "+num1);
}

/*실행되는 경우*/
console.log("블록밖: "+num1);

if(true){
    var num2=100;
    console.log("블록안: "+ num2);
}
console.log("블록밖: "+num2);

/*2) let 중복선언*/
//{}밖에 속하는 변수는 자식요소에는 다 적용할 수 있음
let num3=100;
if(true){
    let num4=num3+100;
    console.log("블록안: "+num4);
}
/*다만, 블록 안에서 let으로 선언된 변수는 실행여부와 관계 없이 블록 밖으로 나올 수 없다.
이 경우 존재하지 않는다가 아닌 프로그램 에러가 발생하니 주의하자*/
console.log("블록밖: "+ num4);

/*3) for문의 초기식을 var로 선언한 경우*/
for (var i=0; i<10; i++){
    console.log("반복문 안:::"+i);
}
console.log("반복문 밖 >>>"+i);

/*4) for문의 초기식을 let으로 선언한 경우*/
for (let j=0; j<10; j++){
    console.log("반복문 안:::"+j);
}
//for문의 초기식도 {}에 속한 것으로 보기 때문에 j값은 for 블록을 빠져나올 수 없다.
console.log("반복문 밖>>>"+j);

/*5) 선언되지 않은 변수의 경우*/
//let 키워드는 반드시 선언 > 할당의 순서로만 사용 가능
x=100;
let x;
console.log(x);

//하지만 var 키워드는 할당>선언이 가능함(js에서만 가능함)
y=200;
var y;
console.log(y);