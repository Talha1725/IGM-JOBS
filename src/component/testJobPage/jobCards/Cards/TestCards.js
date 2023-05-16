import { Row, Col, Card, Button } from 'react-bootstrap';
import { BsBookmark } from 'react-icons/bs';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { FiShoppingBag } from 'react-icons/fi';
import { FaGoogleWallet } from 'react-icons/fa';
import "./TestCards.css"

function TextExample() {
    const cardStyle = {
        boxShadow: "0px 0px 8px 2px rgba(0, 0, 0, 0.25)",
        borderRadius: "7px",
        marginBottom: "25px",
        width: '100%',
        height:"30vh"
    };
    return (
        <Card style={cardStyle}>
            <Card.Body>
                <Row className='py-2'>
                    <Col className="d-flex justify-content-start ">
                        <span>Php Developer</span>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <span>44$/hr</span>
                    </Col>
                </Row>
                <span className="mb-2 text-muted subtitle">Posted 6 days ago - 68 applicants</span>

                <Row className='py-2'>
                    <Col className="d-flex justify-content-start">
                        <span>
                            Lorem Ipsum is simply dummy text of the printing
                            nd typesetting industry. Lorem Ipsum has been
                            e industry's standard dummy text ever since
                            he 1500s.
                        </span>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <div className="d-flex flex-column ">
                            <Button variant="outline-secondary">Save <BsBookmark size={16} /></Button>
                            <Button variant="dark" className='my-3'>Apply <RiCheckboxCircleLine size={19} /></Button>
                        </div>
                    </Col>
                </Row>
                <div className='d-flex justify-content-start px-0' style={{ fontSize: "0.9rem" }}>
                    <span className=" col text-muted"><FiShoppingBag size={16} /> Full Time </span>
                    <span className=" col text-muted">Senior Developer</span>
                    <span className=" col text-muted"><FaGoogleWallet size={16} />Purposal</span>
                </div>
            </Card.Body>
        </Card>
    );
}

export default TextExample;