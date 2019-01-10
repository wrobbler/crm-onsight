import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/loginForm.component';
import ProposalForm from './components/proposalFrom.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pw: '',
      userName: '',
      authenticated: false
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  render() {
    let login;
    if (this.state.authenticated) {
      login = <p>logged in</p>;
    } else {
      login = <LoginForm userName={this.state.userName} pw={this.state.pw} handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}></LoginForm>
    }

    return (
      <div className="App">
        {login}
        <ProposalForm></ProposalForm>
      </div>
    );
  }

  handleChange(event, type) {
    this.setState({[type]: event.target.value});
  }
  
  handleSubmit(event) {
    try {
      this.loginUser(event);
    } catch (e) {
      alert(e.message);
    }
  }

  loginUser(event) {
    const {pw, userName} = this.state;
    fetch('http://localhost:4000/login/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({pw, userName})
    }).then(res => {
      console.log(res);
      if (res.status === 200) {
        this.setState({authenticated: true});
      }
    });
    event.preventDefault();
  }
 
}

export default App;
