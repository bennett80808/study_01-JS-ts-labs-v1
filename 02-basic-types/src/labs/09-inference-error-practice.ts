// [문제 9] 타입 추론의 위험성(암묵적 any) 연습

// 타입 표기 없이 선언만 한 변수, 여러 타입을 할당해보고 IDE에서 어떤 안내가 나오는지 실험해보세요.

let mystery;
// 타입을 지정하지 않았고, 값을 초기화하지도 않았기 때문에
// 👉 TypeScript는 mystery의 타입을 any로 암묵적으로 추론해
// any는 가급적으로 안쓰는게 좋다.
mystery = 1;
// mystery = "정체불명";
// mystery = false;

// 아래처럼 숫자/문자열/불린 메서드를 모두 호출해도 에러가 안 나는지 확인해보세요.
mystery.toFixed();
// mystery.toUpperCase();
// mystery.valueOf();
