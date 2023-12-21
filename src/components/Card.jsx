import data from '../data.json';
import { Head } from './Head';

export const Card = () => {
  return data.map(photo => (
    <div className="card" style={{ width: '18rem' }} key={photo.id}>
      <Head size="l" num="8" />
      <img src={photo.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title{photo.id}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <a href="http" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  ));
};
