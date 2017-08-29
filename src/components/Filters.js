import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();

    this.state = {
      type: 'all',
    }
  }

  handleChange = (event) => {
    //this.setState({type: event.target.value})
    this.props.onChangeType(event.target.value)
    //console.log(this.state.type)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
