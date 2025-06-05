// [문제 5] any, unknown 실습
// (1) 아래 두 변수를 선언하세요.

let guessAny: any = 42;
let guessUnknown: unknown = 42;

// (2) 아래 코드가 각각 컴파일/런타임에서 어떻게 동작하는지 예측하고 실험하세요.

guessAny.toFixed(); // ✅ 컴파일 OK, 런타임 OK (number니까)
guessAny.toUpperCase(); // ✅ 컴파일 OK, ❌ 런타임 에러 (number는 toUpperCase 없음)

// guessUnknown.toFixed();     // ❌ 컴파일 에러: Object is of type 'unknown'.
// guessUnknown.toUpperCase(); // ❌ 컴파일 에러

// (3) 타입 가드로 unknown 값을 안전하게 다뤄보세요.
if (typeof guessUnknown === "number") {
  guessUnknown.toFixed();
  // 여기에 toFixed() 사용해보세요.
}
