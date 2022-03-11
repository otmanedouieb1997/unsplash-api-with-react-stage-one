import React from 'react';
import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar';
import ImagesList from './components/imagesList';
import './style.css';

class App extends React.Component {
  state = {
    images: [],
  };

  onFormSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({
      images: response.data.results,
    });
  };
  /* v1
  onFormSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID wQRr---1jfLIDCHrBq1iBG0PJ11fAeESZ9nt4XFln-E',
      },
    });
    console.log(response);
  };*/
  render() {
    return (
      <div className="container">
        <header className="search-bar">
          <SearchBar onSubmitSearchBar={this.onFormSubmit} />
        </header>
        <section className="body">
          <ImagesList images={this.state.images} />
        </section>
      </div>
    );
  }
}

export default App;
