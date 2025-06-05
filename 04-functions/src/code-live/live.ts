// 함수선언
// (1) 함수 선언식
// (2) 함수 표현식, 변수 =함수(값) // 함수를 값처럼 표현하고, 변수에 할당" 하는 방식
// (3) 화살표 함수

function add(a: number, b: number) {
  return a + b;
}

const sub = function (a: number, b: number): number {
  return a - b;
};

const multiply = (a: number, b: number): number => a * b;

// 선택적 매개변수
function log(msg: string, userName?: string): void {
  if (userName) {
    console.log(`${userName}: ${msg}`);
  } else {
    console.log(`${msg}`);
  }
}

log("hi");
log("hi", "김상우");

// 나머지 매개변수 ...:"함수에 전달된 여러 개의 인자를 하나의 배열로 모아주는 문법"
function sumAll(...nums: number[]) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}
//reduce()는 배열의 요소를 하나로 축약하는 함수야.
sumAll(1, 2);
sumAll(1, 2, 3);
sumAll(1, 2, 3, 4);

// 함수 = 값
// 직접 함수 타입을 지정하는 방식. 중요!!!
// 타입 별칭, 인터페이스(함수, 객체, ...)

// 타입 별칭 선언언
type OP = (a: number, b: number) => number; // 타입지정 : 로직없음. => 반환값 형태


// 함수 선언
function compute(a: number, b: number, op: OP) {
  return op(a, b);
}

let func:OP = function(a,b){
    return a+b;
}

compute(1,2, func);

// 함수 오버로딩
// 시그니처가 달라
// (매개변수...)
// 매개변수는 같고 리턴만 다른 경우는 오버로딩이 아님.

function func2(a:string,b:string): number;
function func2(a:number,b:number): number;
function func2(a:string,b:number): number;

function func2(a:any,b:any): any{ 
    return a+b;
};

func2("a",1);
func2(1,1);
func2("a","a");
