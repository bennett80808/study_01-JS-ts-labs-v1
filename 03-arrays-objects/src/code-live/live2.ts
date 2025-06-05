// 객체
let user: { id: number; name: string } = {
  id: 1,
  name: "윤유저",
};

let student: {
  name: string;
  age: number;
  scores: [string, number][];
};
student = {
  name: "윤유저",
  age: 22,
  scores: [
    ["자바스크립트", 50],
    ["자바", 70],
  ],
};

// 선택적 프로퍼티티
let product: {
  id: number;
  name: string;
  price: number;
  description?: string; // 옵셔널. 넣든 안넣든 괜찮
};

product = {
  id: 1,
  name: "아이폰16",
  price: 1000000,
};

// readonly 속성
let order: {
  userId: number;
  status: string;
  amount: number;
  readonly createAt: string;
};

order = {
  userId: 1,
  status: "배송중",
  amount: 123213,
  createAt: "2025-5-29",
};
order.status = "배송완료";
// order.createAt = "2025-5-30" // 안됨 readonly
