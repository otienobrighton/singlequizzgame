`"use strict"`;
let question = prompt('what is the "official" name of Javascript?', 'answer');

if(question === 'ECMAScript'){
    alert('you got the correct answer');
}else{
    alert('you dont know? its ECMAScript');
};
console.log(question);