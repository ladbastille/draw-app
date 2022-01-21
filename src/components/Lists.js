import { useSelector } from "react-redux";
import { imgUrlEndpoint } from "../utils/imgUrlEndpoint";

export default function Lists() {
  const listsData = useSelector((state) => state.currentUser);
  const pokemons = listsData.results;

  return (
    <div className="lists-container">
      <h2>Pokemon List ({pokemons?.length})</h2>
      <div className="cards-wrap">
      {pokemons ? pokemons?.map((data) => {
        return (
          <div className="card" key={data.name}>
            <img
              className="card-img"
              alt={data.name}
              src={imgUrlEndpoint + (pokemons.indexOf(data) + 1) + ".png"}
            ></img>
            <div className="card-name"><p>{data.name}</p></div>
          </div>
        );
      }) : <h4>Loading...</h4>}
      </div>
    </div>
  );
}
