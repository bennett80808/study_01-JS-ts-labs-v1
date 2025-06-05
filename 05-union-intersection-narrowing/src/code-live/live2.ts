// 타입 좁히기 (Type Narrowing)

// 타입 좁히기 패턴
// (1) typeof
// (2) null checks
// (3) in
// (4) discriminated union(= tagged union)
// (5) 타입 가드 함수
// (6) instanceof


// (1) typeof
function printSomething(value: string | number){
    if(typeof value === "string"){
    console.log(value.toUpperCase());
    }else {
        console.log(value.toFixed);   
    }
}



// (2) null checks

type User = {id:number; name:string; email?: string};

// 선택적 매개변수
// api -> user (x)
function printUserProfile(user?: User){
    if(!user){ // (2) null checks
        return;
    }
    if(user.email){
    console.log(`ID: ${user.id}, 이름: ${user.name}, 이메일: ${user.email}`)
    }else{    
    console.log(`ID: ${user.id}, 이름: ${user.name}`)
    }
}
printUserProfile({id:1, name: "김상우"});

// in vs 디스크리미네이티드 유니온(태그 유니온, 서로소 유니온)




type SuccessResponse = { data: string};
type ErrorResponse = { error:string};
type ApiResponse = SuccessResponse | ErrorResponse;

// function handleResponse(response: ApiResponse){
//     if(response.ok){
//     console.log(response.data);
//     } else{       
//     console.log(response.error); 
//     }
// }

// (3) in
function handleResponse2(response: ApiResponse){
    if("data" in response){
    console.log(response.data);
    } else{       
    console.log(response.error); 
    }
}

// (4) discriminated union(= tagged union)

// type SuccessResponse = {ok: true; data: string};
// type ErrorResponse = {ok: false, error:string};

// type Shape =
//   | { kind: "circle"; radius: number }
//   | { kind: "square"; side: number }
//   | { kind: "rectangle"; width: number; height: number };
// 여기서 kind 속성이 태그(tag) 역할을 해

// kind가 "circle"이면 무조건 radius가 있음

// kind가 "square"면 side가 있음


// (5) 타입 가드 함수
type Guest = {kind: "guest"; visitReason: string}
type Member = {kind: "member"; memberId: string}
type Person = Guest|Member;
//Guest & Member는 문법적으로는 에러가 아니지만, 
// 실질적으로는 불가능한 타입이기 때문에 값을 만들려고 하면 에러가 나.

// 특수 문법 : is
// 타입 가드 함수에서 true를 리턴하면, TypeScript는 해당 값이 특정 타입이라고 확신하게 돼.
// 이 함수가 true를 리턴하면 TypeScript는 person Member 타입이라고 간주해
function isMember(person: Person): person is Member{
    return person.kind === "member";
}

function printPersonInfo(person: Person){
    // 회원.
    if(isMember(person)){
    console.log(`회원 ID: ${person.memberId}`);
    }
    // 손님.
    else{
    console.log(`방문 이유: ${person.visitReason}`);
    }
}