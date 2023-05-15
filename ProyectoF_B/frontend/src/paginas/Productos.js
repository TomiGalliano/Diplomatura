import { useState,useEffect } from "react";
import axios from 'axios';
import productoItem from "../componentes/productos/productoItem";



const Productos = (props) => {
    const [loading, setLoading] = useState(false);
    const [productos , setProductos] = useState([]);
    
    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/productos')
            setProductos(response.data);
            setLoading(false);
        };
        cargarProductos();
    }, []);
    
    
    
    return(
        <section className="holder">
            <h2>Productos</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    productos,map(item => <productoItem key={item.id}
                        titlte ={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo} />)
                )
            }
        </section>
    )
};

export default Productos;