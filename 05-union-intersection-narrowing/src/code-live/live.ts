// 유니온 타입 '|':파이프 기호
// 여러 타입 중 하나

let value: number | string | boolean=2;
value ="hello";
value = true;

// 2. 인터섹션 타입 '&'

type Person = {name: string};
type Developer ={skills: string[]};
type DevOrPerson = Person | Developer; // 둘다도 가능, 각각도 가능.
type DevPerson = Person & Developer; // 둘다 들어가야됨.

const personA: DevOrPerson = {
    // name: "윤개발",
    skills: ["자바스크립트1", "자바1"],
}

const personB: DevPerson = {
    name: "윤개발",
    skills: ["자바스크립트2", "자바2"],
}

