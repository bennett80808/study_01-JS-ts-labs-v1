// 인터페이스

// 1. 인터페이스 선언

// type Uzer = {
//     id: number;
//     name: string;
//     email?: string;
// }

interface User {
    id: number;
    name: string;
    email?: string;
};

interface User {
    readonly createdAt: Date;
};

const userA: User = {
    id: 1,
    name: "김상우",
    email: "23red@naver.com",
    createdAt: new Date(),
};

// function printUser(user: User){

// }
// 2. 함수에서의 인터페이스.
interface Add {
    (a:number, b:number): number;
}

type Add2 = (a:number, b:number) => number;
// | &

// 객체 : 인터페이스, 타입 별칭
// 함수 및 기타 : 타입 별칭

// 3. 인터페이스 확장(=상속)

interface ApiResponse{
    success: boolean;
    message?: string;
}

interface UserResponse extends ApiResponse, AddtionalInfo{
    user:{
        id: string;
        name: string;
    }
}

type AddtionalInfo = {
    info : string;
};

interface ProductResponse extends ApiResponse{
    product:{
        id: string;
        name:string;
        price:number;
    }
}

let UserResponse: UserResponse = {
    success: true,
    message: "message...",
    user: {id: "1", name:"김상우"},
    info: "something",
}

// 4. 인덱스 시그니처
// 키 : 값 구조
// 객체의 속성명이 동적으로 정해질 때 사용
interface StringMap{
    [key:string]:string;
}


// red : #ff0000
const colors: StringMap = {
    red:"ff0000",
    green:"00ff00",
    blue:"0000ff",
}