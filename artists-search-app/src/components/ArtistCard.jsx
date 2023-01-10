import { createContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Router, Link } from 'react-router-dom';


function BasicExample(props) {

    const artistname = props.title;

    function searchAlbums() {
        props.search(artistname);
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {/* Some quick example text to build on the card title and make up the
                    bulk of the card's content. */}
                    </Card.Text>
                    <Link to="/topalbums">
                        <Button variant="primary" onClick={searchAlbums}>Top Albums</Button>
                    </Link>

                </Card.Body>
            </Card>
        </>
    );
}

export default BasicExample;