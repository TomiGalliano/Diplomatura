const Home = (props) => {
    return (
        <main class="holder">
            <div class="principal" />
                <div class="imagenes">
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="img/garantia1.jpg" class="d-block w-100" alt="garantia" />
                            </div>
                            <div class="carousel-item">
                                <img src="img/garantia2.jpg" class="d-block w-100" alt="garantia" />
                            </div>
                            <div class="carousel-item">
                                <img src="img/garantia4.jpg" class="d-block w-100" alt="garantia" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
                <div class="contenedor2">
                    <h3 class="nosotros">Seguros de Caución</h3>
                    <p class="quienes">Pacífico Compañía de Seguros S.A. nace como aseguradora especialista en Garantías con
                        el
                        claro objetivo
                        de impulsar el crecimiento de nuestros clientes en las múltiples y diferentes industrias en donde
                        desarrollan sus actividades. Nuestros socios fundadores y el resto del staff cuentan con un
                        expertise de
                        más de 25 años en el mercado de seguros desempeñándose en compañías líderes de la industria.

                        En poco más de un año logramos posicionarnos dentro de las primeras 25 compañías del ramo (Ranking
                        al
                        31/3/19) sobre un total de 72 compañías que operaron, con una emisión de $ 32 millones en los
                        primeros
                        nueve meses del ejercicio en curso.

                        Evaluadora Latinoamericana, un Agente de Calificación de Riesgo con más de 25 años de trayectoria en
                        Latinoamérica, nos otorgó la calificación de riesgo “A” . La misma responde a un análisis exhaustivo
                        sobre nuestra fortaleza, nuestra solvencia y la capacidad de pago de siniestros en el largo plazo
                    </p>
                </div>
        </main>
    );
}
export default Home