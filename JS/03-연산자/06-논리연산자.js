// 1)and
console.group('1)and');
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false && false);
console.groupEnd();

// 2)and연산 여러 개 사용
console.group('2)and연산 여러 개 사용');
console.log(true&&true&&true);
console.log(true&&true&&false);
console.log(false&&false&&true);
console.log(false&&true&&true);
console.groupEnd();

// 3)or
console.group('3)or')
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);
console.groupEnd();

// 4)or연산 여러 개 사용
console.group('4)or연산 여러 개 사용');
console.log(true||true||true);
console.log(true||true||false);
console.log(false||false||true);
console.log(false||true||true);
console.groupEnd();

// 5)복합사용
console.group('5)복합사용');

console.group('01-and연산부터')
console.log(true&&true||true);
console.log(true&&true||false);
console.log(false&&false||true);
console.log(false&&true||true);
console.groupEnd();

console.group('02-or연산부터')
console.log(true||true&&true);
console.log(true||true&&false);
console.log(false||false&&true);
console.log(false||true&&true);
console.groupEnd();

console.groupEnd();

// 6)not
console.group('6)not');
let success=true;
let fail=!success;
console.log(fail);

let k=1;
console.log(!k);

let l=0;
console.log(!l);

let str1='Hello';
console.log(str1);

let str2='';
console.log(!str2);
console.groupEnd();