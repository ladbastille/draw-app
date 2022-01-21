import { useSelector } from "react-redux";
import { imgUrlEndpoint } from "../utils/imgUrlEndpoint";

export default function Lists() {
  const listsData = useSelector((state) => state.currentUser);
  const pokemons = listsData.results;

  return (
    <div className="lists-container">
      <h2>參與抽獎名單 ({pokemons?.length}個)</h2>
      <div className="cards-wrap">
      {pokemons?.map((data) => {
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
      })}</div>
    </div>
  );
}
