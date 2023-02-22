// 泛型接口：在定义接口时, 为接口中的属性或方法定义泛型类型   在使用接口时, 再指定具体的泛型类型
(()=>{

  // 需求：定义一个类，用来存储用户的相关消息（id，姓名，年龄）
  // 通过一个类的实例对象调用add方法可以添加多个用户信息对象，调用getUserId方法可以根据id获取某一个指定的用户信息对象


  // 定义一个泛型接口
  interface IbaseCRUD <T> {
    data: T[]
    add: (t: T) => void
    getById: (id: number) => T
  }
  
  // 定义一个用户信息的类
  class User {
    id?: number; //id主键自增
    name: string; //姓名
    age: number; //年龄
  
    constructor (name, age) {
      this.name = name
      this.age = age
    }
  }

  // 定义一个类，可以针对用户的信息对象进行增加及查询的操作
  class UserCRUD implements IbaseCRUD <User> {
    // 用来保存多个User类型的用户信息对象
    data: User[] = []
    
    // add（）用来存储用户信息对象的
    add(user: User): void {
      // 产生id
      user = {...user, id: Date.now()}
      // 把用户的信息对象添加到data数组中
      this.data.push(user)
      console.log('保存user', user.id)
    }
  
    // getUserId（）根据id查询指定的用户信息对象
    getById(id: number): User {
      return this.data.find(item => item.id===id)
    }
  }
  
  // 实例化添加用户信息对象的类UserCRUD
  const userCRUD = new UserCRUD()
  userCRUD.add(new User('tom', 12))
  userCRUD.add(new User('tom2', 13))
  console.log(userCRUD.data)
})()