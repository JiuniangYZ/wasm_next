import React, {Component} from 'react';
import Side from './Side'
const Skeleton = (wrappedComponent) =>{
  return class extends Component{
    render(){
      console.log('render!')
      return (
        <div> 
          <Side/>
          <wrappedComponent/>
        </div>
      )
    }
  }
}
export default Skeleton