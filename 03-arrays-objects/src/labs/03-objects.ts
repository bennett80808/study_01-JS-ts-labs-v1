/**
 * [문제] 책(Book) 객체 타입을 선언하고, 책 목록을 다루는 코드를 작성하세요.
 * 1. Book 타입은 title, author, publishedYear(출간년도), isAvailable(대출가능여부) 필수
 * 2. books 배열을 만들고 2권 이상 입력
 * 3. 현재 대출 가능한 책만 availableBooks에 추출
 */

// TODO: Book 타입, books 배열, availableBooks 필터링
type Book = {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
};
let books: Book[] = [
  {
    title: "타입스크립트 완벽 가이드",
    author: "김개발",
    publishedYear: 2023,
    isAvailable: true,
  },
  {
    title: "자바스크립트 마스터",
    author: "박프로그",
    publishedYear: 2021,
    isAvailable: false,
  },
  {
    title: "AI의 미래",
    author: "이혁신",
    publishedYear: 2024,
    isAvailable: true,
  },
];

// 3. 대출 가능한 책만 필터링
let availableBooks: Book[] = books.filter((book) => book.isAvailable);

// 결과 출력 (선택)
console.log("전체 책 목록:", books);
console.log("대출 가능 책:", availableBooks);
