import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import PopupModel from './components/popUp';
import { useState } from 'react';

function App() {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = async(e) => {
    e.preventDefault();
    setShowModal(true);
  }
  
  const handleModalChange = () =>{
    setShowModal(!showModal);
  }

  return (
    <div className="App">
      <Button onClick={handleShowModal}>Click me</Button>
      <PopupModel show={showModal} changeModal={handleModalChange}></PopupModel>
    </div>
  );
}

export default App;
