import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

const data = [
    { id: 1, reto: "Volver al inicio", dificultad: "Facil" },
    { id: 2, reto: "Devolverse 5 casillas", dificultad: "Facil" },
    { id: 3, reto: "No jugar por 2 rondas", dificultad: "Facil" },
    { id: 4, reto: "Te has salvado", dificultad: "Facil" },
];

class App extends React.Component {
    state = {
        data: data,
        modalEditar: false,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            reto: "",
            dificultad: "",
        },
        opcionesDificultad: ["Fácil", "Medio", "Difícil"],
    };

    mostrarModalEditar = (dato) => {
        this.setState({
            form: dato,
            modalEditar: true,
        });
    };

    cerrarModalEditar = () => {
        this.setState({ modalEditar: false });
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

    mostrarModalEditar = (dato) => {
        this.setState({
            form: dato,
            modalEditar: true,
        });
    };

    cerrarModalEditar = () => {
        this.setState({ modalEditar: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.id === registro.id) {
                arreglo[contador].reto = dato.reto;
                arreglo[contador].dificultad = dato.dificultad;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalEditar: false });
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

    handleSubmit = (e) => {
        e.preventDefault();

        const {
            id,
            reto,
            dificultad,
        } = this.state.form;

        if (!id) {
            alert("Por favor, ingrese un ID válido.");
            return;
        }

        const newData = {
            id,
            reto,
            dificultad,
        };

        const exists = this.state.data.some((item) => item.id === id);

        if (exists) {
            alert("El ID ingresado ya existe. Por favor, elija un ID diferente.");
            return;
        }

        this.setState((prevState) => ({
            data: [...prevState.data, newData],
            form: {
                id: "",
                reto: "",
                dificultad: "",
            },
        }));

        alert("La pregunta se ha agregado correctamente.");
    };

    render() {
        return (
            <>
                <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear nuevo Castigo</Button>
                <Container>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Castigo</th>
                                <th>Dificultad</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id} className="editable-field"
                                    onClick={() => this.mostrarModalEditar(dato)}>
                                    <td>{dato.id}</td>
                                    <td>{dato.reto}</td>
                                    <td>{dato.dificultad}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>

                <Modal isOpen={this.state.modalEditar}>
                    <ModalHeader>
                        <div>
                            <h3>Editar Castigo</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label className="names">ID:</label>
                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={this.state.form.id}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label className="names">
                                Castigo:
                            </label>
                            <input
                                className="form-control"
                                name="reto"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.reto}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label className="names">Dificultad:</label>
                            <select
                                className="form-control"
                                name="dificultad"
                                onChange={this.handleChange}
                            >
                                {this.state.opcionesDificultad.map((opcion) => (
                                    <option key={opcion} value={opcion}>
                                        {opcion}
                                    </option>
                                ))}
                            </select>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editar(this.state.form)}>
                            Guardar
                        </Button>
                        <Button color="danger" onClick={() => this.eliminar(this.state.form)}>Eliminar</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar Castigo</h3></div>
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
                                Castigo:
                            </label>
                            <input
                                className="form-control"
                                name="reto"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label className="names">Dificultad:</label>
                            <select
                                className="form-control"
                                name="dificultad"
                                onChange={this.handleChange}
                            >
                                {this.state.opcionesDificultad.map((opcion) => (
                                    <option key={opcion} value={opcion}>
                                        {opcion}
                                    </option>
                                ))}
                            </select>
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