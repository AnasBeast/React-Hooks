import React from 'react'
import {Navbar,Nav,Container,Form,Button} from "react-bootstrap"
import StarRatingComponent from 'react-star-rating-component';
import AddMovie from './AddMovie';
import './styles.css'

const Navigation = (props) => {
    const handeRating = (nextValue ,prevValue, name)=>{
        props.setRating(nextValue)
        
    }
    return (
    <Navbar bg="black" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Gomyode Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Film</Nav.Link>
            <Nav.Link href="#">Series</Nav.Link>
            <Nav.Link href="#">
              Anime
            </Nav.Link>
          </Nav>
          <StarRatingComponent 
            name='rate1'
            starCount={5}
            onStarClick={handeRating}
            value={props.rating}
            />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>props.search(e.target.value)}
            />
            <Button variant="outline-primary" id="btn-search">Search</Button>
          </Form>
          <AddMovie MovieData={props.MovieData} setMovieData={props.setMovieData} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation