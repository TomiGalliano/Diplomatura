const Contacto = (props) => {
    return(
        <main class="holder contacto">
        <div>
            <h2 class="cr">Contacto Rápido</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="Email">Email</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="asunto">Asunto</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p class="acciones"><input type="submit" value="Enviar" /></p>
            </form>
            
        </div>
    </main>
    );
}
export default Contacto;