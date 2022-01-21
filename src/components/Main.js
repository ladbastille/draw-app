import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../redux/action";
import Countdown from "./Countdown";
import Lists from "./Lists";
import { getRandomInt } from "../utils/getRandomInt";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = fetch(`https://pokeapi.co/api/v2/pokemon?limit=${getRandomInt(151)}`)
      .then((res) => res.json())
      .then(results=>{
      dispatch(getCurrentUser(results))
    }
      );
    return unsub;
  });

  return (
    <div className="main-container">
      <Countdown />
      <Lists />
    </div>
  );
}
