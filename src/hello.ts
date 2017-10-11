/**
 * Created by asiainfo on 2017/10/11.
 */

console.log("Hello TypeScript!");

let names:string="蒋涛";
let years:number=5;
/*let words:string=`你好,今年 ${names}发布 ${years}岁`;
 console.log(words);*/
let arr:number[]=[1,2];
let arr1:Array<number> =[1,2];

let x:[string,number];
x=["Rcik",4];
console.log(x[0]);


enum Color{ Red,Green,Blue};
let c:Color=Color.Blue;
console.log(c);

let y:any=1;
y="I am String";
y=false;
console.log(y);

let z:any=4;
z.toFixed();
console.log(z);

let arrayList:any[]=[1,false,"fine"];
arrayList[0]=100;
console.log(arrayList);
console.log(arrayList[0]);