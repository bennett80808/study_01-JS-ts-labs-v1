// 1. 배열

// 숫자형 배열열
let numbers: number[] = [1, 2, 3];
numbers.push(1);
numbers.unshift(0);

console.log(numbers);

let numbers2: Array<number> = [1, 2, 3];

// 문자열 배열
let fruits: string[] = ["바나나", "사과", "키위"];

let flexArr: (number | string | boolean)[] = [1, "2", "3", 4, true];

// 2차원 배열
let twoDimArr: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
];

let twoDimArr2: (string | number)[][] = [
  ["1", "2", "3"],
  [1, 2, 3],
];

// 2. 튜플
// 파이썬
// 길이와 타입이 고정된 특수 배열
// JS로 변환 시 배열

let tuple: [number, string] = [10, "20"];

tuple.push(1);
tuple[0] = 2;
// tuple[0] = "2"; // 안됨

// readonly : 읽기 전용.(Immutable = 불변) 요소 수정 불가능 but 재할당은 가능
let tuple2: readonly [number, string] = [1, "hello"];
// tuple2.push(1); // x
tuple2 = [2, "good"]; // O

//const : 재할당 불가능 but 요소 수정정 가능
const tuple3: [number, string] = [1, "hello"];
// tuple3 = [2, "good"]; // 불가능
tuple3.pop();
tuple3.push(1);
console.log(tuple3);
