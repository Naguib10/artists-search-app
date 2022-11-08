import React, { useState, useEffect } from 'react';
import ArtistCard from "./ArtistCard";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

const SearchResults = (props) => {

    const [artists, setArtists] = useState([]);

    async function fetchData() {
        try {
            const response = await axios.get(
                `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${props.artist}&api_key=2d9b6b622a720816152fe9586d35f271&format=json`);
            setArtists(response.data.results.artistmatches.artist);
            //console.log(incomingArtist);

        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        fetchData();
        console.log("useEffect worked");
    }, [])


    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Row>
                    {artists.map((artist, id) => (
                        <Col className="col-md-3" key={id}>
                            <ArtistCard
                                key={id}
                                title={artist.name}
                                img={artist.image[1]["#text"]}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default SearchResults