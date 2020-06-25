import * as React from 'react';
import { Component } from 'react';
import style from './style/test.css'
class Luna extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div className={`${style.module_test}`}>Luna</div>
  }
}

export default Luna