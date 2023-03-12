import React from "react";
import Main from "../components/Main";
import Rows from "../components/Rows";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Rows rowID="1" title="Upcoming" fetchurl={requests.requestUpcoming} />
      
      <Rows rowID="2" title="Popular" fetchurl={requests.requestPopular} />
      <Rows rowID="3" title="Trending" fetchurl={requests.requestTrending} />
      <Rows
        rowID="4"
        title="Recommendations"
        fetchurl={requests.requestRecommendations}
      />
      <Rows rowID="5" title="Top Rated" fetchurl={requests.requestTopRated} />
      <Rows rowID="6" title="Horror" fetchurl={requests.requestHorror} />
     
    </div>
  );
};

export default Home;
