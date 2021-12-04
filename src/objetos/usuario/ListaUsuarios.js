import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ListaUsuarios = () => {

    const [lista, setLista] = useState([]);
    //const [cargando, setCargando] = useState(false);

    useEffect(() => {
        getListaUsuarios();
    }, []);

    const getListaUsuarios = () => {
        //setCargando(true);
        axios.get('http://localhost:8000/api/user/')
            .then(response => {
                console.log('response', response.data);
                setLista(response.data);
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
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {lista.map(item =>
                    <tr key={"item-" + item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>;
}

export default ListaUsuarios;