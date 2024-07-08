import Star from './Star.jsx'
import './App.css';

interface StarsProp {
  count: number;
}

function Stars(props: StarsProp): JSX.Element | null {
  const { count } = props;

  if (
    typeof count === 'number'
    && count >= 1
    && count <= 5
  ) {
    return (
      <div className="post">
        <div className>Рейтинг фильма { count } звезд</div>
        <ul className="card-body-stars u-clearfix">
          { [...Array(count).keys()].map((key) => <Star key={key} />) }
        </ul>
      </div>
    )
  }

  return null;
}

export default Stars;