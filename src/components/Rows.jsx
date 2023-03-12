import React, { useEffect, useState } from "react";
import axios from "axios";
// import css"

import { MdChevronLeft, MdChevronRight } from "react-icons/md";


import Movies from "./Movies";

const Rows = ({ title, fetchurl, rowID }) => {
  const [movies, setMovies] = useState([]);

  const fetchUpcomingMovies = async (url) => {
    try {
      const response = await axios(url);
      setMovies(response.data.results);
      //   console.log(response.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUpcomingMovies(fetchurl);
  }, [fetchurl]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
       <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div
          id={'slider' + rowID}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item, id) => (
            <Movies key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </>
  );
};

export default Rows;

// ? so basically for SLIDER functionality we just defined two function with inbuilt js and passed rowId to slide specific row.
// ?A Rows component is created with the properties title, fetchurl and rowId.
// ?The component uses the useEffect hook to fetch data from a provided URL and store the results in movies state.
// ?The component also defines two functions, slideLeft and slideRight, to slide the slider to the left and right respectively.
//? The slideLeft function uses scrollLeft property of an HTML element with id equal to "slider" + rowId to move the slider 500 pixels to the left.
// ?The slideRight function uses scrollLeft property of an HTML element with id equal to "slider" to move the slider 500 pixels to the right.
// ?The slider itself is defined as a div with className "W-full h-full overflow-x-hidden whitespace-nowrap scroll-smooth scrollbar-hide relative" and id equal to "slider" + rowId.
// ?When a user clicks the left or right chevron icons, the corresponding slideLeft or slideRight functions are called, causing the slider to move accordingly.
