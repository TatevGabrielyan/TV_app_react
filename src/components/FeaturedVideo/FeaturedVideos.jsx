import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CaretRightOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import * as Styled from "./FeaturedVideo.styled";
import HomePageImages from "../../constants/images";
import Data from "../../constants/data.json";
import TrendingNow from "../TrendingNow/TrendingNow";
import { selectCollapsed } from "../../store/ducks/homePageSlice";

const { mainVideoImage, featuredTitleImage } = HomePageImages;

const FeaturedVideo = () => {
  const collapsed = useSelector(selectCollapsed);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [selectedMovieImage, setSelectedMovieImage] = useState(null);

  // updating feature details of the movie when user clickes
  const updateFeaturedMovie = () => {
    const lastClickedMovieId = sessionStorage.getItem("lastClickedMovieId");
    if (!lastClickedMovieId) {
      setFeaturedMovie(Data.Featured);
      return;
    }
    const foundMovie = Data.TendingNow.find(
      (movie) => movie.Id === lastClickedMovieId,
    );

    setSelectedMovieImage(foundMovie ? foundMovie.CoverImage : null);
    setFeaturedMovie((prevFeaturedMovie) => foundMovie || prevFeaturedMovie);
  };

  useEffect(() => {
    updateFeaturedMovie();
    const intervalId = setInterval(updateFeaturedMovie, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // if there is no movie show loading
  if (!featuredMovie) {
    return <p>Loading...</p>;
  }

  const { Category, ReleaseYear, MpaRating, Duration, Description } =
    featuredMovie;

  return (
    <>
      <Styled.Features
        style={{
          backgroundImage: `url(${selectedMovieImage || mainVideoImage})`,
        }}
      >
        <Styled.CategoryName>{Category}</Styled.CategoryName>
        <img src={featuredTitleImage} alt="title" width="40%" />

        <Styled.DetailsContainer>
          {/* feature details */}
          <Styled.Details>{ReleaseYear}</Styled.Details>
          <Styled.Details>{MpaRating}</Styled.Details>
          <Styled.Details>{Duration}</Styled.Details>
        </Styled.DetailsContainer>
        <Styled.FeatureInfo>{Description}</Styled.FeatureInfo>
        <Row gutter={[16, 16]}>
          {/* feature  buttons */}
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <Styled.PlayButton zindex={collapsed ? 20 : 0}>
              <CaretRightOutlined /> Play
            </Styled.PlayButton>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <Styled.MoreInforButton>More Info</Styled.MoreInforButton>
          </Col>
        </Row>
        <Styled.Footer>
          <TrendingNow />
        </Styled.Footer>
      </Styled.Features>
    </>
  );
};

export default FeaturedVideo;
