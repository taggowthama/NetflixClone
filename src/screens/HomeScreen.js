import React from 'react'
import '../screens/HomeScreen.css'
import Nav from '../Nav'
import Banner from '../Banner'
import requests from '../Request'
import Row from '../Row'
function HomeScreen() {
    return (
        <div className="homescreen">
        
        <Nav />
        
        <Banner />
        
        
       <Row title="Netflix Originals"
       fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow />
       
       <Row title="Netflix Trending"
       fetchUrl={requests.fetchTrending}
        />

        <Row title="TopRated"
       fetchUrl={requests.fetchTopRated}
        />

        <Row title="Action Movies"
       fetchUrl={requests.fetchActionMovies}
        />

        <Row title="Comedy Movies"
       fetchUrl={requests.fetchComedyMovies}
        />

        <Row title="Horror Movies"
       fetchUrl={requests.fetchHorrorMovies}
        />

        <Row title="Romance Movies"
       fetchUrl={requests.fetchRomanceMovies}
        />

        <Row title="Documantaries"
       fetchUrl={requests.fetchDocumantariesMovies}
        />
         
        </div>
    )
}

export default HomeScreen
