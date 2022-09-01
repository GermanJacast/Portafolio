import '../style/home.css'
import About from './About';
import Jobs from './Jobs';
import Skills from './Skills';
import Contact from './Contact';
import Logo from '../img/Logo.png'
import {  NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react';

export const Home = () => {
  // const [show, setShow] = useState(false);
  const elementRef = useRef();
  const elementRefOne = useRef();
  const elementRefTwo = useRef();
  const elementRefThree = useRef();

  useEffect(() =>{
    const change = (entries) => {
      entries.forEach((entrie) =>{
        if(entrie.isIntersecting){
          entrie.target.className = 'one'
          // console.log(entrie.target.classList[1] === 'blk')
          // setShow(true);
          observer.disconnect();
        }
        // else{
        //   // setShow(false);
        //   entrie.target.className = 'zero'
        // }
      });
    };
    let options = {
      root: null,
      rootMargin: '200px 0px 600px 0px',
      threshold: 1.0
    };
    const observer = new IntersectionObserver(change, options);
    observer.observe(elementRef.current);
    observer.observe(elementRefOne.current);
    observer.observe(elementRefTwo.current);
    observer.observe(elementRefThree.current);

    return () => {
      observer.disconnect();
    };
  });

  // 
  // Scroll direction (up/down)
  const [scrollDirection, setScrollDirection] = useState(null);
  useEffect(() => {
      let lastScrollY = window.pageYOffset;
      // run on scroll
      const updateScrollDirection = () => {
          const scrollY = window.pageYOffset;
          const direction = scrollY > lastScrollY ? "down" : "up";
          if (direction !== scrollDirection) {
            setScrollDirection(direction);
          }
          lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // listener run on scroll
      return () => {
          window.removeEventListener("scroll", updateScrollDirection); // clean up (2)
      }
  }); 
  // ,[scrollDirection] // run when scroll direction changess
  // console.log(scrollDirection);
  
  // Scroll up / down
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const scrollDown = () => {
    // window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };
    
  // Scroll height (later use in class 'none')
  const [scrollPageY, setScrollPageY] = useState(null);
  useEffect(() => {
      // run on scroll
      const updateScrollY = () => {
          const scrollY = window.pageYOffset;
          setScrollPageY(scrollY);
      };
      window.addEventListener("scroll", updateScrollY); // listener run on scroll
      return () => {
        window.removeEventListener("scroll", updateScrollY); // clean up (2)
    }
  }); 

    return (
    <div>
      <span className='tag-up-body' />
      <span className='tag-up-html' />
      <div className='container-home'>
        <div className='logo'>
          <img src={Logo} />
        </div>
        <div className='title'>
          <h1>
            <span>H</span>
            <span>o</span>
            <span>l</span>
            <span>a</span>
            <span>,</span>
            <br/>
            <span>S</span>
            <span>o</span>
            <span>y</span>
            <span>&nbsp;</span>
            <span>J</span>
            <span>a</span>
            <span>c</span>
            <span>a</span>
            <span>s</span>
            <span>t</span>
            <br/>
            <span>W</span>
            <span>e</span>
            <span>b</span>
            <span>&nbsp;</span>
            <span>D</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </h1>
          <p>Front - End Developer</p>
          <div className='btn-contact'>
            <NavLink to='/contact'>Contacto</NavLink>
          </div>
        </div>
        <div className='arrow'>
            <span />
        </div>
      </div>
      <div className={`arrow-scroll ${scrollPageY > 500 ? '' : 'none'}`.trimEnd()}>
        <i onClick={scrollDirection === "down" ? scrollDown : scrollUp}>
          < MdOutlineKeyboardArrowDown className={`arrow-icon ${scrollDirection === 'up' ? 'icon-rotate' : ''}`}/>
        </i>
      </div>

      {/* About */}
      <hr />
      <div ref={elementRef} className='zero'>
        <About />
      </div>
      {/* Jobs */}
      <hr />
      <div className='blk'>
        <div ref={elementRefOne} className='zero' >
          <Jobs />
        </div>
      </div>
      {/* Skills */}
      <hr />
      <div ref={elementRefTwo} className='zero'>
        <Skills />
      </div>
      {/* Contact */}
      <hr />
      <div className='blk'>
        <div ref={elementRefThree} className='zero'>
          <Contact />
        </div>
      </div>

      <div className='container-tags'>
        <div className='tags'>
          <span className='tag-body' />
          <span className='tag-html' />
        </div>
      </div>
  </div>
  )
};


export default Home;