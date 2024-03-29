import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import {navLinks } from '../constants'
import {logo, menu, close} from '../assets'

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) {
        setNavbarBackground('#042140');
      } else {
        setNavbarBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
      style={{ backgroundColor: navbarBackground }}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={()=>{
          setActive("");
          window.scrollTo(0,0)
        }} >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain '/>
          <p className='text-white text-[18px] cursor-pointer flex font-bold'>Leeuw</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key={link.id} className={`${active === link.title? 'text-white': 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className={`sm:hidden flex flex-1 justify-end items-center`}>
            <img src={toggle? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=> setToggle(!toggle)} />
        </div>

        <div className={`${!toggle ? 'hidden': 'flex'} top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl p-6 black-gradient absolute`}>
        <ul className='list-none flex items-start flex-col gap-4'>
          {navLinks.map((link)=>(
            <li key={link.id} className={`${active === link.title? 'text-white': 'text-secondary'}  font-poppins font-medium cursor-pointer text-[16px]`} onClick={()=>{
              setToggle(!toggle)
              setActive(link.title)
            }}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar