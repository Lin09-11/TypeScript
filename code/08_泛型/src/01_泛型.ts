// 泛型：在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。
(()=>{
  // 需求：定义应该函数u，传入两个参数，第一个参数是数据，第二个参数是数量，函数的作用：根据数量产生对应个数的数据，存放在应该数组中
  // 定义应该函数
  function getArr1 (value:number,count:number):number[]{
    // 根据数据和数量产生应该数组
    const arr:number[]=[]
    for(let i=0;i<count;i++){
      arr.push(value)
    }
    return arr
  }

  const arr1=getArr1(100.123,3)
  console.log(arr1);//100.123 , 100.123 , 100.123
  

  // 定义一个函数，同上，只不过传入的是字符串类型
  function getArr2 (value:string,count:number):string[]{
    // 根据数据和数量产生应该数组
    const arr:string[]=[]
    for(let i=0;i<count;i++){
      arr.push(value)
    }
    return arr
  }

  const arr2=getArr2('abc',3)
  console.log(arr1);//abc  abc  abc

  // 需求：可以传入任意类型的数据，返回的是存储这个任意类型数据的数组
  function createArray(value: any, count: number): any[] {
    const arr: any[] = []
    for (let index = 0; index < count; index++) {
      arr.push(value)
    }
    return arr
  }
  
  const arr3 = createArray(11, 3)
  const arr4 = createArray('aa', 3)
  console.log(arr1[0].toFixed(), arr2[0].split(''))



  // 使用泛型
  function createArray2 <T> (value: T, count: number) {
    const arr: Array<T> = []//等价于  const arr:T[]=[]
    for (let index = 0; index < count; index++) {
      arr.push(value)
    }
    return arr
  }
  const arr5 = createArray2<number>(11, 3)
  console.log(arr3[0].toFixed())
  // console.log(arr3[0].split('')) // error
  const arr6 = createArray2<string>('aa', 3)
  console.log(arr4[0].split(''))
  // console.log(arr4[0].toFixed()) // error
})()