import { useState } from "react";
import { Alert } from "./Alert";
import { Card, Form, Button } from 'react-bootstrap'

// Componente Formulario
export const Formulario = () => {
    const [values, setValues] = useState({
      Name: "",
      Correo: "",
      Contraseña: "",
      ValidarContraseña: ""
    });
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");
    const inputChange = (event) => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
    const handleForm = (event) => {
      event.preventDefault();
      if (
        !values.Name ||
        !values.Correo ||
        !values.Contraseña ||
        !values.ValidarContraseña
      ) {
        setAlertMessage("Por favor, complete todos los campos.");
        setAlertType("danger");
      } else {
        if (values.Contraseña !== values.ValidarContraseña) {
          setAlertMessage("Las contraseñas no coinciden.");
          setAlertType("danger");
        } else {
          setAlertMessage("¡Registro exitoso!");
          setAlertType("success");
        }
      }
    };
    return (
      <Card className="contenedor-formulario">
        <Card.Body>
          <Form onSubmit={handleForm} className="formulario">
            <Form.Group controlId="formName" className="contenedor-form">
              <Form.Control
                type="text"
                name="Name"
                value={values.Name}
                placeholder="Nombre"
                onChange={inputChange}
                style={{height:"30px"}}
                className="formulario"
              />
            </Form.Group>

            <Form.Group controlId="formCorreo" className="contenedor-form">
              <Form.Control
                type="text"
                name="Correo"
                value={values.Correo}
                placeholder="Correo"
                onChange={inputChange}
                style={{height:"30px"}}
                className="formulario"
              />
            </Form.Group>

            <Form.Group controlId="formContraseña" className="contenedor-form">
              <Form.Control
                type="password"
                name="Contraseña"
                value={values.Contraseña}
                placeholder="Contraseña"
                onChange={inputChange}
                style={{height:"30px"}}
                className="formulario"
              />
            </Form.Group>

            <Form.Group controlId="formValidarContraseña" className="contenedor-form">
              <Form.Control
                type="password"
                name="ValidarContraseña"
                value={values.ValidarContraseña}
                placeholder="Confirma Tu Contraseña"
                onChange={inputChange}
                style={{height:"30px"}}
                className="formulario"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Registrarse
            </Button>
          </Form>
          {alertMessage && (
            <Alert message={alertMessage} type={alertType} />
          )}
        </Card.Body>
    </Card>
    );
};
export default Formulario