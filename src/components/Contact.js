import '../style/contact.css'
import { AiOutlineGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

export const Contact = () => {
  return (
    <div className='container-contact'>
      <div className='text'>
        <h2>Contacto</h2>
        <p>Estoy interesado en todo tipo de oportunidades, por ello si tienes algo en
           interesante en mente no dudes en ponerte en contacto conmigo.</p>
      </div>
      <div className='links'>
        <a href='https://github.com/GermanJacast' target='_blank' rel='noopener noreferrer'>
          <i><AiOutlineGithub className='icon git' /></i>
        </a>
        <a href='https://www.linkedin.com/in/german-astudillo-jacamo/' target='_blank' rel='noopener noreferrer'>
          <i><AiFillLinkedin className='icon linkedin' /></i>
        </a>
        <a href='mailto:german.jacast@outlook.cl?subject=Interesado en crear algo'>
          <i><AiFillMail className='icon mail' /></i>
        </a>
      </div>
    </div>
  )
}

export default Contact;