'use strict';
function guess(answerUserInput) {
    if (answerUserInput==='yes'|answerUserInput==='y') {
        console.log ('Correct')
        alert ('correct '  +  x)
    }else if (answerUserInput==='no'|answerUserInput==='n') {
        console.log ('wrong')
        alert ('wrong') 
    } else {
        console.log ('you can choose yes,y,no,n')
        alert ('you can choose yes,y,no,n')
    }
}
alert ('this is my short bio,so please read it first than answer qusetions ');
alert ('Hala khamayseh, 25 years old. I graduated with my degree in Translation from Yarmouk university three years ago. Now I am web developer student in LTUC-Abdul Aziz Al Ghurair School of Advanced Computing with © Code Fellows ');
let qusetions1 = prompt ('first qusetion: Is my famaliy name (khamayseh)?');
 let x = 'is khamayseh';
guess (qusetions1);
let qusetions2 = prompt ('secound qusetion: Did I study in Yarmouk univercity?');
 x = 'is Yarmouk univercity';
guess (qusetions2);
let qusetions3 = prompt ('third qusetion: DO I study wep developer?');
x = 'is wep developer';
guess (qusetions3);
let qusetions4 = prompt ('fourth qusetion: Is my age 25?');
 x = '25';
guess (qusetions4);
let qusetions5 = prompt ('fifth qusetion: Is my name spalling (h-l-a)?')
if (qusetions5==='yes'|qusetions5==='y') {
    console.log ('wrong')
    alert ('wrong')
}else if (qusetions5==='no'|qusetions5==='n') {
    console.log ('correct')
    alert ('correct '+ ' it is h-a-l-a' ) 
} else {
    console.log ('you can choose yes,y,no,n')
    alert ('you can choose yes,y,no,n')};
let userName = prompt('can you tell me your name?');
alert ('Welcome ' + userName);
alert ('Thank you' + userName +' for your time');
let userAge = prompt('can you tell me your age?');
let qusetions6 = prompt ('sixth qusetion: What is the result of my age + your age?');
let result = userAge + 25
let opportunities = 4
switch (result) {
    case qusetions6 = result:alert ('correct it is ' + result);
}
do {
    switch (result) {
        case qusetions6 != result:prompt ('you can try again')
            break;
    
        default: alert('you just add number')
            break;
    }
    opportunities-=1;
    console.log(opportunities)
} while (opportunities>0);

