import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
     <Nav/>
      <Banner />
   
   
    <Row
     title ="NETFLIX ORIGINALS"
    islargeRow={true}
     fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title ="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title ="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title ="Comedy Movie" fetchUrl={requests.fetchHorrorMovies} />
    <Row title ="Horror Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title ="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Row title ="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    

    </div>
  );
}

export default App;
