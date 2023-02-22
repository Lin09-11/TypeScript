// 如果我们直接对一个泛型参数取 length 属性, 会报错, 因为这个泛型根本就不知道它有这个属性
(()=>{
  // 定义一个接口,用来约束将来的某一个类型中必须要有的length这个属性
  interface ILength{
    // 接口中有一个属性length
    length:  number
  }
  // 让T这个泛型继承ILength这个接口
  function fn <T extends ILength>(x: T): number {
    // console.log(x.length)  // error
    return x.length
  }
  console.log(fn<string>('wav'));
  
})()