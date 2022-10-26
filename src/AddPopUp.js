import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import axios from "axios"

function Post({ values }) {
    axios.post(`${process.env.REACT_APP_api_base_url}/contents/`,
        {
            content: values['content'],
            content_date: values['content_date'],
            app_user_email: "test@test.com"
        }
    )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}


function NewContent(props) {

    var [values, setValues] = useState({});

    const onFormChange = (e, updatedAt) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        event.persist();
        Post(values = { values });
        props.setsubmitted(true);
        console.log(values['content']);
    };

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="duedate" className="mb-3">
                <Form.Label>Date du contenu</Form.Label>
                <Form.Control
                    type="date"
                    name="content_date"
                    placeholder={"Content Date"}
                    onChange={onFormChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Contenu</Form.Label>
                <Form.Control
                    name="content"
                    as="textarea"
                    rows={10}
                    placeholder="Contenu"
                    onChange={onFormChange}
                />
            </Form.Group>

            <Button
                variant="primary"
                type="submit">
                Soumettre
            </Button>
            <Button variant="secondary"
                onClick={props.onHide}
                className="ms-1">
                Annuler
            </Button>
        </Form>
    );
}


function Submitted() {
    return (
        <div className='nodata m-4'>
            <img className='nodata-image' src={require('./images/check.png')} alt='no data' />
            <div>Votre entrée a été soumise</div>
        </div>
    )
}


function PopUp(props) {

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Ajouter du contenu manuellement
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.submitted ?
                        <Submitted />
                        :
                        <NewContent setsubmitted={props.setsubmitted} onHide={props.onHide} />
                    }
                </Modal.Body>
            </Modal>
        </div>
    );
}

function AddPopUp() {
    const [modalShow, setModalShow] = useState(false);
    const [submitted, setsubmitted] = useState();
    return (
        <>
            <Button variant="primary" onClick={() =>
            (
                setModalShow(true),
                setsubmitted(false)
            )}>
                Ajouter manuellement
            </Button>

            <PopUp
                show={modalShow}
                submitted={submitted}
                setsubmitted={setsubmitted}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default AddPopUp;