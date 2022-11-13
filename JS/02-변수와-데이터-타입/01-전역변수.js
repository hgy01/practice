'use strict';

//1)변수의 선언과 할당
//선언
var myNumber1;
//할당
myNumber1=100;
console.log(myNumber1);

//2)변수의 선언과 할당 통합
var myNumber2=123;
console.log(myNumber2);

//3)변수값 변경하기
//한 번 만들어진 변수는 다른 값으로 교체 가능
myNumber2=456;
console.log(myNumber2);

//4)변수의 재선언
//일반적으로는 재선언이 안되지만 JS에서는 재선언이 가능하다.
//하지만 이는 권장되지 않는다
//4-1)선언과 할당
var myNumber3=300;
console.log(myNumber3);

//4-2)재선언
var myNumber3=789;
console.log(myNumber3);