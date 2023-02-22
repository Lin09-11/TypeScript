// 存储器：TypeScript 支持通过 getters/setters 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
(()=>{
  // 外部可以传入姓氏和名字数据，同时使用set和get控制姓名的数据，外部也可以进行修改操作
  class Person {
    firstName: string = 'A'
    lastName: string = 'B'
    // 姓名的成员属性（外部可以访问，也可以修改）

    // 读取器：负责读取数据的
    get fullName () {
      // 姓名====>姓氏和名字的拼接
      return this.firstName + '-' + this.lastName
    }
    // 设置器：负责设置数据的（修改）
    set fullName (value) {
      const names = value.split('-')
      this.firstName = names[0]
      this.lastName = names[1]
    }
  }
  
  // 实例化对象
  const p = new Person()
  // 获取该属性成员属性
  console.log(p.fullName)
  
  p.firstName = 'C'
  p.lastName =  'D'
  // 设置该属性的数据
  console.log(p.fullName)
  
  p.fullName = 'E-F'
  console.log(p.firstName, p.lastName)
})()