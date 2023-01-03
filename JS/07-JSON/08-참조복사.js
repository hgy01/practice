//값복사>일반 변수끼리의 복사
let a =100;
let b=a;
console.log("a="+a+",b="+b);

//일반 변수끼리 복사한 경우 원본이 변경되면 복사본에는 영향이 없다
a++;
console.log("a="+a+", b="+b);

//참조복사(=얕은복사)
//배열, json, 객체끼리의 복사는 참조처리된다.
//원본을 수정하면 복사본도 함께 수정된다(반대도 마찬가지)
const user={
    name: "Lee"
};
const member=user;
console.log(user);
console.log(member);

member.name="kim";
console.log(user);
console.log(member);

/*엑셀로 설명할 경우 
user의 내용인 lee는 다른 칸에 저장됨(예를 들어 q1)
user의 칸에는 lee의 내용이 저장되어 있는 주소, q1이 저장됨
user를 복사할 시 주소인 q1가 복사되기 때문에 이를 수정할 경우 같이 수정이 됨*/

const d1=[1,2,3];
const d2=d1;
console.log(d1);
console.log(d2);

d1[0]+=10;
d1[1]+=10;
d1[2]+=10;
console.log(d1);
console.log(d2);

//배열끼리의 값복사 방법(=깊은복사)
const a1=[1,2,3];

//원본과 동일한 길이를 갖는 배열을 생성
const a2=new Array(a1.length);

//배열을 온전히 값복사하기 위해서는 원소끼리 개별복사 해야 함
for(let i=0; i<a1.length; i++){
    a2[i]=a1[i];
}

//배열객체가 갖는 메서드를 활용한 깊은 복사 방법
//--->const 새로운변수= 원본배율.slice();
const a3=a1.slice();
console.log(a1);
console.log(a2);
console.log(a3);

//json의 깊은 복사(다만, 계층복사는 안됨)
const addr={
    city:"서울",
    gu:"서초"
};

//깊은 복사를 수행할 빈 json객체를 생성
const copy={};
for(let key in addr){
    //copy.city와 copy.gu와 동일한 처리
    copy[key]=addr[key];
}
console.log(addr);
console.log(copy);

addr.gu="강남";
console.log(addr);
console.log(copy);

//js가 제공하는 기능 활용하기
const copy2={};

//addr을 copy2에 깊은 복사 수행하는 js내장기능
//복사될 copy2가 비어 있는 json일 경우 복사
//copy2가 비어있지 않으면 누적

Object.assign(copy2, addr);
console.log(copy2);