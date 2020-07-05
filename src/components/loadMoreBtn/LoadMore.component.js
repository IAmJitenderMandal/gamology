import React, { useContext, useState } from "react";
import "./loadMore.styles.scss";
import dataContext from "../../context/dataContext";

export default function LoadMore() {
  const {data, dispatch} = useContext(dataContext)
  console.log(data)
  return (
    <button
      className="load-more-btn" onClick = {() => data.setUrlFunc(data.gamesData.nextUrl)}> Load More </button>
  );
}
