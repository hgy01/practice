//'use strict';  //엄격모드 적용-->ES6 호환기능만 사용하도록 명시

console.group('MyMessage1');
    console.log('안녕하세요 js1');
    console.log('안녕하세요.js2');
    console.log('안녕하세요 JS3');
console.groupEnd();

console.group('MyMessage2');
    console.log('안녕하세요 JS4');
    console.group('MyMessage2-1');
        console.log('안녕하세요 js5');
        console.log('안녕하세요 js6');
    console.groupEnd();
console.groupEnd();