'use strict';

/* 
function Accumulator(value){
  this.value = value;
  this.read = function(){
    this.value += +prompt();
  this.bab = '123';
  }
} <<<<< just some function for fun

Uniq id, all Symbols are unique and u can id.describe and 
for alert we have spacial contraction is id.toString() 


For(){...} doesnt read Symbols and for copy u need 
let (clone) = Object.assign({}, (some list of this shit) )

let clone_symbols = Object.assign({},symbols);

listt.id = "asd";
alert(listt.id);

listt.id = 'ssd';
alert(listt.id);

*/



let listt = {
  asd:'pisa',
  ssd:'popa',
};

let id = Symbol('not sad');
/*id upper then this str is unique, but under is diffrent 
Remember this shit (((

Its had better if u use Symbols for list indeficator:

let id = Symbol("id");
user[id] = "Их идентификатор";



let id = Symbol("id");
let user = {
  name: "Вася",
  [id]: 123 // просто "id: 123" не сработает
};

*/
let symbols ={
  [id]: 'sad',
  name:"zaza",

};
let clone_symbols = Object.assign({},symbols);
// alert(clone_symbols[id])
// alert(symbols[id]);
// alert(id.description);

/* we clone this shit 
  Здесь нет никакого парадокса или противоречия. Так и задумано. Идея заключается в том, что,
   когда мы клонируем или объединяем объекты, 
  мы обычно хотим скопировать все свойства 
  (включая такие свойства с ключами-символами, как, например, id в примере выше).
*/


/*
GLOBAL_SYMBOLS
Для чтения (или, при отсутствии, создания) 
символа из реестра используется вызов 
Symbol.for(key).

Он проверяет глобальный реестр и, 
при наличии в нём символа с именем key, 
возвращает его, иначе же создаётся новый символ 
Symbol(key) и 
записывается в реестр под ключом key.

Example:
let ids = Symbol.for('Piska');
let idk = Symbol.for('Piski');
alert(ids == idk);   True

Symbols who are in registry, called GLOBAL_SYMBOLS. 
If u need symbol, which is avaliable everywhere - just use GLOBAL_SYMBOLS.

Для глобальных символов, кроме Symbol.for(key), 
который ищет символ по имени, 
существует обратный метод: 
Symbol.keyFor(sym), который, наоборот, 
принимает глобальный символ 
и возвращает его имя.

Example:
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

Внутри метода Symbol.keyFor используется глобальный 
реестр символов для нахождения имени символа. 
 Так что этот метод не будет работать для
неглобальных символов. Если символ неглобальный, 
метод не сможет его найти и вернёт undefined.
*/



