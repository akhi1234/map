import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './App.css';
import Map from "./Map.js";


function App() {
  const [zoomLevel, setZoomLevel] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <div className='App-header'>
      <Button variant="primary" onClick={handleShow}>
        Open Map
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Map</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Zoom level: {zoomLevel}x
          <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
          <button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
          <hr />
          <Map zoomLevel={zoomLevel} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
}

export default App;
