// 열거형 (enum)
// 정해진 값들만 사용하는 타입(한정할 때)
// 자바스트립트에 없는 문법

// 왜써요?
// (1) 가독성 향상
// (2) 오류 방지
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}
// 값을 안넣어도 기본적으로 들어감.

// let user: {
//   name: string;
//   role: string;
// };

// user = {
//     name: "윤유저",
//     role: "adminn",
// }

let user: {
  name: string;
  role: Role;
};
user = {
  name: "윤유저",
  role: Role.ADMIN,
};

enum Status {
  Pending = "pending",
  Success = "success",
  Reject = "reject",
}

// 유니온 (|)
type Status2 = "pending" | "success" | "reject";
