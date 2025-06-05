// [문제 8] 타입 호환성 실습
// (1) 아래 변수들의 타입을 선언하고, 주석으로 할당 가능/불가 여부를 확인하세요.

let n1: number = 10;
let s1: string = "test";
let b1: boolean = true;
let u1: unknown = "뭔가";
let a1: any = 777;
// any 와 unkwon은 다 받을 수 있다. 추상적인 타입이 구체적인 타입을 받을 수 있는 원리 (다형성)

// n1 = s1;       ❌ string → number  할당 불가
//                타입 불일치: string은 number에 할당할 수 없음

s1 = a1; //✅ any는 어디든 할당 가능
//                any는 타입 검사를 건너뛰기 때문에 문제 없음

// b1 = u1;       ❌ unknown → boolean  직접 할당 불가
//                unknown은 타입 가드 없이 다른 타입에 할당 불가능

u1 = n1; // ✅ number → unknown 가능
//                모든 타입은 unknown에 할당 가능함

a1 = b1; // ✅ boolean → any 가능
//                any는 어떤 타입이든 받아들임

// n1 = s1;
// s1 = a1;
// b1 = u1;
// u1 = n1;
// a1 = b1;
