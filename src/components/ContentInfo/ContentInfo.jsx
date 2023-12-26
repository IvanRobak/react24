import { Component } from 'react';
import getNews from '../../services/getNews';
import ErrorCard from '../ErrorCard/ErrorCard';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};
class ContentInfo extends Component {
  state = {
    news: null,
    error: '',
    status: STATUS.IDLE,
  };

  componentDidUpdate(prevProps, prevstate) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ status: STATUS.PENDING });
      getNews(this.props.searchText)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'ok') this.setState({ news: data.articles, status: STATUS.RESOLVED });
          else return Promise.reject(data.message);
        })
        .catch(error => {
          this.setState({ error, status: STATUS.REJECTED });
        });
    }
  }

  render() {
    const { news, error, status } = this.state;

    if (status === STATUS.PENDING)
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    else if (status === STATUS.REJECTED) return <ErrorCard>{error}</ErrorCard>;
    else if (status === STATUS.RESOLVED)
      return (
        <ul>
          {news &&
            news.map(el => {
              return <li key={el.url}>{el.title}</li>;
            })}
        </ul>
      );
  }
}
export default ContentInfo;
