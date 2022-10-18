import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddMovie = ({MovieData, setMovieData}) => {
    const [lgShow, setLgShow] = useState(false);
    const [movieTitle, setMovieTitle] = useState("");
    const [movieDescription, setMovieDescription] = useState("");
    const [moviePoster, setMoviePoster] = useState("");
    const [movieRating, setMovieRating] = useState("");
    const handleClick = ()=>{
        var Movie = [{
            title: movieTitle,
            description: movieDescription,
            posterUrl: moviePoster,
            rating: movieRating,
        }]
        var Movies = [...MovieData,...Movie]
        setMovieData(Movies)
        setLgShow(false)
    }
  return (
    <>
    <Button onClick={() => setLgShow(true)} id="btn-add">Add Movie</Button>
    <Modal
      size="lg"
      show={lgShow}
      onHide={() => setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Large Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie title</Form.Label>
                <Form.Control type="text" placeholder="Enter movie title..." onChange={(e)=>setMovieTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Movie Description</Form.Label>
                <Form.Control type="text" placeholder="Enter movie description" onChange={(e)=>setMovieDescription(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Movie Poster</Form.Label>
                <Form.Control type="text" placeholder="Enter movie poster" onChange={(e)=>setMoviePoster(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Movie Rating</Form.Label>
                <Form.Control type="number" placeholder="Enter movie poster" onChange={(e)=>setMovieRating(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleClick}>
                Add
            </Button>
        </Form>
      </Modal.Body>
    </Modal>
  </>

  )
}

export default AddMovie 
