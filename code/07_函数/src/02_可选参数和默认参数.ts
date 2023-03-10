// 可选参数：函数在声明的时候，内部的参数使用了?进行修饰，那么就表示该参数可以传入也可以不用传入
// 默认参数：函数在声明的时候，内部的参数有自己的默认值，此时这个参数叫默认参数
(()=>{
  // 定义一个函数：传入姓氏和姓名，可以得到姓名（姓氏+名字=姓名）
  // 需求：如果传入任何内容，那么就返回默认的姓氏，如果只传入姓氏，那么就返回姓氏，如果传入姓氏和名字，那么返回的就是姓名·
  const getFullName=function (firstName:string='但凡',lastName?:string):string {
    // 判断名字是否传入
    if(lastName){
      return firstName+'_'+lastName
    }else{
      return firstName
    }
  }

  // 函数调用
  // 什么也不传入
  console.log(getFullName());
  // 只传入姓氏
  console.log(getFullName('诸葛'));
  // 传入姓氏和名字
  console.log('诸葛','孔明');
  
  
  
})()