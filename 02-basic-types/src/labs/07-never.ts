// [문제 7] never 타입 실습
// (1) 아래 조건에 맞는 never 타입 함수 2개를 작성하세요.
//    1. 항상 예외를 던지는 함수
//    2. 절대 끝나지 않는 함수(무한루프)

function throwErr(message: string): never /* TODO */ {
  throw new Error(message);
  // 에러 발생
}

function runForever(): never /* TODO */ {
  //   // 무한루프
  while (true) {
    console.log("계속 실행 중...");
  }
}

// (2) never 타입 변수에 어떤 값도 할당할 수 없는지 직접 시도해보세요.

let nope: never;
// nope = 1;
// nope = undefined;
// nope = null;
