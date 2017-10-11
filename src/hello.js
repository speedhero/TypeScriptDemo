/**
 * Created by asiainfo on 2017/10/11.
 */
console.log("Hello TypeScript!");
var names = "蒋涛";
var years = 5;
/*let words:string=`你好,今年 ${names}发布 ${years}岁`;
 console.log(words);*/
var arr = [1, 2];
var arr1 = [1, 2];
var x;
x = ["Rcik", 4];
console.log(x[0]);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
var y = 1;
y = "I am String";
y = false;
console.log(y);
var z = 4;
z.toFixed();
console.log(z);
var arrayList = [1, false, "fine"];
arrayList[0] = 100;
console.log(arrayList);
console.log(arrayList[0]);
//# sourceMappingURL=hello.js.map