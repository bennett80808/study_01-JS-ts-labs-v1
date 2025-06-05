/**
 * [문제] 강의(Lecture) 정보를 타입 별칭으로 선언하고, 강좌 목록을 다루세요.
 * 1. Lecture 타입: title(제목), instructor(강사명), students(수강생 수, number)
 * 2. lectures 배열에 3개 이상 입력
 * 3. 수강생이 30명 이상인 강좌만 popularLectures에 저장
 * 4. 모든 강좌의 제목을 titleList에 모으기
 */

// TODO: Lecture 타입, lectures 배열, popularLectures, titleList 완성
type Lecture = {
  title: string;
  instructor: string;
  students: number;
};

const lectures: Lecture[] = [
  {
    title: "제목1",
    instructor: "강사1",
    students: 20,
  },
  {
    title: "제목2",
    instructor: "강사2",
    students: 40,
  },
  {
    title: "제목3",
    instructor: "강사3",
    students: 50,
  },
];

const popularLectures = lectures.filter((lecture) => lecture.students >= 30);
const titleList = lectures.map((lecture) => lecture.title);

console.log(popularLectures);
console.log(titleList);
