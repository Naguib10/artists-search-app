import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ButtonsExample() {
    return (
        <>
            <InputGroup className="mb-3 w-50">
                <Form.Control
                    placeholder="Search for Artist"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
        </>
    );
}

export default ButtonsExample;