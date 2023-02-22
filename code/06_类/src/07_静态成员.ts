// 静态成员:在类中通过static修饰的属性或者方法,那么就是静态的属性及静态的方法,也称为:静态成员
// 静态成员在使用的时候是通过类名.的这种语法来调用的
// 构造函数是不能通过static来进行修饰的

(()=>{
  // 定义一个类
  class Person {

    name1: string
    constructor(name1:string){
      this.name1=name1
    }
    sayHi1(){
      console.log('萨瓦迪卡');
      
    }

    
    // 类中默认有一个内置的name属性,所以此时会出现错误的提示
    // 静态属性
    static name2:string='小廖'

    // 静态方法
    static sayHi2(){
      console.log('萨瓦迪卡');
      
    }

  }
  
  // 实例化对象
  const person:Person=new Person('小林')
  // 通过实例对象调用的属性(实例属性)
  console.log(person.name1);
  // 通过实例对象调用的方法(实例方法)
  person.sayHi1()
  
  
  // 使用类名调用静态属性
  console.log(Person.name2);
  // 修改静态属性
  Person.name2='佐助'
  console.log(Person.name2);
  
  // 使用类名调用静态方法
  Person.sayHi2()
  
  

})()