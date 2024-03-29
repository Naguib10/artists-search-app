import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Router, Link } from 'react-router-dom';

function BasicExample(props) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {/* Some quick example text to build on the card title and make up the
                    bulk of the card's content. */}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;