//**1 */
//Дана строка . Замените все @ на '!' с помощью глобального поиска и замены.

let str1 = 'aaa@bbb@ccc';
str1 = str1.replace(/\@/g, '!');
console.log(str1);

//**2 */
//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

let str2 = 'aaa bbb ccc';
let reg2 = /bbb/;
let indexCut = reg2.exec(str2).index;

let resultSubstr = str2.substr(0, indexCut) + str2.substr(indexCut + 4);
console.log(resultSubstr);

let resultSubstring = str2.substring(0, indexCut) + str2.substring(indexCut + 4);
console.log(resultSubstring);

let resultSlice = str2.slice(0, indexCut) + str2.slice(indexCut + 4);
console.log(resultSlice);

//**3 */
//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.

let str3 = '2025-12-31';
let arr3 = str3.split(/-/).reverse();
str3 = arr3.join('/');
console.log(str3);

//**4 */
//Дана строка 'JS'. Сделайте из нее строку 'js'

let str4 = 'JS';
str4 = str4.replace(/JS/, 'js');
console.log(str4);

//**5 */
//Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript'

let str5 = 'я учу javascript!';
str5 = str5.replace(/( учу| javascript)/g, '');
console.log(str5);

//**6 */
//Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

let str6 = 'я учу javascript!';
console.log(str6.search(/учу/));

//**7 */
//Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.

let str7 = 'Я-учу-javascript!';
str7 = str7.replace(/\-/g, '!');
console.log(str7);

//**8 */
//Преобразуйте первую букву строки в верхний регистр.

let str8 = 'javascript!';
let result8 = str8.replace(/(^[a-zа-я])/, (a, item) => `${item}`.toUpperCase());
console.log(result8);

//**9 */
//Преобразуйте первую букву каждого слова строки в верхний регистр.

let str9 = 'i am learning javascript';
let result9 = str9.replace(/(\b[a-z])/g, (a, item) => `${item}`.toUpperCase());
console.log(result9);

//**10 */
//Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками

let str10 = 'var_test_text';
// let str10 = 'i_am_learning_javascript'
str10 = str10.replace(/\_([a-z])/g, (a, item) => `${item}`.toUpperCase());
console.log(str10);