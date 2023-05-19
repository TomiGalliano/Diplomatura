import {useState} from 'react';
import axios from 'axios';
import '../estilos/contacto.css';

const Contacto = (props) => {
        const initialForm = {
            nombre: '',
            email: '',
            telefono: '',
            mensaje: ''
        }

        const [sending, setSending] = useState(false);
        const [msg, setMsg] = useState(false);
        const [formData, setFormdata] = useState(initialForm);

        const handleChange = (e) => {
            const {name, value } = e.target;
            setFormdata(oldData => ({
                ...oldData,
                [name]: value
            }));
        }

        const handleSubmit = async e => {
            e.preventDefault();
            setMsg('');
            setSending(true)
            const response = await
            axios.post('http://localhost:3000/api/contacto', formData);
            setSending(false);
            setMsg(response.data.message);
            if (response.data.error === false){
                setFormdata(initialForm)
            }
        }
    


    return(
        <main class="holder contacto">
        <div>
            <h2 class="cr">Contacto Rápido</h2>
            <form action="/contacto" method="post" onSubmit={handleSubmit} class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                </p>
                <p>
                    <label for="Email">Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                </p>
                <p>
                    <label for="asunto">Asunto</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensjae" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                <p class="acciones"><input type="submit" value="Enviar" /></p>
            </form>
            {sending ? <p>Enviando...</p> :null}
            {msg ? <p>{msg}</p> :null}
            
        </div>
    </main>
    );
}

export default Contacto;