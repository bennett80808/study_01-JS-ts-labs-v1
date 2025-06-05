// 타입스크립트 기본 타입

// (1) number
// : number -> 타입 어노테이션션
let num: number = 123; // 123은 숫자형 리터럴 -> 타입스크립트는 숫자라고 판단 : 타입 추론
num = -123;
num = 0.123;
num = -0.123;
num = 123124.124123;
// num = "1234"; // x

// (2) 문자열
let str: string = "hello";
str = `${num}`;
// str = 123;
str.toUpperCase();
// str.toFixed();

//(3) boolean
let bool: boolean = true;
// bool = "false"; 안됨

// (4) null
let nullVal: null = null;
// nullVal = "";
// nullVal = undefined; 안됨

// (5) undefined
let undefinedVal: undefined;
undefinedVal = undefined;
// undefinedVal = null; 안됨

// (6) 값 자체가 타입 = 리터럴 타입 (-> 유니온 타입)
let literalVal: "hello"; // "hello" 만 넣을 수 있다. 사용자 정의의
literalVal = "hello";
// literalVal = "hi"

// (7) any 타입과 unknown 타입
// any : 누구든지. 뭐든지 허용하고 바로 사용 가능
// unkown : 알려지지 않은. 안전한 any. 뭐든지 허용은 가능한데 바로 사용이 안됨.
// 대부분의 경우에는 unknown 쓰는게 권장

let a: any = 123;
a = "";
a = {};

a.toUpperCase();

let b: unknown = 123;
b = "";
b = {};

// 타입가드를 사용하며 사용 가능
// unknown 타입은 타입을 확인하기 전까지는 사용을 제한함.
if (typeof b === "string") {
  b.toUpperCase();
}

// (8) void 타입
// 반환값이 없다는 의미

function returnHello(): string {
  return "hello";
}

function sayHello(): void {
  console.log("hello");
  //   return undefined;
  // return;
}

function echoMsg(msg: string): string {
  return msg;
}

// (9) never
// 어떤 값도 담을 수 없는 타입
// throw 혹은 무한루프

let neverVal: never;
// neverVal = "";
// neverVal = defined;
// neverVal = never;
// neverVal = null;

function throwError(msg: string): never {
  throw new Error(); // 리턴이 없음
}

function infiniteLoop(): never {
  while (true) {
    console.log("...");
  }
}
