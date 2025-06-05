/**
 * [문제] 주문 상태(OrderStatus)를 enum으로 정의하고,
 * 주문 목록에서 "배송 중"인 주문만 추출하세요.
 * 1. OrderStatus: "PENDING", "SHIPPED", "DELIVERED", "CANCELLED" 네 가지 값
 * 2. Order 타입은 id, status, item 필수
 * 3. orders 배열에 3개 이상 입력
 * 4. 배송 중(SHIPPED) 주문만 shippedOrders에 저장
 */

// TODO: OrderStatus enum, Order 타입, orders 배열, shippedOrders 추출

// 1. OrderStatus enum 정의
enum OrderStatus {
  PENDING = "PENDING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

// 2. Order 타입 정의
type Order = {
  id: number;
  status: OrderStatus;
  item: string;
};

// 3. 주문 목록
const orders: Order[] = [
  { id: 1, status: OrderStatus.SHIPPED, item: "노트북" },
  { id: 2, status: OrderStatus.PENDING, item: "키보드" },
  { id: 3, status: OrderStatus.SHIPPED, item: "마우스" },
  { id: 4, status: OrderStatus.DELIVERED, item: "모니터" },
];
// 4. 배송 중(SHIPPED)인 주문만 필터링
const shippedOrders: Order[] = orders.filter(
  (order) => order.status === OrderStatus.SHIPPED
);

// 결과 출력 (선택)
console.log("배송 중 주문 목록:", shippedOrders);
