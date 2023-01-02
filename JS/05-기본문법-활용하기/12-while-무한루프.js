/*while문의 무한루프 형식*/
let y=0;
while(true){
    y++;
    if(y%2==0){
        //반복문의 흐름이 조건식으로 넘어가도록 제어
        continue;
    }
    //반복이 종료될 조건을 반드시 지겅
    if(y>10){
        //반복의 수행을 강제로 종료하도록 제어
        break;
    }
    console.log("Hello World:::%d", y);
}
/*while이 항상 true여서 증감식은 계속 작동한다.
다만 if(y%2==0)이 true일 경우에 증감식으로 넘어가고 false일 때는 밑에 있는 if(y>10)이 작동한다. 
if(y>10)이 true일 경우 break 명령어로 인해 무한루프형식의 반복문이 정지되며 console.log의 명령을 듣지 않는다(출력X)*/