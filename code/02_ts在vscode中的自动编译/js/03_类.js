// ts中书写js中的类,演示效果
(() => {
    class User {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + ' ' + lastName;
        }
    }
    function greeter(person) {
        return 'Hello, ' + person.firstName + ' ' + person.lastName;
    }
    let user = new User('Yee', 'Huang');
    console.log(greeter(user));
})();
