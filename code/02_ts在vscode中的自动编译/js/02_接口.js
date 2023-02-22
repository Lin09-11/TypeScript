// 接口:是一种能力,一种约束
(() => {
    // 输出名字
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 定义一个对象
    const person = {
        firstName: '东方',
        lastName: '拜拜'
    };
    console.log(showFullName(person));
})();
