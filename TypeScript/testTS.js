/**
 * 代码测试文件
 */
// enum Color {
//     blue, red, 'orange'
// };
// var c: Color = Color.red;
// console.log(c);   //1  如果标识符没有赋值 它的值就是下标
// enum Color {
//     blue, red = 3, 'orange'
// };
// var c: Color = Color.blue;
// console.log(c); //0
// var c: Color = Color.red;
// console.log(c);   //3
// var c: Color = Color.orange;
// console.log(c);   //4
// function getInfo(name: string, age?: number): void {
//     console.log(name)
//     if (age) {
//         console.log(age)
//     }
// }
// function func(...result: number[]): void {
//     for (let i of result) {
//         console.log(i)
//     }
// }
// func(1, 2, 3, 4, 5)
// class Person {
//     constructor(parameters) {
//     }
// }
// class PersonTest {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     run(): string {
//         return `${this.name}在运动`
//     }
// }
// let m = new PersonTest('王五');
// console.log(m.run())
// class Web extends PersonTest {
//     constructor(name: string) {
//         super(name); //初始化父类的构造函数
//     }
//     run(): string {
//         return `${this.name}在运动-子类`
//     }
//     work(): void {
//         console.log(`${this.name}在工作`)
//     }
// }
// var w = new Web('李四');
// // console.log(w.run());
// // w.work();
// console.log(w.run());
var PerTest = /** @class */ (function () {
    function PerTest(name) {
        this.age = 20;
        this.name = name;
    }
    PerTest.prototype.run = function () {
        console.log(this.name + "\u5728\u8FD0\u52A8");
    };
    PerTest.prototype.work = function () {
        console.log(this.name + "\u5728\u5DE5\u4F5C");
    };
    PerTest.print = function () {
        console.log('print方法2' + PerTest.sex);
    };
    PerTest.sex = "男"; //静态属性
    return PerTest;
}());
// var p = new PerTest('张三');
// p.run();
PerTest.print();
console.log(PerTest.sex);
