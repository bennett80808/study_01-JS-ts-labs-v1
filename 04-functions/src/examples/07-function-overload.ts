function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}
// TypeScript의 함수 오버로드: 오버로드 할 선언식 위에 다 쌓아두고 마지막 줄에만 구현을 적는다

// ❌ (number, number) => number 와 (number, number) => string 는 오버로드로 공존할 수 없어.
// 왜냐면 TypeScript의 오버로드는 매개변수의 타입으로 구분하지, 반환 타입만 다르면 오버로드를 허용하지 않아.

console.log(combine(10, 20)); // 숫자 덧셈
console.log(combine("안녕", "하세요")); // 문자열 연결

