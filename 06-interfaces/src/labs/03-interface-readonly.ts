// [문제]
// 2차원 평면의 점(Point)을 표현하는 인터페이스를 작성하라.
// x, y 좌표 모두 읽기 전용이어야 하며, 숫자 타입이어야 한다.
// 아래 코드에서 pt.x = 5를 시도하면 에러가 발생해야 한다.
// readonly : 객체의 특정 속성을 한 번 설정하면 다시는 값을 바꿀 수 없도록 막는 역할
interface twoD {
  readonly x : number;
  readonly y : number;
}

const pt = { x: 3, y: 7 };
// pt.x = 5; // 이 줄의 주석을 해제하면 타입 에러가 발생해야 한다.

function printPoint(point:twoD) {
  console.log(`(${point.x}, ${point.y})`);
}
printPoint(pt);