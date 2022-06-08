import React, { useEffect, useState } from 'react'
//estilos
import '../styles/play.scss'
//iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const Play = ({ setInit }) => {

  const [playFrame, setPlayFrame] = useState(1);

  useEffect(() => {
    var timer = setInterval(() => {
        if(playFrame === 3){
          setPlayFrame(1);
        } else {
          setPlayFrame(playFrame + 1);
        }
    },5000);
    return () => clearInterval(timer);
  });

  return (
    <div className='play'>
      <div className={`animation frame${playFrame}`}>
        <FontAwesomeIcon icon={faChevronLeft} className='i1'/>
        <span>Dev by Gael García/</span>
        <p>ibera tus</p>
        <FontAwesomeIcon icon={faChevronRight} className='i2'/>
        <p>inanzas</p>
      </div>
      <div>
        <button onClick={() => setInit(true)}>Calcular</button>
      </div>
    </div>
  )
}
