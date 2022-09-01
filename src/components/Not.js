import '../style/not.css'
import { NavLink } from 'react-router-dom';

export const Not = () => {
  return (
    <div className='container-404'>
      <div className='container-cyber'>
      <h2 className='layers glitch' data-text="404"><span>404</span></h2>
      </div>
      <div className='container-cyber'>
        <p>You have lost your way</p>
        <NavLink to='/'><span>|Return to home|</span></NavLink>
      </div>
    </div>

  )
};

export default Not;