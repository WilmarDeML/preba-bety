import { StyledDiv } from "./styles"
import avioneta from '../../img/avioneta.png'

const Despegando = () => {
    // const id = match.params.id
    return (
   
        <StyledDiv>
            <div className='divIzquierdo'>
                <img src={avioneta} alt='Avioneta' />
                <div className='divTexto'>
                    <h3>Despegando ando</h3>
                    <p>
                        ¡Alistandote para despegar! Estás en un momento de aprendizaje
                        continuo, por lo que estás validando tu idea de negocio y atraer o
                        retener a tus primeros clientes. Estás buscando la estabilidad
                        financiera y has tenido que invertir esfuerzo y dinero pero no has visto
                        ganancias significativas. No has comenzado a pagar impuestos y 
                        sabemos que legalmente tienes muchas dudas.
                    </p>
                    <p>
                        Con el <strong>Paquete Starter</strong> te quiaré en la planificación de tu empresa en
                        el área financiera y tributaria para que logres llevar a tu
                        emprendimiento al siguiente nivel en poco timpo ¡Quiero ser parte
                        de tu crecimiento, vamos con toda!
                    </p>
                    <div id='divBotones'>
                        <button className='boton1'>
                            Continuar
                        </button>
                        <button>
                            Descargar PDF
                        </button>
                    </div>
                </div>
            </div>
            <div className='divDerecho'>
                <h2>Hola otra vez...</h2>
            </div>
        </StyledDiv>
     
    )
}

export default Despegando