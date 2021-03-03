'use strict';
let count =0;
/*function guess(answerUserInput) {
    if (answerUserInput==='yes'|answerUserInput==='y') {
        console.log ('Correct')
        alert ('correct '  +  x)
        count++;
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
    count++;
} else {
    console.log ('you can choose yes,y,no,n')
    alert ('you can choose yes,y,no,n')};
let userName = prompt('can you tell me your name?');
alert ('Welcome ' + userName);
alert ('Thank you' + userName +' for your time');*/
/*let userAge = prompt('can you tell me your age?');*/
/*let userAge1 = parseInt(userAge);*/
/*let qusetions61 = parseInt(qusetions6);*/
/*let myAge = 25 ;
let result= userAge1 + myAge ;*/
let opportunities =0;
/* this code take a lot of time (8 hours), and it did not run correctly plz give me hints why it did not work
do {
    switch (result) {  
        case qusetions61 === result : alert('welldone' + result)
            break;
        case qusetions61 > result : alert('too high');
        prompt('try again?');
            break;
        case (qusetions61 < result) :
             alert('too low');
        prompt('try again?');
        break;
        default: prompt('try again?')
            break;
           }
    opportunities-=1;
    alert('the true result is' + result);
} while (opportunities>0);*/
let myBornMonth=5;
let qusetions6 = prompt ('sixth qusetion: gusess my born moth?');
while (opportunities<=2) {
    if (parseInt(qusetions6) === myBornMonth) {alert('welldone'); 
    count++; 
    console.log(count);
    break;
}else if (parseInt (qusetions6) > myBornMonth) {alert('too high');
    opportunities+=1; 
    console.log(opportunities);
    qusetions6=prompt('sixth qusetion: gusess my born moth?');
    }else if (parseInt (qusetions6) < myBornMonth){alert('too low');
    opportunities+=1; 
    console.log(opportunities);
    qusetions6=prompt('sixth qusetion: gusess my born moth?');
    }
     else {
        alert('you can use just number');
        opportunities+=1;
        qusetions6=prompt('sixth qusetion: gusess my born moth?');
        console.log(opportunities); 
    }
}
 alert('the true result is' +myBornMonth) ;
/*q7*/
opportunities=0
let qusetions7answer =['dark','pink','yellow']
let hint=alert('first color as dark , second as a rose and the third as a sun')
let qusetions7 = prompt ('seventh qusetion: What are My favorite colors ?');
while (opportunities<5) {
for (let i = 0; i <qusetions7answer.length; i++) {
    if (qusetions7===qusetions7answer[i]) {alert('it is correct');
    count++;
    opportunities+=10
    break;
    }  
}
alert('try again'+hint);
opportunities+=1;
qusetions7 = prompt ('seventh qusetion: What are My favorite colors ?');
}
alert(count /'out/7');

