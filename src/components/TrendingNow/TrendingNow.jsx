import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Data from "../../constants/data.json";
import * as Styled from "./TrendingNow.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

// carousel details
const MovieCarousel = ({ movies, onMovieClick }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  // getting movie images from data.json

  return (
    <Styled.TrendingNow>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.Id} onClick={() => onMovieClick(movie)}>
            <Styled.Image
              key={movie.Id}
              src={`/${movie.CoverImage}`}
              alt={movie.Title}
            />
          </div>
        ))}
      </Slider>
    </Styled.TrendingNow>
  );
};

MovieCarousel.propTypes = {
  movies: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

const TrendingNow = () => {
  const data = Data;
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);

  const handleMovieClick = (movie) => {
    setFeaturedMovie(movie);

    // Save the movie ID in sessionStorage
    sessionStorage.setItem("lastClickedMovieId", movie.Id);

    // Show the player after 2 seconds
    setTimeout(() => {
      setShowPlayer(true);
    }, 2000);
  };

  useEffect(() => {
    const lastClickedMovieId = sessionStorage.getItem("lastClickedMovieId");

    const fetchLastClickedMovie = () => {
      if (lastClickedMovieId) {
        const lastClickedMovie = data.TendingNow.find(
          (movie) => movie.Id === lastClickedMovieId,
        );
        if (lastClickedMovie) {
          // Sort movies based on the last clicked movie
          const sortedMovies = [
            lastClickedMovie,
            ...data.TendingNow.filter(
              (movie) => movie.Id !== lastClickedMovieId,
            ),
          ];
          setFeaturedMovie(lastClickedMovie);
          // Set the sorted movies as the new movie list
          data.TendingNow = sortedMovies;
        }
      }
    };

    fetchLastClickedMovie();
  }, [data.TendingNow]);

  return (
    <div>
      <Styled.Header> Trending Now </Styled.Header>

      {featuredMovie && (
        <div>
          <div>
            <h2>{featuredMovie.Title}</h2>
            {showPlayer && (
              <Styled.ReactPlayerContainer
                url={featuredMovie.VideoUrl}
                playing={true}
                loop={false}
                width="100%"
                height="auto"
              ></Styled.ReactPlayerContainer>
            )}
          </div>
        </div>
      )}

      {/* Movie Carousel */}
      <MovieCarousel movies={data.TendingNow} onMovieClick={handleMovieClick} />
    </div>
  );
};

export default TrendingNow;
