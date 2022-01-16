import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

function PopupModel(props) {
    const { show, changeModal } = props

    return (
        <>
            <Modal show={show} onHide={changeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={changeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={changeModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PopupModel;
