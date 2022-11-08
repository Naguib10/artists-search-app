import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlbumCard from './AlbumCard';
import ArtistCard from './ArtistCard';

const TopAlbums = (props) => {

    const [albums, setalbums] = useState([]);

    async function fetchData() {

        try {
            const res = await axios.get(
                `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${props.artist}&api_key=2d9b6b622a720816152fe9586d35f271&format=json`);
            setalbums(res.data.TopAlbums);
            console.log(res.data.TopAlbums);

        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        albums.map((album, id) => (
            <AlbumCard
                key={id}
                title={album.name}
                img={album.image}
            />
        ))
    )
}

export default TopAlbums