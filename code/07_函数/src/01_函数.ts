// 函数：封装了一些重复使用的代码，在需要的时候直接调用就可以
(()=>{

  // js中的写法，ts中也可以这样写
// 命名函数
//     function add(x, y) {
//       return x + y
//     }

// // 匿名函数
//     let myAdd = function(x, y) { 
//       return x + y;
//     }


// ts中的写法
// 函数声明，命名函数
// 函数中的x和y参数的类型都是string类型的，小括号后面的:string，代表的是该函数的返回值也是string类型的
    function add(x: string, y: string): string {//求和的函数
      return x + y
    }

    const result1:string=add('111','2222')
    console.log(result1);
    
    // 函数表达式，匿名函数
    // 函数中的x和y参数的类型都是number类型的，小括号后面的:number，代表的是该函数的返回值也是number类型的
    let myAdd = function(x: number, y: number): number { 
      return x + y
    }


    // 函数的完整写法
    // myAdd2--->变量名--->函数myAdd2
    // (x: number, y: number) => number   当前的这个函数的类型
    // function(x: number, y: number): number { return x + y }  就相当于符合上面的这个函数类型的值
    let myAdd2: (x: number, y: number) => number = 
    function(x: number, y: number): number {
      return x + y
    }

})()