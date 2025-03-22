import './Footer.css'
import { menu } from '../../data'
import { Link } from 'react-scroll'
import SocialHandles from '../../ui/SocialHandles'

const Footer = () => {
  return (
    <footer>
      <div className='section__wrapper'>
        <ul className='flex__center nav'>
          {menu.map((list, index) => (
            <Link
              to={list.name.toLowerCase()}
              smooth={true}
              duration={500}
              className='nav__item'
              key={index}
            >
              {list.name}
            </Link>
          ))}
        </ul>

        <SocialHandles />

        <div className='copyright'>
          <h3>Copyright &copy; All right reserved - | 2025</h3>
          <p className='text__muted'>Built with love by Awadhesh Gupta</p>
        </div>

        <div className='base__logo'>
          <h1 className='full__name shine'>Awadhesh Gupta</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer
