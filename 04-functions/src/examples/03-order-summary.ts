function getOrderTotal(...prices: number[]): number {
  return prices.reduce((sum, price) => sum + price, 0);
}

console.log(getOrderTotal(1500, 3000, 1200)); // 총합: 5700
console.log(getOrderTotal()); // 0
// 아무것도 전달하지 않으면 prices는 [] (빈 배열)이 됨
// reduce(..., 0)에서 **0은 초깃값(initial value)**이기 때문에:
// 빈 배열이어도 에러 없이 0이 그대로 반환됨

