import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

export const Match = () => {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);
  console.log(sign);

  return (
    <div>
      <button onClick={() => setMatch(!match)}>Match</button>
      <p></p>
      {match && <div>{sign.match}</div>}
    </div>
  );
};
