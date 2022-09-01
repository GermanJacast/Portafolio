import '../style/modals.css'

export const Modals = ({ children, estado, cambiarEstado, titulo='N.N', descr, link='#' }) => {
    
    return (
    <>
        {estado &&
            <div className='overlay' onClick={() => cambiarEstado(false)}>
                <div className="modals">
                    <div className="modal-content">
                        {children}
                        <div className='modal-text'>
                            <h3>{titulo}</h3>
                            <p>{descr}</p>
                        </div>
                    </div>
                    <div className='modal-link'>
                        <a href={link} target='_blank'>Ver más</a>
                        <i onClick={() => cambiarEstado(false)}>X</i>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default Modals;
