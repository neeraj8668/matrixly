import React from 'react'
import Modal from "react-bootstrap/Modal";
import Upload from "../components/Upload";

function KnowledgeBase(props) {
const { show, handleClose } = props;
  return (
    <Modal show={show} onHide={handleClose} animation={true} centered className="sharebot-modal">
      <Modal.Header closeButton>
        <Modal.Title>Knowledge Base</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-0">
        <Upload uploaderCardWidth={"100%"} uploaderCardHeight={"600px"} uploadTitle={false} scrollMaxHeight={"150px"} {...props}/>
      </Modal.Body>
    </Modal>
  )
}

export default KnowledgeBase