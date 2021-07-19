
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
