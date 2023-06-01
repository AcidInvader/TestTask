import React from 'react';
import logo from './logo.svg';
import './App.css';
import CargoList from './components/Cargo.js';
import axios from 'axios'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      'cargos': []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8888/api/cargo')
      .then(response => {
        const cargos = response.data
          this.setState(
            {
              'cargos': cargos
            }
          )
      }).catch(error => console.log(error))
  }

  render () {
    return (
      <div>
        <CargoList cargos={this.state.cargos} />
      </div>
    )
  }
}

export default App;
