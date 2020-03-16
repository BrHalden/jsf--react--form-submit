import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";

const schema = yup.object().shape({
	firstName: yup.string().required("First name is required"),
	lastName: yup.string().required("Last name is required"),
});
export default function Contact() {
    const { register, handleSubmit, errors } = useForm({
      validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control name="firstName" placeholder="First name" ref={register({ required: true })} />
            {errors.firstName && <p>First name is required</p>}
        </Form.Group>
        <Form.Group>
            <Form.Label>Last name</Form.Label>
            <Form.Control name="lastName" placeholder="Last name" ref={register({ required: true })} />
            {errors.lastName && <p>First name is required</p>}
        </Form.Group>

        <Button type="submit">Submit</Button>
    </Form>
    )
}
/*export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const info = event.target.elements; 
    const formElem = [];
    console.log(event);
    console.log(info);
    for (let i = 0; i < info.length; i++) {
      formElem.push(info[i].value);
    }
    console.log(formElem);
  };*/