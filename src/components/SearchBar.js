import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitSearchBar(this.state.term);
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <input
            type="text"
            className="search-input"
            placeholder="search"
            onChange={(e) => this.setState({ term: e.target.value })}
            value={this.state.term}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
