import { h, Component } from 'preact'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello
          <py-script>
            print("Hello world from PyScript 📦 🚀")
          </py-script>
        </h1>
      </div>
    )
  }
}

export default App