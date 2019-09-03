import React, {Component} from 'react'

class Greet extends Component {
    render(){
       return <h1>Hello {this.props.name} and the pet name is {this.props.catName}</h1>
    } 
}


export default Greet