import React, { Component } from 'react';

import './App.css';
import Card from './Card.js'
import Form from './form.js'

class App extends Component {
  constructor(props){
    super(props)
      this.state={
        serial:'************',
        date:'MMYY',
        user:'*******',
        msg:' '
      }
      
    
  }
  handleNom =(e) => { 
    if(e.target.value.length < 17){
      this.setState({user:e.target.value , msg:' '})
    }
    else{this.setState({msg:'Type exact length'})}
  }
  handleSerial=(e) =>{
    if(e.target.value === ''){
      this.setState({serial:'************'})
    }
    else{
    this.setState({serial:e.target.value.substring(0,16)})
    }
  }
  handleDate =(e) =>{
    if (e.target.value === ''){
      this.setState({date:'MMYY'})
    }
    else{
    this.setState({date:e.target.value.substring(0,4)})}
  }
  render() {
    return (
      <div className="app">
        <Card  serial_card={this.state.serial} user_card={this.state.user} date={this.state.date}/>
        <Form nom={this.handleNom} numero={this.handleSerial} card_date={this.handleDate} msg={this.state.msg}/>
      </div>
    );
  }
}

export default App;