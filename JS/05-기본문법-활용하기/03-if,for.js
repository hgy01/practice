const k = 5;

//k의 범위를 결정하는 조건문>k를 2~9 사이로 제한함
//&&는 and의 뜻을 가진다.>조건을 다 만족해야 true
if(k>1&&k<10){
    for(let i=1; i<10; i++)
     {console.log("%d x %d = %d", k, i, k*i);}
}
else{console.log("2~9 사이의 수식만 출력합니다.");}