import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from "../../../_actions/user_action";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../Config";
import MainImage from "./Sections/MainImage";


function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);

  useEffect(() => {
    const endpoint = `${ API_URL }movie/popular?api_key=${ API_KEY }&language=en-US&page=1`;
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovies([ ...Movies, ...res.results ]); 
        setMainMovieImage(MainMovieImage || res.results[0]);
      });
  }, []);

  // const logOut = () => {
  //   dispatch(logout()).then((res) => {
  //     if (res.payload.isAuth === false) {
  //       alert("이미 로그아웃 상태입니다.!");
  //     } else {
  //       alert("로그아웃 성공");
  //       navigate("/");
  //     }
  //   });
  // };

  return (
    <>
      <div style={{ width: '100%', margin: '0'}}>
        {/* Main Image */}
        {
          MainMovieImage && 
          <MainImage
            image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
            title={MainMovieImage.original_title}
            text={MainMovieImage.overview}
          />
        }
        
        <div style={{ width: '85%', margin: '1rem auto' }}>
          <h2>Movies by latest</h2>
          <hr/>
          {/* Movie Grid Cards */}

        </div>

        {/* <button onClick={logOut}>로그아웃</button> */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <button>Load More</button>
      </div>
    </>

  );
}

export default LandingPage
