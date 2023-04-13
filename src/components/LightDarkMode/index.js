// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {className: 'dark-container', buttonText: 'Light Mode'}

  changeMode = () => {
    const {buttonText} = this.state

    if (buttonText === 'Light Mode') {
      this.setState({className: 'light-container', buttonText: 'Dark Mode'})
    } else {
      this.setState({className: 'dark-container', buttonText: 'Light Mode'})
    }
  }

  render() {
    const {className, buttonText} = this.state
    return (
      <div className="container">
        <div className={className}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.changeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
