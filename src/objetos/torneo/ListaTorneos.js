import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ListaTorneos = () => {
    const [lista, setLista] = useState([]);
    useEffect(() => {
        getListaTorneos();
    }, []);

    const getListaTorneos = () => {
        //setCargando(true);
        axios.get('http://localhost:8000/api/torneos')
            .then(response => {
                console.log('response', response.data.Torneos);
                setLista(response.data.Torneos);
                //setCargando(false);
            }).catch(error => {
                console.log('error', error);
            });
    }

    return <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Videojuego</th>
                    <th>Modalidad</th>
                    <th>Inicia</th>
                    <th>Finaliza</th>
                    <th>Estado</th>
                    <th>Puntos de Victoria</th>
                    <th>Puntos de Empate</th>
                    <th>Puntos de Derrota</th>
                    <th>Creador</th>
                </tr>
            </thead>
            <tbody>
                {lista.map(item =>
                    <tr key={"item-" + item.id}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.videojuego}</td>
                        <td>{item.modalidadNombre}</td>
                        <td>{item.fechaInicio}</td>
                        <td>{item.fechaFin}</td>
                        <td>{item.estadoNombre}</td>
                        <td>{item.puntuacionVictoria}</td>
                        <td>{item.puntuacionEmpate}</td>
                        <td>{item.puntuacionDerrota}</td>
                        <td>{item.nombreCreador}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>;
}

export default ListaTorneos;