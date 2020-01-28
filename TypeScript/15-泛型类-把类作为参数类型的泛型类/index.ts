/*
    泛类：泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持(类型校验)，下面我们看看把类当做参数的泛型类
    1、定义个类
    2、把类作为参数来约束数据传入的类型 
*/

//比如有个最小堆算法 普通类型
/*
    class MinClass {
        public list: number[] = [];
        add(num: number) {
            this.list.push(num)
        }
        min(): number {
            var minNum = this.list[0];
            for (var i = 0; i < this.list.length; i++) {
                if (minNum > this.list[i]) {
                    minNum = this.list[i];
                }
            }
            return minNum;
        }

    }
    var m1 = new MinClass();
    m1.add(11);
    m1.add(3);
    m1.add(2);
    alert(m1.min())
*/

//类的泛型
class MinClas<T>{
    public list: T[] = [];
    add(value: T): void {
        this.list.push(value);
    }
    min(): T {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}

var m1 = new MinClas<number>();   //实例化类 并且指定了类的T代表的类型是number
m1.add(11);
m1.add(3);
m1.add(2);
alert(m1.min())



var m2 = new MinClas<string>();  //实例化类 并指定定了类的T代表的类型是string
m2.add('c');
m2.add('a');
m2.add('v');
alert(m2.min())













/*
定义一个User的类这个类的作用就是映射数据库字段  
然后定义一个 MysqlDb的类这个类用于操作数据库   
然后把User类作为参数传入到MysqlDb中

var user=new User({
    username:'张三',
    password:'123456'
})

var Db=new MysqlDb();
Db.add(user);

*/



//把类作为参数来约束数据传入的类型 

// class User{
//     username:string | undefined;
//     pasword:string | undefined;
// }


// class MysqlDb{
//     add(user:User):boolean{

//         console.log(user);
//         return true;
//     }

// }
// var u=new User();
// u.username='张三';
// u.pasword='123456';
// var Db=new MysqlDb();
// Db.add(u);









// class ArticleCate{
//     title:string | undefined;
//     desc:string | undefined;
//     status:number | undefined
// }


// class MysqlDb{
//     add(info:ArticleCate):boolean{
//         console.log(info);
//         console.log(info.title);
//         return true;
//     }

// }
// var a=new ArticleCate();
// a.title="国内";
// a.desc="国内新闻";
// a.status=1;

// var Db=new MysqlDb();
// Db.add(a);

// 问题：代码重复










//定义操作数据库的泛型类
class MysqlDb<T>{
    add(info: T): boolean {
        console.log(info);
        return true;
    }
    updated(info: T, id: number): boolean {
        console.log(info);

        console.log(id);

        return true;
    }
}


//想给User表增加数据

// 1、定义一个User类 和数据库进行映射

// class User{
//     username:string | undefined;
//     pasword:string | undefined;
// }
// var u=new User();
// u.username='张三';
// u.pasword='123456';
// var Db=new MysqlDb<User>();
// Db.add(u);



//2、相关ArticleCate增加数据  定义一个ArticleCate类 和数据库进行映射


class ArticleCate {
    title: string | undefined;
    desc: string | undefined;
    status: number | undefined;
    constructor(params: {
        title: string | undefined,
        desc: string | undefined,
        status?: number | undefined
    }) {

        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;


    }
}
//增加操作
// var a=new ArticleCate({
//     title:'分类',
//     desc:'1111',
//     status:1
// });

// //类当做参数的泛型类
// var Db=new MysqlDb<ArticleCate>();
// Db.add(a);

//修改数据
var a = new ArticleCate({
    title: '分类111',
    desc: '2222'
});

a.status = 0;
var Db = new MysqlDb<ArticleCate>();
Db.updated(a, 12);
