//js에 추가된지 얼마 되지 않는 문법이므로 IE는 지원하지 않음
//ES5에서 존재하지 않는 key혹은 멤버변수에 접근하는 경우
const user={};

//user 안에 address가 정의되지 않았으므로 undefined
//console.log(user.address);

//address자체가 정의되지 않은 상태에서 하위 기능에 접근하므로 에러
//console.log(user.address.city);

//ES5의 해결책-->단계별로 객체가 존재하는지 검사
//console.log(user&&user.address&&user.address.city);

/*"객체이름?"은 해당 객체가 undefined나 null이면 평가를 중지하고 undefined를 반환한다
옵셔녈 체이닝은 존재하지 않아도 괜찮은 대상에게만 사용하고 반드시 존재해야 하는 개체에게는 if문으로 존재 여부를 검사하는 유효성 검사를 수행하는 것이 좋다.
*/
console.log(user?.address?.city); //true일 경우 다음으로 넘어가고 아닐 경우 그대로 종료해버린다
console.log("프로그램 종료!");


/*없는 것을 내놓으라 하면 에러가 뜬다.
undefined의 하위 기능에 접근하지 못할 경우 error
-이 경우 에러가 난 부분에 집중하지 말고 다른 부분도 확인해보자
->논리로 해결해보자
true=0이 아닌 모든 수/한 글자라도 포함된 문자열/하나라도 원소가 포함된 배열
a=[](아무것도 없으니 false)
a=[1](1이 있으니 true)*/