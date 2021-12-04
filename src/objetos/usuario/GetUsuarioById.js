import axios from 'axios';
import { useEffect, useState } from 'react'
//import ListaUsuarios from './ListaUsuarios';

const GetUsuarioById = () => {
    const [lista, setLista] = useState([]);
    useEffect(() => {
        getUsuarioById();
    }, []);
    const getUsuarioById = () => {
        //setCargando(true);
        axios.get('http://localhost:8000/api/user/')
            .then(response => {
                console.log('response', response.data);
                setLista(response.data);
            }).catch(error => {
                console.log('error', error);
            });
    }
    console.log(lista);
    return lista.name;
}

export default GetUsuarioById;