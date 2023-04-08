import '../estilos/servicio.css'

const Servicio = (props) => {
    return(
<main class="holder">
        <div class="contenedor">
            <h1 class = "p1">Servicios</h1>
            <div class="servicios">
                <div class="servicio">
                    <img src="img/atencion.jpg" alt="atencion" />
                    <h2 class="pal">Atencion Personalizada</h2>
                    <p class="p2">Contamos con un staff de profesionales que le otorga respuesta rapidas y eficientes a sus
                        consulta
                        sobre negocios o cotizaciones específicas.</p>
                </div>
                <div class="servicio">
                    <img src="img/internet.jpg" alt="internet" />
                    <h2 class="pal">Pacífico NET</h2>
                    <p class="p2">Herramienta que le permitiá gestionar sus negocios on-line optimizando sus tiempos y el de sus
                        clientes.</p>
                </div>
                <div class="servicio">
                    <img src="img/cobertura.jpg" alt="" />
                    <h2 class="pal">Cobertura Geográfica</h2>
                    <p class="p2">Podemos entregar sus polízas en las principales ciudades de nuestro país.</p>
                </div>
            </div>
        </div>

    </main>
    );
}
export default Servicio;