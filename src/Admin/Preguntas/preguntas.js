import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './names.css';
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
} from "reactstrap";
import ExcelToJson from "./boton";

const data = [
    { id: 1, pregunta: "¿Cuál es el mejor lenguaje de programación?", respuestac: "JavaScript", respuesta1:"PHP", respuesta2:"C++", respuesta3:"Kotlin", tema:"Programacion", asignatura:"Sofware", dificultad:"Facil"},
    { id: 2, pregunta: "Cuanto es 2+10", respuestac: "12", respuesta1:"11", respuesta2:"9", respuesta3:"1", tema:"Matematicas", asignatura:"Algebra", dificultad:"Facil" },
    { id: 3, pregunta: "¿Cuánto es `11`+ 1 en JavaScript?", respuestac: "111",respuesta1:"12", respuesta2:"Syntax Error", respuesta3:"`11`1", tema:"Programacion",asignatura:"Sofware", dificultad:"Facil" },
    { id: 4, pregunta: "¿Cuento es pi?", respuestac: "3.1416", respuesta1:"3", respuesta2:"1", respuesta3:"3.15",tema:"Matematicas", asignatura:"Algebra", dificultad:"Facil"},
];

class App extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            pregunta: "",
            respuestac: "",
            respuesta1: "",
            respuesta2: "",
            respuesta3: "",
            tema: "",
            asignatura: "",
            dificultad: "",
        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.id == registro.id) {
                arreglo[contador].pregunta = dato.pregunta;
                arreglo[contador].respuestac = dato.respuestac;
                arreglo[contador].respuesta1 = dato.respuesta1;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };

    eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
        if (opcion == true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.id == registro.id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false });
        }
    };

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {

        return (
            <>
                <br></br>
                <br></br>
                <Container>
                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
                    <Button color="success" onClick={() => this.ExcelToJson()}>Insertar Excel</Button>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Pregunta</th>
                                <th>Opcion Correcta</th>
                                <th>Opcion 1</th>
                                <th>Opcion 2</th>
                                <th>Opcion 3</th>
                                <th>Tematica</th>
                                <th>Asignatura</th>
                                <th>Dificultad</th>
                                <th>Acción</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.pregunta}</td>
                                    <td>{dato.respuestac}</td>
                                    <td>{dato.respuesta1}</td>
                                    <td>{dato.respuesta2}</td>
                                    <td>{dato.respuesta3}</td>
                                    <td>{dato.tema}</td>
                                    <td>{dato.asignatura}</td>
                                    <td>{dato.dificultad}</td>
                                    <td>
                                        <Button
                                            color="primary"
                                            onClick={() => this.mostrarModalActualizar(dato)}
                                        >
                                            Editar
                                        </Button>{" "}
                                        <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>

                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>
                        <div><h3>Editar Registro</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label className="names">
                                Id:
                            </label>

                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={this.state.form.id}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names">
                                Pregunta:
                            </label>
                            <input
                                className="form-control"
                                name="pregunta"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.pregunta}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names">
                                Respuesta Correcta:
                            </label>
                            <input
                                className="form-control"
                                name="respuestac"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.respuestac}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names">
                                Opcion 1:
                            </label>
                            <input
                                className="form-control"
                                name="respuesta1"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.respuesta1}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names">
                                Opcion 2:
                            </label>
                            <input
                                className="form-control"
                                name="respuesta2"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.respuesta2}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names">
                                Opcion 3:
                            </label>
                            <input
                                className="form-control"
                                name="respuesta3"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.respuesta3}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names">
                                Tematica:
                            </label>
                            <input
                                className="form-control"
                                name="tema"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.tema}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names">
                                Asignatura:
                            </label>
                            <input
                                className="form-control"
                                name="asignatura"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.asignatura}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names">
                                Dificultad:
                            </label>
                            <input
                                className="form-control"
                                name="dificultad"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.dificultad}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => this.editar(this.state.form)}
                        >
                            Editar
                        </Button>
                        <Button
                            color="danger"
                            onClick={() => this.cerrarModalActualizar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>



                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar Pregunta</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label className="names">
                                Id:
                            </label>

                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={this.state.data.length + 1}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names"> 
                                Pregunta:
                            </label>
                            <input
                                className="form-control"
                                name="pregunta"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names">
                                Respuesta Correcta:
                            </label>
                            <input
                                className="form-control"
                                name="respuestac"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names">
                                Opcion 1:
                            </label>
                            <input
                                className="form-control"
                                name="respuesta1"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names">
                                Opcion 2:
                            </label>
                            <input
                                className="form-control"
                                name="respuesta2"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names">
                                Opcion 3:
                            </label>
                            <input
                                className="form-control"
                                name="respuesta3"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names">
                                Tematica:
                            </label>
                            <input
                                className="form-control"
                                name="tema"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names">
                                Asignatura:
                            </label>
                            <input
                                className="form-control"
                                name="asignatura"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label className="names">
                                Dificultad:
                            </label>
                            <input
                                className="form-control"
                                name="dificultad"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => this.insertar()}
                        >
                            Insertar
                        </Button>
                        <Button
                            className="btn btn-danger"
                            onClick={() => this.cerrarModalInsertar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}
export default App;