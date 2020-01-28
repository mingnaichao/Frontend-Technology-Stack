// 任意类型（any）
/*
    var num:any=123;
    num='str';
    num=true;
    console.log(num)
*/


// null 和 undefined  其他（never类型）数据类型的子类型
/*
    var num:number;
    console.log(num)  //输出：undefined   报错

    var num:undefined;
    console.log(num)  //输出：undefined  //正确

    var num:number | undefined; // 定义没有赋值就是undefined
    num=123;
    console.log(num);
*/
/*
    var num:null;
    num=null;
*/

//一个元素可能是 number类型 可能是null 可能是undefined
/*
    var num: number | null | undefined;
    num = 1234;
    console.log(num)
*/


// void类型 :typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
/*
    //es5的定义方法
    function run() {
        console.log('run')
    }
    run();
*/


//表示方法没有返回任何类型
/* 
    //正确写法
    function run(): void {
        console.log('run')
    }
    run();


    //错误写法
    function run():undefined{
        console.log('run')
    }
    run();

    //正确写法
    function run():number{
        return 123;
    }
    run();
*/


// never类型:是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。
// 这意味着声明never的变量只能被never类型所赋值。


/*
 
 var a:undefined;
 a=undefined;

 var b:null;
 b=null;

*/

var a: never;

//    a=123; //错误的写法
a = (() => {
    throw new Error('错误');
})()








