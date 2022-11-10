import SearchBar from "./SearchBar";
import { useState } from "react";
import SearchResults from "./SearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopAlbums from "./TopAlbums";
import ArtistCard from "./ArtistCard";

function App() {

  const [name, setname] = useState("");

  const [chosenArtist, setChosenArtist] = useState("");

  function searchArtist(incomingArtist) {
    setname(incomingArtist);
  }

  function showAlbums(incomingArtist) {
    setChosenArtist(incomingArtist);
  }

  //   //key 2d9b6b622a720816152fe9586d35f271

  return (
    <div className="App container p-3">
      <Routes>
        <Route path="/" element={<SearchBar search={searchArtist} />}>Home</Route>
        <Route path="/searchresults" element={<SearchResults artist={name} search={showAlbums} />}>Search Results</Route>
        <Route element={<ArtistCard />}>Arist Card</Route>
        <Route path="/topalbums" element={<TopAlbums artist={chosenArtist} />}>Top Albums</Route>
      </Routes>

    </div>
  );
}

export default App;
