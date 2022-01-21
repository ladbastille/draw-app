import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRandomInt } from "../utils/getRandomInt";
import { imgUrlEndpoint } from "../utils/imgUrlEndpoint";

export default function Result(card) {
  const cards = useSelector((state) => state.currentUser);
  const drawFromData = cards.results[getRandomInt(cards.results.length)];
  
  return (
    <div className="result-container">
      <h1>Your Pokemon is:</h1>
      {drawFromData && (
        <div className="result-card">
          <img
            className="card-img"
            alt={drawFromData.name}
            src={imgUrlEndpoint + (cards.results.indexOf(drawFromData) + 1) + ".png"}
          ></img>
          <div className="card-name">
            <p>{drawFromData.name}</p>
          </div>
        </div>
      )}
      <Link to="/">Back</Link>
    </div>
  );
}
