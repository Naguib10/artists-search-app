import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
    }

    function searchArtist() {
        props.search(artist.title);
    }


    return (
        <div className="row">
            <div className='col-md-4 m-auto'>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Search for Artist"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        name="title"
                        onChange={handleChange}
                        value={artist.title}

                    />
                    <Link to="/searchresults">
                        <Button variant="outline-secondary" id="button-addon2" onClick={searchArtist}>
                            Search
                        </Button>
                    </Link>
                </InputGroup>
            </div>
        </div>
    );
}

export default SearchBar;