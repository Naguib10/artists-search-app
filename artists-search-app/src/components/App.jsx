import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function App() {

  const [name, setname] = useState([]);

  const fetchData = () => {
    return axios.get(" http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=2d9b6b622a720816152fe9586d35f271&format=json")
      .then((response) => setname(response.data.results.artistmatches.artist)).then(conso);

    //key 2d9b6b622a720816152fe9586d35f271
  }

  function conso() {
    console.log(name);
  }

  return (
    <div className="App">
      <p>test</p>
      {/* <Link to="./pages/SearchResults">Press here</Link> */}
      <SearchBar />
      {/* <p>{name}</p> */}
      <button onClick={fetchData}>cher</button>
      <button onClick={conso}>consoo</button>
    </div>
  );
}

export default App;
