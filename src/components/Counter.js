import  React from 'react'

class Counter extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      count: 0
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  increment(){
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement(){
    this.setState({
      count: this.state.count - 1
    })
  }
  render(){
    return(
      <>
      <h4>Count:{this.state.count}</h4>
      <button
      onClick={this.increment}
       className="btn btn-success">
        INCR
      </button>
      <button 
      onClick={this.decrement}
      className="btn btn-danger">
        DECR
      </button>
      </>
    )
  }
}
export default Counter



// import React, {useState} from 'react'

// export default function Counter() {
//   const [count, setCount] = useState(0); // boshlangich qiymat

//     function inc() {
//         setCount((prev) => prev + 1);
//       }
    
//       function dec() {
//         setCount((prev) => prev - 1);
//       }
//     return (
//         <>
//           <h3>Count :{count}</h3>
//         <button onClick={inc} className="btn btn-success mx-1">
//           INCR
//         </button>
//         <button onClick={dec} className="btn btn-danger mx-1">
//           DECR
//         </button>
//         </>
//     )
// }
