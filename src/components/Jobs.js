import '../style/jobs.css'
import Modals from './Modals';
import { useState } from 'react';
import NpNg from '../img/Logo-NpNg.png';
import CapturaNpNg from '../img/capturaNpNg.png';

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
                        <img src='https://picsum.photos/300/200' alt='' title='' />
                        <p>Y</p>
                    </div> 
                </div>
                <div className='border-frame'>
                    <div 
                    className='button-modals'
                    onClick={() => changeStateModal2(!stateModal2)}
                    >
                        <img src='https://picsum.photos/300/200' alt='' title='' />
                        <p>Z</p>
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
                            importante y necesaria de acuerdo al cliente'
                    link='https://germanjacast.github.io/NpNg/'
                >
                    <img src={CapturaNpNg} alt='Captura realizada al sitio web de NpNg' title='Captura de NpNg' />
                </Modals>
                <Modals
                    estado={stateModal1} 
                    cambiarEstado={changeStateModal1}
                    titulo='Hola'
                    descr='Lugar Y'
                    link=''
                >
                    <img src='https://picsum.photos/200/200' alt='' title='' />

                </Modals>
                <Modals
                    estado={stateModal2} 
                    cambiarEstado={changeStateModal2}
                    titulo='Hola'
                    descr='Lugar Z'
                    link=''
                >   
                    <img src='https://picsum.photos/200/200' alt='' title='' />
                </Modals>
            </div>
        </div>
</section>
  )
}

export default Jobs;
