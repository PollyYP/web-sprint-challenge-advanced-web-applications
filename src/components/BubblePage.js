import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import { fetchColorsData } from "../api/fetchColorData";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  // const fetchColorsData = () => {
  //   axiosWithAuth()
  //     .get("/colors")

  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    fetchColorsData().then((res) => setColorList(res.data));
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
