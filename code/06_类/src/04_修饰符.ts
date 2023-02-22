// 修饰符（类中的成员的修饰符）：注意是描述类中的成员（属性，构造函数）的可以访问性
// 类中的成员都有自己的默认的访问修饰符---->public
// public修饰符，类中成员默认的修饰符，代表的是公共的，任何位置都是可以访问类中的成员
// private 修饰符，类中的成员如果要使用private来修饰，那么外部是无法访问这个成员数据的，当然子类也是无法访问该成员数据的
// protected修饰符，类中的成员如果protected来修饰，那么外部是无法访问这个成员数据的，当然，子类中是可以访问该成员数据的
(()=>{
    // 定义一个父类
    class Person{
      // 定义一个属性
      // 属性public修饰了属性成员
      public name:string
      // 属性private 修饰了属性成员
      // private name:string
      // protected name:string
      // 定义一个构造函数
      constructor(name:string){
        // 更新属性值
        this.name=name
      }
  
      // 实例方法
      eat(){
        console.log('好吃',this.name);
      }
    }

    // 定义一个子类
    class Student extends Person{
      constructor(name:string){
        // 调用的是父类中的构造函数,使用的是super
        super(name)
      }

      play(){
        console.log('我就喜欢',this.name);
        
      }
    }

        // 实例化子类对象
        const per =new Person('八戒')
        // 类的外部可以访问类中的属性成员
        console.log(per.name);
        
        per.eat()
        const stu=new Student('红豆')
        stu.play()
        console.log(stu.name);
        

})()