import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStateContext } from "../contexts/ContextProvider";
const PieChart = () => {
  const { token, setToken, topArtists, setTopArtists } = useStateContext();
  async function handleToplist() {
    console.log(token);
    const headers = {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    };
    await axios
      .get("https://api.spotify.com/v1/me/top/artists", { headers })
      .then((response) => {
        setTopArtists(response.data.items);
        console.log(topArtists);
        console.log(response);
      });
  }
  useEffect(() => console.log(topArtists), []);
  return (
    <div>
      PieChart
      <button onClick={handleToplist}>click this</button>
      {topArtists?.map((item, index) => (
        <div key={index}>
          <img src={item.images[2].url}></img>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default PieChart;
