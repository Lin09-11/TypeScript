// 基础类型

(()=>{
  // 布尔类型--->boolean
  // 基础语法
  // let 变量名：数据类型=值
  let flag:boolean =true
  flag=false
  console.log(flag);

  // 数字类型---->number
  let a1: number = 10 // 十进制
  let a2: number = 0b1010  // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  console.log(a1);
  console.log(a2);
  console.log(a3);
  console.log(a4);
  
  
  // 字符串类型---->string
  let str1='床前明月光'
  let str2='疑是地上霜'
  console.log(`${str1},${str2}`);
  
  // 字符串和数字之间能够一起拼接
  let str3:string='我有'
  let str4:number=4000
  console.log(str3+str4);
  
  // 总结:ts中变量一开始是什么类型,那么后期赋值的时候,只能用这个类型的数据,是不允许用其他类型的数据赋值给当前这个变量中

  console.log('===========');

  let und:undefined=undefined
  let nll:null=null
  console.log(und);
  console.log(nll);
  // 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
  // let num2:number=undefined
  // let num3:number=null
  // console.log(num2);
  // console.log(num3);
  
  console.log('===========');

  // 数组类型
  // 数组定义方式1：let 变量名：数据类型[]=[值1，值2，值3]
  let arr1:number[]=[1,2,3,4]
  console.log(arr1);
  
  // 数组定义方式2：let 变量名 ：Array<数据类型>=[值1，值2，值3]
  let arr2:Array<number>=[1,2,3,4]
  console.log(arr2);
  
  // 注意问题：
  // 数组定义后，里面的数据的类型必须和定义数组的时候类型是一致的，否则有错误提示信息，也不会编译通过的

  // 元组类型:在定义数组的时候,类型和数据的个数一开始就已经限定了
  let arr3:[string,number,boolean]=['小林',100,true]
  console.log(arr3);
  // 注意问题:元组类型在使用的时候,数据的类型的位置和数据的个数 应该和在定义元组的时候的数据类型及位置应该是一致的
  console.log(arr3[0].split(''));
  console.log(arr3[1].toFixed(2))
  
  console.log('===========');
  // 枚举类型:枚举里面的某一个数据值都可以叫元素,每一个元素都有自己的编号,编号是从0开始的,依次增加1
  enum Color{
    Red,
    Green,
    Blue
  }
  let myColor: Color = Color.Green //1
  console.log(myColor, Color.Red, Color.Blue)//0   2

  // 枚举中的元素可以是中文的数据值,但是不推荐
  enum Gender{
    女,
    男
  }
  console.log(Gender.男);
  

  console.log('===========');


  // any类型
  let str:any=100
  str='小林'
  console.log(str);  
  // 当一个数组中要存储多个数据，个数不确定，类型不确定，此时也可以使用any类型来定义数组
  let arr:any[]=[100,'少年',true]
  console.log(arr);
  // 这种情况下也没有错误的提示信息，any类型有优点，也有缺点
  // console.log(arr[0].split(''));


  
  console.log('===========');
  // void类型，在函数声明的时候，小括号后面使用：void，表示该函数没有任何返回值
  function showMsg():void{
    console.log('小林');
    
  }
  console.log(showMsg());
  
  
  console.log('===========');
  // object类型
  // 定义一个函数,参数是object类型,返回值是object类型
  function getObj(obj:object):object{
    console.log(obj);
    return {
      name:'aabb',
      age:23
    }
  }

  console.log(getObj({name:'佐助',age:13}));
  // 也可以
  console.log(getObj(String));


console.log('====================');


// 联合类型（Union Types）表示取值可以为多种类型中的一种


// 需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
// function getString(str:number|string):string{
//   return str.toString()
// }
// console.log(getString('123'));

// function getLength(x: number | string) {

//   // return x.length // error

//   if (x.length) { // error
//     return x.length
//   } else {
//     return x.toString().length
//   }
// }


  
})()