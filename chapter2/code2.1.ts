import { parse } from "../tiny-ts-parser.ts";

console.log(parse("1 + 2"));

// {
//   tag: "add",
//   left: {
//     tag: "number",
//     n: 1,
//     loc: { end: { column: 1, line: 1 }, start: { column: 0, line: 1 } }
//   },
//   right: {
//     tag: "number",
//     n: 2,
//     loc: { end: { column: 5, line: 1 }, start: { column: 4, line: 1 } }
//   },
//   loc: { end: { column: 5, line: 1 }, start: { column: 0, line: 1 } }
// }

// memo: loc=location, これから作る型検査機のエラー表示で使う位置情報
