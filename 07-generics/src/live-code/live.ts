// 제네릭 : Generic(일반적인)
// 타입을 나중에(사용 시점에) "결정"하는 문법
// 코드 재사용성 + 타입 안정성

function echo<T>(value: T):T{
    return value;
}

console.log(echo(2));
console.log(echo("hi"));
console.log(echo(true));

// 
type FirstElement<T> = (arr: T[]) => T;

const getFirst:FirstElement<string> = (arr) => arr[0];
console.log(getFirst(["윤유저","김상우"]));

const getFirstNum:FirstElement<number> = (arr) => arr[0];
console.log(getFirstNum([1,2,3]));

interface User {
    id: number;
    name: string;
}

const getFirstUser: FirstElement<User> = (arr) => arr[0];
console.log(getFirstUser([{id:1, name:"윤유저"}]));

// 대체 방법
// 1. any 로
// 2. 일일이 선언 (함수 오버로딩)
// 3. ?

interface User {
    id: number;
    name: string;
}

// userResponse
// productResponse
// errorResponse

// 인터페이스에서 제네릭 사용
interface ApiResponse<T>{
    success:boolean;
    error?: string;
    data: T;
}

const userResponse: ApiResponse<User> = {
    success: true,
    data:{id: 1, name: "윤유저"},
}

const errorResponse : ApiResponse<null> = {
    success: false,
    error: "404 Not Found",
    data: null,
}

// 제네릭 타입 제약 (extends)

// number, boolean , string, arrays
// extends {length : number}
// **“length라는 속성이 반드시 있고, 그 타입은 number다”**
function printLength<T extends {length : number}> (val:T):void{
    console.log(val.length);
}
printLength("123");
printLength(["123"]);