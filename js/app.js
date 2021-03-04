'use strict';
let count =0;
function guess(answerUserInput) {
  if (answerUserInput==='yes'|answerUserInput==='y') {
    console.log ('Correct');
    alert ('correct '  +  x);
    count++;
  }else if (answerUserInput==='no'|answerUserInput==='n') {
    console.log ('wrong');
    alert ('wrong');
  }else {
    console.log ('you can choose yes,y,no,n');
    alert ('you can choose yes,y,no,n');
  }
}
alert ('this is my short bio,so please read it first than answer qusetions ');
alert ('Hala khamayseh, 25 years old. I graduated with my degree in Translation from Yarmouk university three years ago. Now I am web developer student in LTUC-Abdul Aziz Al Ghurair School of Advanced Computing with © Code Fellows ');
let qusetions1 = prompt ('first qusetion: Is my famaliy name (khamayseh)?').toLowerCase();
let x = 'is khamayseh';
guess(qusetions1);
let qusetions2 = prompt ('secound qusetion: Did I study in Yarmouk univercity?').toLowerCase();
x = 'is Yarmouk univercity';
guess(qusetions2);
let qusetions3 = prompt ('third qusetion: DO I study wep developer?').toLowerCase();
x = 'is wep developer';
guess(qusetions3);
let qusetions4 = prompt ('fourth qusetion: Is my age 25?').toLowerCase();
x = '25';
guess(qusetions4);
let qusetions5 = prompt ('fifth qusetion: Is my name spalling (h-a-l-a)?').toLowerCase();
guess(qusetions5);
let opportunities =0;
let myBornMonth=5;
let qusetions6 = parseInt(prompt ('sixth qusetion: gusess my birth month?'));

function birthMonth(mon){
  while (opportunities<=2) {
    if(mon===myBornMonth) {
      alert('welldone');
      count++;
      console.log(count);
      break;
    }else if (mon > myBornMonth) {
      alert('too high');
      opportunities+=1;
      console.log(opportunities);
      mon=prompt('sixth qusetion: gusess my born moth?');
    }else if (mon < myBornMonth){
      alert('too low');
      opportunities+=1; 
      console.log(opportunities);
      qusetions6=prompt('sixth qusetion: gusess my born moth?');
    }else {
      alert('you can use just number');
      opportunities+=1;
      mon=prompt('sixth qusetion: gusess my born moth?');
      console.log(opportunities);
    }
  }
  alert('the true result is' +myBornMonth) ;
}
birthMonth(qusetions6);
/*q7*/
//===================================================================
opportunities=0;
let qusetions7answer =['dark','pink','yellow'];
let hint=alert('first color as dark , second as a rose and the third as a sun');
let qusetions7;
function faviroteColor(rose){
  do{
    rose = prompt ('seventh qusetion: What are My favorite colors ?');
    for (let i = 0; i <qusetions7answer.length; i++) {
      if (rose===qusetions7answer[i]) {
        alert('it is correct');
        count++;
        opportunities+=10;
        break;
      }
    }
    if(opportunities>6){
      break;
    }
    alert('try again'+hint);
    opportunities+=1;
  }while (opportunities<5);
}
faviroteColor(qusetions7);
alert(count +' out of 7')