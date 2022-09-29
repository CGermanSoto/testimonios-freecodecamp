import React from 'react';
import '../styles/Testimonio.css'

function Testimonio(props){
    return(
        <div className='contenedor-testimonio'>
            <img 
            className='imagen-testimonio'
            src={require(`../img/testimonio-gato-${props.imagen}.jpg`)}
            alt='foto de gatito'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testomonio'><strong>{props.nombre} en {props.pais}</strong></p>
                <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
}

export default Testimonio;