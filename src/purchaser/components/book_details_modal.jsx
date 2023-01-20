import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class BookDetailsModal extends React.Component {
  render() {
    return(
      <Modal show={this.props.displayModal} onHide={this.props.hide} dialogClassName="modal-50w">
        <Modal.Header closeButton>
          <Modal.Title>{`${this.props.name} Details`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default BookDetailsModal;