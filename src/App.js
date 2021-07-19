import './App.css';
import React from 'react';

function Button(props) {
  return (
    <button
      id={props.id}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

class App extends React.Component {

  placeholder = '...';

  constructor(props) {
    super(props);
    this.state = {
      'text': '',
      'trolledText': this.placeholder
    };
    this.prompt = `enter text to ${this.trollify("trollify")}:`;
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
    return (this.state.trolledText !== '')
      ? this.state.trolledText
      : this.placeholder;
  }

  copyToClipboard = () => {
    navigator.clipboard.writeText(
      this.getTrolledText()
    );
  }

  submitText = () => {
    this.setState({
      trolledText: this.trollify(
        this.state.text
      )
    });
  }

  handleTextboxTyping = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (      
      <div className="App">
        <div className="App-header">
          <header>
            troll text generator
          </header>
        </div>
        
        <div className="App-body">
          <div className="input-section">
            <p>{this.prompt}</p>
            <textarea onChange={this.handleTextboxTyping} />
            <Button
              text = "submit"
              onClick = {this.submitText}
            />
          </div>

          <div className="output-section">
            <div>
              <Button
                text = "copy this Text"
                onClick = {this.copyToClipboard}
              />
              <div>
                {this.getTrolledText()}
              </div>
            </div>
          </div>
        </div>
        <footer className="App-footer"/> 
      </div>
    );
  }
}

export default App;
