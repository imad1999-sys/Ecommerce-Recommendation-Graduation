import React from 'react';


class Drop extends React.Component {
  constructor() {
    super();

    this.state = {
      dropDownValue: "Select an item"
    }
  }

  changeValue(text) {
    this.setState({dropDownValue: text})
  }

  render() {
    return (
      <div>
        <div>
        </div>
      </div>
    );
  }
}

export default Drop;