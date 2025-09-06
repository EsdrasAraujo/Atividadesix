import "./Card.css";
import heartIcon from "../../public/icons/heart.svg";
import heartTwoIcon from "../../public/icons/heartTwo.svg";
import informationIcon from "../../public/icons/information.svg";
import { use, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ filme }) => {
  const [favorited, setFavorited] = useState(false);

  const handleFavorite = () => {
    setFavorited(!favorited);
    if (favorited) {
      localStorage.removeItem(filme.id);
      return;
    }
    const actualFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    actualFavorites.push(filme);
    localStorage.setItem("favorites", JSON.stringify(actualFavorites));
  };

  return (
    <div className="card">
      <img
        className="card-img"
        src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path}
      />
      <p>{filme.title}</p>
      <p>{filme.release_date}</p>
      <div>
        <span>⭐ {filme.vote_average}</span>
      </div>
      <div className="options_container">
        <div onClick={handleFavorite}>
          <img className="heart" src={favorited ? heartTwoIcon : heartIcon} />
        </div>
        <Link to={`/${filme.id}`}>
          <img className="details_img" src={informationIcon} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
