import { Component } from 'react';
import getNews from '../../services/getNews';
import ErrorCard from '../ErrorCard/ErrorCard';

class ContentInfo extends Component {
  state = {
    news: null,
    isLoading: true,
    error: '',
  };

  componentDidUpdate(prevProps, prevstate) {
    console.log(this.props);
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ isLoading: true });
      getNews(this.props.searchText)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'ok') this.setState({ news: data.articles });
          else return Promise.reject(data.message);
        })
        .catch(error => {
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    const { news, isLoading, error } = this.state;

    return (
      <>
        {error && <ErrorCard>{this.state.error}</ErrorCard>}
        {isLoading && (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
        <ul>
          {news &&
            news.map(el => {
              return <li key={el.url}>{el.title}</li>;
            })}
        </ul>
      </>
    );
  }
}
export default ContentInfo;
