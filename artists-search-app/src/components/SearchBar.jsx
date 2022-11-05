import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

function SearchBar(props) {

    const [artist, setArtist] = useState({ title: "" });

    function handleChange(event) {
        const { name, value } = event.target;

        setArtist(prevName => {
            return {
                ...prevName,
                [name]: value
            };
        })

        //console.log(artist);
    }

    function searchArtist() {
        props.search(artist.title);
        //console.log(artist);
        //setArtist("");
    }


    return (
        <>
            <InputGroup className="mb-3 w-50">
                <Form.Control
                    placeholder="Search for Artist"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    name="title"
                    onChange={handleChange}
                    value={artist.title}

                />
                <Button variant="outline-secondary" id="button-addon2" onClick={searchArtist}>
                    Search
                </Button>
            </InputGroup>
        </>
    );
}

export default SearchBar;