import { action, observable, computed } from 'mobx'
import { useStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer)


export class Nexus {
  @observable val1 = 1
  @observable list = [1,2,3]
  @computed get getDouble(){
    return this.val1*2
  }
  @action add = ()=>{
    this.val1 +=1
  }
} 