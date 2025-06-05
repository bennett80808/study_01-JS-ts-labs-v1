// [문제 4] 타입 추론 연습
// (1) 변수 선언 시 타입 표기 없이 값을 대입해서 타입이 어떻게 추론되는지 직접 확인하세요.

let city = "Seoul"; // string
let year = 2024; // number
let isHoliday = false; //boolean
let luckyNumbers = [7, 13, 21]; // 배열의 타입 추론도 확인해보세요 number[]
let scores = [100, "A", true]; // 여러 타입이 섞인 배열 추론 결과는?
// let scores: (string | number | boolean)[]
// (string | number | boolean) 중 하나의 값을 가질 수 있는 요소들로 구성된 배열

// city = 123;
// year = "올해";
// isHoliday = 0;

// (2) const와 let의 타입 추론 차이도 확인해보세요.
const pi = 3.14; // pi 타입은? 리터럴 3.14
let e = 2.71; // e 타입은? number
