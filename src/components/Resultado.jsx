import React from 'react'
import styled from '@emotion/styled'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import PropTypes from 'prop-types'

const Mensaje= styled.p`
background-color: rgb(127,224,237);
margin-top:2rem;
padding:1rem;
text-align: center;
`;

const TextoCotizacion = styled.p`
color:#00838f;
padding:1rem;
text-transform: uppercase;
`;

const ResultadoCotizacion = styled.div`
text-align: center;
padding: 0.5rem;
border: 1px solid #25c6da;
background-color: rgb(127,224,237);
margin-top:1rem;
position:relative;
`;

const Resultado = ({cotizacion}) => {
  return(
      (cotizacion===0) ? <Mensaje>Eligue marca, año y tipo de seguro</Mensaje> : 
      (
        <ResultadoCotizacion>
            <TransitionGroup
            component="span"
            className="resultado"
            > 
                <CSSTransition
                classNames='resultado'
                key={cotizacion}
                timeout={{enter:1000,exit:1000}}
                >
                    <TextoCotizacion>El total es : $ <span>{cotizacion}</span> </TextoCotizacion>
                </CSSTransition>
            </TransitionGroup>

      
        </ResultadoCotizacion>
      )
  )
}
Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired
}

export default Resultado
