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


// class PerTest {
//     public name: string;
//     public age: number = 20;

//     static sex = "男"; //静态属性
//     constructor(name: string) {
//         this.name = name;
//     }
//     run() {  //实例方法
//         console.log(`${this.name}在运动`)
//     }
//     work() {
//         console.log(`${this.name}在工作`)
//     }
//     static print() {  //静态方法  里面没法直接调用类里面的属性
//         console.log('print方法2' + PerTest.sex);
//     }
// }

// // var p = new PerTest('张三');
// // p.run();
// PerTest.print();
// console.log(PerTest.sex);

// interface Animal {
//     eat(): void;
// }

// interface Person extends Animal {
//     work(): void;
// }

// class Programmer {
//     public name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     coding(code: string) {
//         console.log(this.name + code)
//     }
// }


// class Web extends Programmer implements Person {
//     constructor(name: string) {
//         super(name)
//     }
//     eat() {
//         console.log(this.name + '喜欢吃馒头')
//     }
//     work() {
//         console.log(this.name + '写代码');
//     }
// }

// var w = new Web('小李');
// w.eat();

// w.coding('写ts代码');

// function logClassTest(params: any) {
//     console.log(params);
//     // params 就是当前类
//     params.prototype.apiUrl = '动态扩展的属性';
//     params.prototype.run = function () {
//         console.log('我是一个run方法');
//     }
// }

// @logClassTest
// class HttpClientTest {
//     constructor() {
//     }
//     getData() {

//     }
// }
// var httpTest: any = new HttpClientTest();
// console.log(httpTest.apiUrl);
// httpTest.run();