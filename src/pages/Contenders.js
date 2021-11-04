import React, { useState } from "react";
import ContendersFinal from "./ContendersFinal";

const Contenders = () => {
  const [conts, setConts] = useState("");
  const [contsList, setContsList] = useState([]);

  const Passer = (e) => {
    e.preventDefault();
    setContsList([...contsList, { contenders: conts }]);
    setConts("");
  };

  return (
    <div className="contenders">
      <input type="text" onChange={(e) => setConts(e.target.value)}></input>
      <button onClick={Passer}>انتقال</button>
      {contsList.map((list) => {
        return <ContendersFinal conts={list.contenders} />;
      })}
    </div>
  );
};

export default Contenders;
