import SearchBar from "./SearchBar";
import { useState } from "react";
import SearchResults from "./SearchResults";

function App() {

  const [name, setname] = useState("");
  //var name = "";

  function searchArtist(incomingArtist) {
    setname(incomingArtist);
    //name = incomingArtist;
    //console.log("the name is " + name);
  }


  // const fetchData = () => {
  //   return axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=2d9b6b622a720816152fe9586d35f271&format=json`)
  //     .then((response) => setname(response.data.results.artistmatches.artist)).then(conso);

  //   //key 2d9b6b622a720816152fe9586d35f271
  // }

  return (
    <div className="App">
      <p>test</p>
      {/* <Link to="./pages/SearchResults">Press here</Link> */}
      <SearchBar
        name={name}
        search={searchArtist} />
      <SearchResults
        artist={name} />
    </div>
  );
}

export default App;
