import '../style/jobs.css'
import Modals from './Modals';
import { useState } from 'react';
import NpNg from '../img/Logo-NpNg.png';
import Cloudy from '../img/Logo-Cloudy.png';
import CapturaNpNg from '../img/capturaNpNg.png';
import CapturaCloudy from '../img/capturaCloudy.png';

export const Jobs = () => {
  const [stateModal, changeStateModal] = useState(false);
  const [stateModal1, changeStateModal1] = useState(false);
  const [stateModal2, changeStateModal2] = useState(false);
  return (
    <section>
        <div className='container-jobs'>
            <div className='text'>
            <h2>Algunos trabajos</h2>
            </div>
            <div className='container-buttons-modals'>
                <div className='border-frame'>
                    <div 
                    className='button-modals'
                    onClick={() => changeStateModal(!stateModal)}
                    >
                        <img src={NpNg} className='npng' alt='Logo del sitio NpNg' title='Logo de NpNg' />
                        <p>NpNg</p>
                    </div>
                </div>
                <div className='border-frame'>
                    <div 
                    className='button-modals'
                    onClick={() => changeStateModal1(!stateModal1)}
                    >
                        <img src={Cloudy} className='cloudy' alt='Logo del sitio Cloudy' title='Logo de Cloudy' />
                        <p>Cloudy</p>
                    </div> 
                </div>
                <div className='border-frame'>
                    <div 
                    className='button-modals'
                    onClick={() => changeStateModal2(!stateModal2)}
                    >
                        <img src='https://picsum.photos/300/200' alt='Logo del sitio Pets' title='Logo de Pets' />
                        <p>BroPets</p>
                    </div> 
                </div> 
            </div>
            <div className='container-modals'>
                <Modals
                    estado={stateModal} 
                    cambiarEstado={changeStateModal}
                    titulo='No Pain No Gain'
                    descr='Sitio orientado al gimnasio NpNg, en donde se enfoca 
                            una sencilla usabilidad para el usuario, pero sin dejar de mostrar la informacion
                            importante y necesaria de acuerdo al cliente.'
                    link='https://germanjacast.github.io/NpNg/'
                >
                    <img src={CapturaNpNg} alt='Captura realizada al sitio web de NpNg' title='Captura de NpNg' />
                </Modals>
                <Modals
                    estado={stateModal1} 
                    cambiarEstado={changeStateModal1}
                    titulo='Cloudy'
                    descr='Sitio orientado a mostrar toda la información relacionada con el clima. El objetivo de Cloudy es que
                            todos tengan acceso a los datos del clima de su ubicacion de manera precisa, y sin olvidar la adaptabilidad para
                            los diferentes dispositivos.'
                    link='https://germanjacast.github.io/Cloudy/'
                >
                    <img src={CapturaCloudy} alt='Captura realizada al sitio web de Cloudy' title='Captura de Cloudy' />

                </Modals>
                <Modals
                    estado={stateModal2} 
                    cambiarEstado={changeStateModal2}
                    titulo='BroPets'
                    descr='Sitio orientado a la venta de productos para la alimentación y el cuidado de las 
                            mascotas, así como también cumplir la función de unir diferentes centros de adopción
                            para que toda la información esté en un solo lugar. De igual forma, se dedica un 
                            apartado para aquellos que están desaparecidos.'
                    link='https://germanjacast.github.io/BroPets/'
                >   
                    <img src='https://picsum.photos/200/200' alt='Captura realizada al sitio web de Pets ' title='Captura de Pets' />
                </Modals>
            </div>
        </div>
</section>
  )
}

export default Jobs;
