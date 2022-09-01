import '../style/jobs.css'
import Modals from './Modals';
import { useState } from 'react';

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
                        <img src='https://picsum.photos/300/200' />
                        <p>X</p>
                    </div>
                </div>
                <div className='border-frame'>
                    <div 
                    className='button-modals'
                    onClick={() => changeStateModal1(!stateModal1)}
                    >
                        <img src='https://picsum.photos/300/200' />
                        <p>Y</p>
                    </div> 
                </div>
                <div className='border-frame'>
                    <div 
                    className='button-modals'
                    onClick={() => changeStateModal2(!stateModal2)}
                    >
                        <img src='https://picsum.photos/300/200' />
                        <p>Z</p>
                    </div> 
                </div> 
            </div>
            <div className='container-modals'>
                <Modals
                    estado={stateModal} 
                    cambiarEstado={changeStateModal}
                    titulo='Hola'
                    descr='Lugar X'
                    link=''
                >
                    <img src='https://picsum.photos/200/200'/>
                </Modals>
                <Modals
                    estado={stateModal1} 
                    cambiarEstado={changeStateModal1}
                    titulo='Hola'
                    descr='Lugar Y'
                    link=''
                >
                    <img src='https://picsum.photos/200/200'/>

                </Modals>
                <Modals
                    estado={stateModal2} 
                    cambiarEstado={changeStateModal2}
                    titulo='Hola'
                    descr='Lugar Z'
                    link=''
                >   
                    <img src='https://picsum.photos/200/200'/>
                </Modals>
            </div>
        </div>
</section>
  )
}

export default Jobs;
