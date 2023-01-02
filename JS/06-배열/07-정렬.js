/*배열 순서대로 정렬하기*/

const data=[3,5,1,4,2];
console.log(data);

//i는 배열의 원소 중 마지막을 제외한 항목을 스캔한다.
for(let i=0; i<data.length-1;i++){
    //j는 배열의 원소 중 i번째 다음 원소부터 마지막 원소까지 스캔
    for(let j=i+1; j<data.length;j++);{
        //부등호 방향"<": 내림차순(역순정렬)
        //부등호 방향">": 오름차순(순차정렬)
        if(data[i]>data[j]){
            const tmp=data[i];
            data[i]=data[j];
            data[j]=tmp;
        }
    }
}
console.log(data);

/*
첫 번쩨 원소인 3을 가지고 5,1,4,2의 원소와 각각 비교하여 부등호 방향에 맞는 원소와 첫번째 자리의 원소를 바꾼다. 4번째 원소까지 전부 비교한 다음 출력하면 원하는 정렬이 완성된다.*/