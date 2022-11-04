import React, { useState } from 'react';
import ArtistCard from "./ArtistCard";
import axios from "axios";

const SearchResults = (props) => {

    const [artists, setArtists] = useState([]);

    async function fetchData() {
        try {
            const response = await axios.get(
                `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=2d9b6b622a720816152fe9586d35f271&format=json`);
            setArtists(response.data.results.artistmatches.artist);
            console.log(response.data.results.artistmatches.artist[1].image[1]["#text"]);

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            {artists.map((artist, id) => (
                <ArtistCard
                    key={id}
                    title={artist.name}
                    img={artist.image[1]["#text"]}
                />
            ))}
            <button onClick={fetchData}>3ady keda</button>
        </>
    )
}

export default SearchResults