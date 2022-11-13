'use strict';

//1)선언과 할당
//선언
let myNumber1;
//할당
myNumber1=100;
console.log(myNumber1);

//2)선언과 할당 통합
let myNumber2=200;
console.log(myNumber2);

//3)중복선언 금지
//3-1)선언
let myNumber3=1;
console.log(myNumber3);

//3-2)중복선언
//앞에서 이미 선언된 변수이므로 에러가 발생
//전역변수만 재선언이 가능(안하는 것이 좋음)
 let myNumber3=2;
 console.log(myNumber3);