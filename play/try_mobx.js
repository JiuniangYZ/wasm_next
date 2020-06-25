const mobx = require('mobx')

let num1 = mobx.observable.box('jude')//single value
//num1.observe(val => { console.log('changed__', val) })
//因为这个是observable
let comp = mobx.computed((e)=>{
  //console.log(num1.get());
  console.log('change')//第一次观察的时候 也会触发这个
  return num1.get()+'b'}
) 
comp.observe(cal=>{console.log('comp__',cal.newValue)}) //comp __ ab
//num1.set('a')

// const list = observable([1, 2, 4])
// const obj = observable({ a: 1, b: 2 })

class Juicy {
  constructor(num,value){
    this.num = num
    this.value = value
  }
  get total(){
    return this.num*this.value
  }
}

mobx.decorate(Juicy,{
  num:mobx.observable,
  value:mobx.observable,
  total:mobx.computed
})

// let l = new Juicy(10,20)
// console.log(l.total)
// l.num=100
// console.log(l.total)

//Lets use computed




