import React, {Component} from 'react';
import Greet from './Greet'
import PhotoList from './PhotoList'

class App extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      counter: 0,
      name: "Alex",
      photos: []
    }
    this.fetchPhotos()
  }
  fetchPhotos = () => {

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(photos => {

      this.setState({
        photos: photos
      })
    })
  }
  incrementCounter = () => {

    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
          <button onClick={this.incrementCounter}>Increment Counter</button>
          <h1>{this.state.counter}</h1>
          <h3>{this.state.name}</h3>
          <Greet name = "Mary" catName = "Furry" />
          <PhotoList photos = {this.state.photos} />
          </div>
    )
  }
}





export default App
