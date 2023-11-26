import { Component } from 'react';
import { getImages } from '../api/images';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Notiflix from 'notiflix';

class App extends Component {
  state = {
    query: '',
    page: 1,
    isLoading: false,
    error: '',
    images: null,
    loadMore: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (
      this.state.page !== prevState.page ||
      prevState.query !== this.state.query
    ) {
      this.handleImages(query, page);
    }
  }

  handleImages = async (query, page) => {
    if (query === '') {
      Notiflix.Notify.info('Please enter a search query');
      this.setState({ loadMore: false });
      return;
    }
    this.setState({ isLoading: true });
    try {
      const data = await getImages(query, page);
      if (data.hits.length) {
        this.setState(prev => ({
          images: [...prev.images, ...data.hits],
          loadMore: this.state.page < Math.ceil(data.totalHits / 12),
          error: '',
        }));
      } else {
        Notiflix.Notify.info(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        this.setState({ loadMore: false });
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = query => {
    this.setState({ query: query, page: 1, images: [] });
  };
  handleLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };
  render() {
    const { isLoading, images, error, loadMore } = this.state;
    return (
      <>
        {isLoading && <Loader />}
        {error && Notiflix.Notify.failure(error)}
        <Searchbar submit={this.handleSubmit} />
        {images && <ImageGallery images={images} />}
        {loadMore && <Button onClick={this.handleLoadMore} />}
      </>
    );
  }
}
export default App;
