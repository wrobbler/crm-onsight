import React, { Component } from 'react';

class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={event => this.props.handleSubmit(event)}>
        <label>
          Name:
          <input type="text" value={this.props.userName} onChange={event => this.props.handleChange(event, 'userName')} />
        </label>
        <label>
          Password:
          <input type="password" value={this.props.pw} onChange={event => this.props.handleChange(event, 
            'pw')} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }



}

export default LoginForm;