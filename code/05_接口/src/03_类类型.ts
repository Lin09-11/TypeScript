//  类类型 :类的类型 ,类的类型可以通过接口来实现

(()=>{
    // 定义有一个接口
    interface IFly{
      // 该方法没有任何的实现（方法中什么都没有）
      fly()
    }

    // 定义一个类，这个类的类型就搜索上面定义的接口（实际上可以理解为LIFly接口约束了当前的这个Person类）
    class Person implements IFly{
      fly() {
        // 实现接口中的方法 
        console.log('我会飞了');
        
      }
    }

    // 实例化对象
    const person=new Person()
    person.fly()


    // 定义一个接口
    interface ISwim{
      swim()
    }

    // 定义一个类,这个类的类型就是IFly和ISwim(当前这个类可以实现多个接口,一个类同时也可以被多个接口进行约束)
    class Person2 implements IFly,ISwim{
      fly() {
        console.log('我飞了2');
        
      }
      swim() {
        console.log('我会游泳2');
      }
    }

    // 实例化
    const person2=new Person2()
    person2.fly()
    person2.swim()

    // 总结:类可以通过接口的方式,来定义当前这个类的类型
    // 类可以实现一个接口,类也可以实现多个接口,要注意,接口中的内容要真正的实现


    // 定义一个接口,继承其他的多个接口
    interface IMyFlyAndSwim extends IFly,ISwim{ }

    // 定义一个类,直接实现IMyFlyAndSwim
    // class Person3 implements IMyFlyAndSwim{
    //   fly() {
    //     console.log('我飞了3');
        
    //   }
    //   swim() {
    //     console.log('我会游泳3');
    // }

    // // 实例化
    // const person3=new Person3()
    // person3.fly()
    // person3.swim()


    // 总结:接口和接口之间的叫继承(extends关键字),类和接口之间的实现(implements关键字)

})()