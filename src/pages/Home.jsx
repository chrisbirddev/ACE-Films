import React from 'react';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../requests';


const Home = () => {
  return (
    <>
      <Banner />
      <Row rowID="1" title="Trending" fetchURL={requests.requestTrending} customHeight="269px" style={{ zIndex: 1 }} />
      <div className='text-black'>spacing</div>
      <div className='text-black'>spacing</div>
      <Row rowID="2" title="Ace Originals" fetchURL={requests.requestOriginals}  />
      <Row rowID="3" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="4" title="Action" fetchURL={requests.requestActionMovies} />
      <Row rowID="5" title="Romance" fetchURL={requests.requestRomanceMovies} />
    </>
  );
}

export default Home;
