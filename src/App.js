import './App.css';
import React from 'react';

class App extends React.Component {

  placeholder = '______________' // TODO: make this a box to put the text in instead

  constructor(props) {
    super(props)
    this.state = {
      'text': '',
      'trolledText': this.placeholder
    }
  }

  trollify = (txt) => {
    return (
      txt
        .trim()
          .toLowerCase()
            .split('')
              .map (
                (c) =>
                  (Math.random() < .5)
                  ? c.toUpperCase()
                  : c
              )
            .join('')
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> Enter text to trollify below: </p>
          <div><input onChange={(event) => this.setState({text: event.target.value})}/></div>

          <div><button onClick={ () => this.setState({ trolledText: this.trollify(this.state.text) }) } >
				{"Submit (click again for new version)"}
		  </button></div>
          
          <div> {(this.state.trolledText !== '') ? this.state.trolledText : this.placeholder} </div>

		  <div><button onClick={ () => navigator.clipboard.writeText(this.state.trolledText) } >
            	{"Clipboard Copy"}
          </button></div>

          {/*<a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>*/}
        </header>
      </div>
    );
  }
}

export default App;
