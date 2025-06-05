// 타입추론
// 타입을 명시하지 않아도 타입스크립트가 알아서 타입을 추론하는 것
// : 추론할 단서(=값)가 있으면 추론이 됨.

let a = 1; // 타입 추론이 되서 정적 타입으로 지정
a.toFixed();
// a =""; // 문자열 할당 x
let b = "hello"; // 문자열로 타입 추론
// b = 123;
let c = true;
// let d{k1: "v1", k2:"v2"} = {}; 객체 구조가 같아야됨됨
let e;

let user: {
  name: string;
  age: number;
};
user = {
  name: "윤유저",
  age: 33,
};

let { name, age } = user; // 타입 추론됨
let [todo, done] = ["청소하기", false];

//함수
function sayHello() {
  console.log("hello");
}

function returnHello() {
  return "hello";
}

// 추론의 단서 없음
function add(a: unknown, b: unknown) {
  // 타입 가드
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
}

// 기본 값을 지정하면 추론 가능
function add2(a = 1, b = "2") {
  return a + b; // number + string == string
}
