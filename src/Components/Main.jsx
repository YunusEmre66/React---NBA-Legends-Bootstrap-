import { useState } from "react";
import Card from "./Card";
import data from "../Helpers/Data";
import "../Components/Main.css"

const Main = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>

      <div className="container">
        <input
          className="form-control"
          placeholder="Search Player"
          type="search"
          onChange={handleChange}
          value={value.toUpperCase()}
        />
        <hr />
        <div className="row container fluid background">
          {data
            .filter((item) => item.name.includes(value))
            .map((item, i) => (
              <Card data={item} datakey={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
