import React, { Component } from 'react'

export default class RefsForward extends Component {
  state ={
    idx: 0
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ idx: this.state.idx + 1 })
    }, 2000)
  }
  render() {
    const {idx} = this.state
    return (
      <div>
        <div><FancyButton name={`hello ${idx}`} /> FancyButton</div>

        {/* <div><WrappedButton /> WrappedButton</div> */}

      </div>
    )
  }
}


const FancyButton = (props) => {
  const {name} = props
  React.useEffect(() => {
    let a = false
    console.log('a', a)

    return () => {
      a = true
      console.log('a', a)

    }
  }, [name])

  return (
    <button>FancyButton{name}</button>
  )
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
