import React, { Component } from 'react'


class valueer extends Component {
  // constructor() {
  //   super()
  //   this.handleIncrementOld = this.handleIncrementOld.bind(this)
  // }

  handleIncrement() {
    console.log('Increment clicked', this)
  }

  state = { 
    value: this.props.value,
    number: this.props.number,
    tags: ['tag1', 'tag2', 'tag3', 'tag4'],
    imageUrl: 'https:/picsum.photos/200',
    address: {
      street: ''
    }
  }

  imgStyle = {
    background: '#333',
    boxShadow: '0 0 10px 30px rgba(0,0,0,.3)'
  };

  renderTags() {
    if(!this.state.tags) return null
    else if (this.state.tags.length === 0) return <p>'There are no tags!</p>
    return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>
  }
  
  render() {
    return (
      <React.Fragment>
        <h2>your number is {this.state.number}</h2>
        {/* <img style={this.imgStyle} src={this.state.imageUrl} alt=""/> */}
        <div className={this.getBadgeClasses()}>{this.formatValue()}</div>
        <h1>Count: {this.state.value}</h1> <button onClick={this.handleIncrement}>Increment</button> 
        <button onClick={this.handleDecrement}>Decrement</button>
        { this.state.tags.length === 0 && 'You got no tags'}
        {this.renderTags()}
      </React.Fragment>
    ) 
  } 

  getBadgeClasses() {
    let classes = 'badge default-'
    classes += this.state.value === 0 ? 'zero' : 'number'
    return classes
  }
  
  formatValue() {
    const { value } = this.state
    const totalItems = <h1>{value}</h1>
    const zeroItems = <h1>Zero</h1>
    return value === 0 ? zeroItems : totalItems 
  } 
  handleIncrement = () => {
    const { value } = this.state
    this.setState({
      value: value+1
    })
  } 
  handleDecrement = () => {
    const { value } = this.state
    if(value <= 0) return
    this.setState({
      value: value-1
    })
  } 
}
                  
export default valueer

 