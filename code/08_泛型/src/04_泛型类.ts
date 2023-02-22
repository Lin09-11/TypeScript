(()=>{
  // 定义一个泛型类
  class GenericNumber<T> {
    // 默认的属性的值的类型是泛型类
    zeroValue: T
    add: (x: T, y: T) => T
  }
  
  // 在实例化类的对象的时候,在确定泛型的类型
  let myGenericNumber = new GenericNumber<number>()
  // 设置属性值
  myGenericNumber.zeroValue = 0
  // 相加的方法
  myGenericNumber.add = function(x, y) {
    return x + y 
  }
  
  let myGenericString = new GenericNumber<string>()
  myGenericString.zeroValue = 'abc'
  myGenericString.add = function(x, y) { 
    return x + y
  }
  
  console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
  console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12))
})()