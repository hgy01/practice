const point=76;

if(point>=70){
    console.log('Pass입니다.');
    //if문 안의 if
        if(point>90){console.log('A');}
        else if(point>80){console.log('B');}
        else{console.log('C');}  
}
//if문 안의 if가 끝남
else{
    console.log('NonPass 입니다.');
}

/*if문에서 else if는 조건이 참일 경우에 실행하는 경우이고 else는 조건이 참이 아닐 경우에 실행한다.
따라서 if문 안에 if문을 쓸 경우 어느 if문에 해당하는 지 확인을 잘 해야 한다.(아닐 경우 순서가 다른지 확인해보기)*/