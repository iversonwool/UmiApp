import React, { Component } from 'react'

export default class RefsForward extends Component {
  render() {
    return (
      <div>
        <div><FancyButton /> FancyButton</div>

        <div><WrappedButton /> WrappedButton</div>

      </div>
    )
  }
}


class FancyButton extends React.Component {
  render() {
    return (
      <button>FancyButton</button>
    )
  }
}

function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }
    
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return LogProps
}

const WrappedButton = logProps(FancyButton)
