import React from "react";
import { Modal } from "react-bootstrap";
import ottawaMap from "../images/ottawaMap.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'

const MoreInfoModal = ({ restaurant, handleModalOpen, modalIsOpen }) => {
    return (
        <>
            <Modal centered keyboard show={modalIsOpen} onHide={handleModalOpen}>
                <Modal.Header style={{ height: "30vh", backgroundImage: `url(${ottawaMap})`, backgroundSize: "cover" }} closeButton className="border-0">
                    <Modal.Title className="bg-white px-2 my-auto mx-auto rounded-lg font-weight-normal">
                        {restaurant.restaurantName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="my-2">
                    <h1>
                        Location and hours
                    </h1>
                    <h6 className="py-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> {restaurant.address}</h6>
                    <h6><FontAwesomeIcon icon={faClock} className="mr-2" /> Hours of Operation</h6>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default MoreInfoModal;