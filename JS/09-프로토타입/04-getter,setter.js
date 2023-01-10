function User4()
{
    //멤버변수 정의하기
    //일반적으로 멤버변수는 일반 변수와 구분하기 위해 언더바로 시작하는 이름을 갖는다.
    this._id=null;
    this._email=null;
}

Object.defineProperty(User4.prototype,'id',
{
    get: function()
    {
        console.log("id에 대한 getter 호출됨");
        return this._id;
    },
    set: function(param)
    {
        console.log("id에 대한 setter 호출됨");
        this._id=param;
    }
});

Object.defineProperty(User4.prototype,'email',
{
    get: function()
    {
        console.log("email에 대한 getter 호출됨");
        return this._email;
    },
    set: function(param)
    {
        console.log("email에 대한 setter 호출됨");
        this._email=param;
    }
});

//객체 생성하기
const friend=new User4();
friend.id="친구";
console.log(friend.id);

friend.email="fri@hanmail.net";
console.log(friend.email);