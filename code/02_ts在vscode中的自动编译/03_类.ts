// ts中书写js中的类,演示效果

(()=>{
  class User {
    fullName: string
    firstName: string
    lastName: string
  
    constructor (firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = firstName + ' ' + lastName
    }
  }
  
  interface Person {
    firstName: string
    lastName: string
  }
  
  function greeter (person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
  }
  
  let user = new User('Yee', 'Huang')
  
  console.log(greeter(user))
  

})()