import SearchBar from "./SearchBar";
import { useState } from "react";
import SearchResults from "./SearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopAlbums from "./TopAlbums";

function App() {

  const [name, setname] = useState("");
  //var name = "";

  function searchArtist(incomingArtist) {
    setname(incomingArtist);
    //name = incomingArtist;
    //console.log("the name is " + name);
  }

  const [album, setalbum] = useState("");

  function searchAlbums(incomingAlbum) {
    setalbum(incomingAlbum);
  }


  // const fetchData = () => {
  //   return axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=2d9b6b622a720816152fe9586d35f271&format=json`)
  //     .then((response) => setname(response.data.results.artistmatches.artist)).then(conso);

  //   //key 2d9b6b622a720816152fe9586d35f271
  // }

  return (
    <div className="App container p-3">

      {/* <Link to="./pages/SearchResults">Press here</Link> */}
      <Routes>
        <Route path="/" element={<SearchBar search={searchArtist} />}>Home</Route>
        <Route path="/searchresults" element={<SearchResults artist={name} searchalbums={searchAlbums} />}>Search Results</Route>
        <Route path="/topalbums" element={<TopAlbums artist={album} />}>Top Albums</Route>
      </Routes>

      {/* <SearchBar
        search={searchArtist} />
      <SearchResults
        artist={name} /> */}

    </div>
  );
}

export default App;
