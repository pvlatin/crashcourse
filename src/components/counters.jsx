import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
    state = {
      counter: [
        { id: 0, value: 0, number: 16 },
        { id: 1, value: 1, number: 21 },
        { id: 2, value: 2, number: 17 },
        { id: 3, value: 3, number: 18 },
        { id: 4, value: 4, number: 19 },
      ],
    }
    render() {
      return ( 
        <div>
          {this.state.counter.map((counter => <Counter key={counter.id} number={counter.number} value={counter.value}/>))}
        </div> 
      )
    }
}
 
export default Counters