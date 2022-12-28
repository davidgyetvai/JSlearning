'use strict'
//Linking JS File
/*
let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);*/



//Values and Variables
/*
//a Variable lényegében egy doboz, amiben elraktározod a Value-t (adatot)
const firstName = "David";
const lastName = "Gyetvai";
let age = 24;
console.log(firstName, lastName, age);

//ragaszkodj a camelCase íráshoz a neveknél, valamint igyekezz olyan neveket adni, hogy tudjad mit tartalmaz a variable!

let myFirstJob = "Coiler";
let myCurrentJob = "Still a Coiler, but I'm learning programming";

//ez a módzser jobb és tartalmasabb, mint ha ez lenne:

let job1 = "Coiler";
let job2 = "Still a Coiler, but I'm learning programming";*/



//Data Types
/*
//Value lehet Object vagy Primitive. 7 primitív adat typus van: Number (let age = 23), String (let firstName "David"), Boolean (let fullAge = true), undefined (let children), Null, Symbol, BigInt

//fontos megjegyezni, hogy a variablenek van typusa, hanem az valuenak!

true; // boolean
let javascriptIsFun = true;
//console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
console.log(typeof "David");
console.log(typeof 24);

//dinamic typing

javascriptIsFun = "YES"; //csak a let variable-t lehet változtatni. Ha változtatni akarod, akkor nem kell újra odaírni elé a let-et!

console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1998;
console.log(typeof year);*/



//let, const and var
/*
let age = 24;
age = 25;
//amikor tudjuk, hogy a későbbiekben változtatni kell vagy még nem ismerjük(undefined) a value-t, akkor a letet használjuk. Ugyan a value mutation hasznos, de a használatát kerüljük, mert ezzel növeljük a bugok esélyét.

const birthYear = 1998;
//amikor tudjuk, hogy az adott value nem fog változni a későbbiekben, akkor a constot kell használni a variable meghatározásakor. Ha a constot akarjuk változtani, akkor a JS hibát fog visszaadni. Ez az oka annak, hogy a constot nem használhatjuk undefinedként! Ennek ellenére a constot használjuk az esetek többségében, ezzel elérve a clean codingot!

var job = "Coiler";
job = "Learning to program";

//a var a régi variáns meghatározás, amely 2015 előtt (ES6) volt használva. A var (function-scoped) nagyon hasonlít a let-hez (blocked scoped), de nem ugyanaz! A var bugos, nem árt ha ismerjük (a régebbi kódok miatt), de a használtatát igyekezzünk kerülni.

lastName = "Gyetvai";
//ugyan felmerülhet benned, hogy a variánst nem is kell meghatározni. De igen, meg kell. Mert ez csak propertyt hoz létre és bugokhoz vezethet.*/



//Basic Operators
/*
//Math operators (matematikai operátor
const now = 2051;
const ageDavid = now - 1998;
const ageBeatrix = now - 2005;
console.log(ageDavid, ageBeatrix);

console.log(ageDavid / 2, ageBeatrix * 2, 2 ** 3);
//2 ** 3 jelentése a 3 = 2*2*2

const firstName = "Dániel";
const lastName = "Gyetvai";
console.log(firstName + " " + lastName);

//Assignment operators (művelet operátor)
let x = 10 + 5;
x += 10; //x = x + 10; így a végösszeg 25 lesz.
x *= 4; //x = x * 4; itt a végösszeg 100 lesz, mert korábban az x 25 lett.
x++; // x = x + 1; itt a végösszeg 101 lett, mert hozzáadtunk 1-et (a ++ mindig hozzáad egyet);
x--; //x = x - 1; itt a végösszeg visszacsökken 100-ra, mert a '--' a '++' ellentettje!
console.log(x);

//Comparison operators (összevető operátorok)
console.log(ageDavid > ageBeatrix); //>, <, >= és <=
console.log(ageBeatrix >= 50);
//a comparison eredménye mindig boolean lesz. Éles helyzetben a kapott eredményeket mindig mentenénk egy variablebe. Jelen esetben csak prezentáltuk a dolgokat.
const isFiftyYearOld = ageBeatrix >= 50;

console.log(now - 1998 > now - 2005); //ez a feladat ugyanaz, mint a console.log(ageDavid > ageBeatrix).*/



//Operator Precedence
/*
const now = 2051;
const ageDavid = now - 1998;
const ageBeatrix = now - 2005;

console.log(now - 1998 > now - 2005);
//a programozások során az MDN - Mozilla Developer Network sokat lesz használva!

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //mivel a - magasabb besorolással rendelkezik, a végeredmény x = y = 10. Azonban az egyenlő az ellenkező irányba lesz elvégezve, szóval először az y-t kapjk meg, majd az x-et.
console.log(x, y);

const averageAge = (ageDavid + ageBeatrix) / 2;
console.log(ageDavid, ageBeatrix, averageAge);*/



//CODING CHALLENGE #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK

let markWeightData1 = 78;
let markHeightData1 = 1.69;
let johnWeightData1 = 92;
let johnHeightData1 = 1.95;

let markBMI1 = markWeightData1 / (markHeightData1 * markHeightData1);
let johnBMI1 = johnWeightData1 / (johnHeightData1 * johnHeightData1);
//console.log(markBMI1, johnBMI1);

let markHigherBMI1 = (markBMI1 > johnBMI1);
//console.log(markHigherBMI1);

let markWeightData2 = 95;
let markHeightData2 = 1.88;
let johnWeightData2 = 85;
let johnHeightData2 = 1.76;

let markBMI2 = markWeightData2 / (markHeightData2 * markHeightData2);
let johnBMI2 = johnWeightData2 / (johnHeightData2 * johnHeightData2);
//console.log(markBMI2, johnBMI2);

let markHigherBMI2 = (markBMI2 > johnBMI2);
console.log(markHigherBMI2);*/



//String and Template literals
/*
const firstName = "David";
const job = "coiler";
const birthYear = 1998;
const year = 2023;

const david = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
//console.log(david);
//az alábbi módszer elég bonyolult és körülményes. Szerencsére az ES6 óta létezik a template literal, ami jelentősen egyszerűsíti a dolgunkat!

const davidNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
//console.log(davidNew);
//a végeredmény ugyan az lesz, mégis sokkal egyszerűbb a dolgunk.

console.log(`Just a regular string...`);
// A backsticks `` alap helyzetben is használható a '' és a "" helyett is!

console.log("String with \n\
multiple \n\
lines");
console.log(`String with
multiple
lines`);
//ha több sorban akartuk stringet megjeleníteni, az ES6 előtt az \n\ parancsot használtuk. Köszönhetően a template stringsnek jelenleg a backstikek között elég entert ütni a sorok között!*/



//Taking Decisions: if / else statement

const age = 18;