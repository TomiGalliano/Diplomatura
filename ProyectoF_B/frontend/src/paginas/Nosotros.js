import Header from "../componentes/layout/Header"

const Nosotros = (props) => {
    return(
        <main class="holder">
           <div class="contenedores">
            <div class="contenedor1">
                <h2 class="quien"> Quienes Somos</h2>
                <p class="quienessomos">Somos una estructura orgánica con visión Técnica y Comercial, capaz de otorgar un valor agregado
                    superior
                    a nuestros clientes, sabemos que la excelencia en la calidad de servicio y el profesionalismo
                    aplicado a
                    la suscripción de riesgos son las únicas herramientas posibles para obtener resultados positivos.

                    Tenemos el respaldo de varios reaseguradores internacionales especialistas en Seguros de Caución, su
                    apoyo y calidad de suscripción nos permiten contar con una importante capacidad automática necesaria
                    para atender los requerimientos de nuestros clientes.</p>
            </div>
            <div class="staff">
                <h2 class="palabra">STAFF</h2>
                <div class="personas">
                    <div class="persona">
                        <img src="img/persona2.jpeg" alt="gerente"/>
                        <h5>Eduardo Gentili</h5>
                        <h6>Presidente, CEO</h6>
                        <p class="parrafo">Contador Público(UBA),Licenciado en Economía(UBA),Master en Economia(UCEMA).Más de tres
                            décadas de experiencia, 22 años en companias de Seguro.Como especialista en
                            Administracion
                            de Riesgo Financieros</p>
                    </div>
                    <div class="persona">
                        <img src="img/persona1.jpeg" alt="gerente"/>
                        <h5>Gonzalo Castañuela</h5>
                        <h6>Vicepresidente, Director de Negocios</h6>
                        <p class="parrafo">Licenciado en Administracion de Empresas.Más de dos décadas de experiencia en diferentes
                            asef¿guradoras nacionales e internacionales.formacion especifica en diferentes entidades
                            den
                            Analisis de Riesgo Crediticio.</p>
                    </div>
                    <div class="persona">
                        <img src="img/persona3.jpeg" alt="gerente"/>
                        <h5>Candela Depetris</h5>
                        <h6>Directora de Administracion</h6>
                        <p class="parrafo">Contadora Pública Nacional de la Univerdiad Nac. De La Plata.Master en Direccion
                            Bancaria(Univ. del CEMA).Más de una década de experiencia en el sector de
                            finanzas.Gerente
                            de Auditoria interna de un importante banco internacional para las sucursales de
                            Argentina y
                            Chile</p>
                    </div>
                </div>

            </div>
        </div>  
        </main>
    ); 
}
export default Nosotros;