import React, { Component } from 'react';

class ProposalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creating: false,
      title: '',
      description: '',
      email: '',
      posted: false
    };
  }

  render() {  
    return (
      <React.Fragment>
        {this.state.creating ? this.proposalForm() : this.proposalButton()}
      </React.Fragment>
    );
  }

  proposalForm() {
    return(
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>
          title:
          <input type="text" value={this.state.title} onChange={event => this.handleChange(event, 'title')} />
        </label>
        <label>
          description:
          <input type="text" value={this.state.description} onChange={event => this.handleChange(event, 'description')} />
        </label>
        <label>
          email:
          <input type="text" value={this.state.email} onChange={event => this.handleChange(event, 'email')} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  handleChange(event, type) {
    this.setState({[type]: event.target.value});
  }
  
  handleSubmit(event) {
    try {
      this.postProposal(event);
    } catch (e) {
      alert(e.message);
    }
  }

  postProposal(event) {
    const {title, description, email} = this.state;
    fetch('http://localhost:4000/login/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, description, email})
    }).then(res => {
      console.log(res);
      if (res.status === 200) {
        this.setState({posted: true});
      }
    });
    event.preventDefault();
  }

  proposalButton() {
    return (<button onClick={() => this.setState({...this.state, creating: true})}>Create new proposal</button>);
  }
}

export default ProposalForm;