// 多个泛型参数的函数：函数中有多个泛型的参数
(()=>{
  function swap <K, V> (a: K, b: V): [K, V] {
    return [a, b]
  }
  const result = swap<string, number>('abc', 123)
  console.log(result[0].length, result[1].toFixed())
})()