// 타입 별칭 = type alias
// 복잡하거나 반복적으로 사용되는 타입에 별칭을 붙여서 재사용하는 문법

let user: {
  name: string;
  age: number;
};

user = {
  name: "윤유저",
  age: 25,
};

let user2: {
  name: string;
  age: number;
};
user2 = {
  name: "김유저",
  age: 27,
};

function helloToUser(user: { name: string; age: number }) {
  console.log(`${user.name}님 안녕하세요!!`);
}

// 타입 별칭 선언
type User = { name: string; age: number };

let userA: User = {
  name: "박유저",
  age: 19,
};
let userB: User = {
  name: "서유저",
  age: 20,
};

function helloToUser2(user: User) {
  console.log(`${user.name}님 안녕하세요!!`);
}
