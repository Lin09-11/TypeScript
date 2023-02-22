// 剩余参数（rest参数）
// 剩余参数是放在函数声明的时候所有的参数的最后
(()=>{
  // ...args:string[]---->剩余的参数，放在一个字符串的数组中，args里面
  function info(x: string, ...args: string[]) {
    console.log(x)//abc
    console.log(args);//cba
    
  }
  info('abc', 'c', 'b', 'a')
})()