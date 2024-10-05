import { Modal } from 'react-bootstrap';
import React from 'react';

const ImageCreditModal = ({ show, setShow, gameName, credit }) => {
    return(
        <div className="image-credit-modal">
            <Modal show={show} onHide={()=>{ setShow(false) }}>
                <Modal.Header closeButton>
                    Credit for {gameName} Image Used
                </Modal.Header>
                <Modal.Body>
                    {credit.author} contributed this image to <a href={credit.sourceLink}>{credit.source}</a><br></br>
                    This image is governed by the the following license: <a href={credit.licenseLink}>{credit.license}</a>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ImageCreditModal;