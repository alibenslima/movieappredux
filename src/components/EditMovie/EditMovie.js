import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { EDIT } from "../../redux/Action";

const EditMovie = ({ movie }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [rate, setRate] = useState(0);
  const [trailer, setTrailer] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const editedMovie = {
      id: movie.id,
      title,
      date,
      rate,
      posterUrl: url,
    };

    if (title && date && url && rate && trailer && description) {
      dispatch(EDIT(editedMovie));
      handleClose();
      setDate("");
      setRate(0);
      setTitle("");
      setUrl();
      setTrailer();
      setDescription("");
    } else alert("Field is empty, fill the blanks.");
  };
  return (
    <div>
      <div>
        <div className="add-btn">
          <Button variant="warning" onClick={handleShow}>
            Modifer
          </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="modalz">
            <Modal.Title className="formu">
              <h3>Add your Movie.</h3>
            </Modal.Title>
          </Modal.Header>
          <div className="modalz">
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <h4>Title :</h4>
                <Form.Control
                  type="text"
                  placeholder="Enter your title..."
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                <h4>Movie Cover :</h4>
                <Form.Control
                  type="text"
                  placeholder="Enter your url Cover..."
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                />
                <h4>Description :</h4>
                <Form.Control
                  type="text"
                  placeholder="Enter your Description..."
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
                <h4>Release Date :</h4>
                <Form.Control
                  type="text"
                  placeholder="Enter your Rel Date..."
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
                <h4>Trailer :</h4>
                <Form.Control
                  type="text"
                  placeholder="Enter your url trailer..."
                  onChange={(e) => setTrailer(e.target.value)}
                  value={trailer}
                />
                <h4>Rating :</h4>
                <Form.Control
                  type="text"
                  placeholder="Enter your rating"
                  onChange={(e) => setRate(e.target.value)}
                  value={rate}
                />
                <Button variant="warning" type="submit" className="bouton">
                  Modifier
                </Button>
                <Button
                  variant="success"
                  onClick={handleClose}
                  className="close-btn"
                >
                  Close
                </Button>
              </Form>
            </Modal.Body>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default EditMovie;
