//1)변수 스스로 1증가
let selfPlus=1;
console.lof(selfPlus);

selfPlus++;
console.log(selfPlus);

++selfPlus;
console.log(selfPlus);

//2)변수 스스로 1감소
let selfMinus=1;
console.log(selfMinus);

selfMinus--;
console.log(selfMinus);

--selfMinus;
console.log(selfMinus);

//3)전위 증감 연산자
let prevValue=1;
let prevResult=100+ ++prevValue;

console.log(prevResult);
console.log(prevValue);

//4)후위 증감 연산자
let nextValue=1;
let nextResult=100+ nextValue++;

console.log(nextResult);
console.log(nextValue);