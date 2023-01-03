//변수들의 그룹으로서의 json 정의
const student={
    studno: 10101,
    grade:1,
    name: "학생1",
    phoneno: "010-1231-2342"
};
/*1)각 데이터 출력하기
데이터에 접근하는 기본적인 방법은 객체이름.하위정보이름
--->90%이상의 경우에서 이 방식이 사용됨.
*/
console.group("출력 type1");
console.log("학번:"+ student.studno);
console.log("학년:"+student.grade);
console.log("이름: "+student.name);
console.log("연락처: "+student.phoneno);
console.groupEnd();

//json의 key이름을 배열의 인덱스처럼 활용
console.group("출력 type2");
console.log("학번:"+student['studno']);
console.log("학년:"+student['grade']);
console.log("이름:"+student['name']);
console.log("연락처:"+student['phoneno']);
console.groupEnd();

//2)접근하고자 하는 하위 변수의 이름을 동적으로 설정해야 하는 경우 type2가 활용된다
const keyName="phoneno";
console.log(student[keyName]);

//3)json데이터 탐색하기(1)
//json의 key를 배열로 반환하는 명령
const keys=Object.getOwnPropertyNames(student);
console.log(keys);
//추출된 key이름값(k)을 활용하여 실 데이터에 동적 접근 가능함
for(const k of keys){
    console.group(k);
    console.log(student[k]);
    console.groupEnd();
}
/*3)json데이터 탐색하기(2)
json객체의 key를 선언한 변수(k)에 순차적으로 할당하며 모든key를 탐색한다*/
for(const k in student){
    console.group(k);
    console.log(student[k]);
    console.groupEnd();
}
