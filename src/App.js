import './App.css';
import React from 'react';

function Button(props) {
  return (
    <div>
      <button
        id={props.id}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  );
}

class App extends React.Component {

  placeholder = '_______________________________' // TODO: make this a box to put the text in instead

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

  getTrolledText() {
    return (this.state.trolledText !== '') ? this.state.trolledText : this.placeholder;
  }

  render() {
    return (  //TODO modularize the text data away from the JSX im writing
              //TODO make a CSS class for the submit buttons
      <div className="App">
        <header className="App-header">
          <p> Enter text to trollify: </p>
          <div>
            <input
              onChange={(e) => this.setState({text: e.target.value})}
            />
          </div>

          <Button
            text = "Submit"
            onClick = {() => this.setState({
              trolledText: this.trollify(this.state.text)
            })}
          />
            
          <div>
            {this.getTrolledText()}
          </div>

          <Button
            text = "Copy This Text"
            onClick = {() => navigator.clipboard.writeText(this.getTrolledText())}
          />

          <div>
            {'Click "Submit" as much as you want for different versions'}
          </div>

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
