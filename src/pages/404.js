import React, { Component } from 'react';

function requestData() {
  const now = Date.now();

  while(Date.now() - now <= 3 * 1000) {};

  return 'after componentDidMount data';
}

class NotFound extends Component {
  state = {
    data: 'init data'
  }

  componentDidMount() {
    this.setState({
      data: requestData()
    })
  }

  render() {
    const {data} = this.state
    return (
      <div>
        404, Not Found.
        <div>{data}</div>
      </div>
    );
  }
}

export default NotFound;