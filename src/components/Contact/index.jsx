import './Contact.css'
import Pyramid from '../../ui/Pyramid'
import { contactInfo } from '../../data'
import SocialHandles from '../../ui/SocialHandles'
import { BsFillSendFill } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <div className='section__wrapper'>
        <div className='pyramid__container'>
          <Pyramid />
        </div>

        <div className='contact__group'>
          <div>
            <h3 className='title'>
              Let's talk on your <span className='shine'>create project </span>
              together
            </h3>
            <div className='flex contact__options'>
              {contactInfo.map((contact, index) => (
                <article className='flex option' key={index}>
                  <div className='contact__icon'>
                    <img src={contact.icon} alt='' />
                  </div>

                  <div className='flex contact__content'>
                    <div>
                      <h3 className='name'>{contact.name}</h3>
                      <p className='text__muted line__clamp__1 value'>
                        {contact.value}
                      </p>
                    </div>

                    <a
                      href={contact.link}
                      target='_blank'
                      className='flex__center btn'
                    >
                      <span className='btn__shine text'>Message</span>
                      <div
                        className='flex__center icon'
                        style={{ background: contact.color }}
                      >
                        {contact.btnIcon}
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <SocialHandles />
          </div>

          <form>
            <input
              type='text'
              placeholder='Your full name'
              name='name'
              required
            />
            <input
              type='email'
              placeholder='Your email'
              name='email'
              required
            />
            <textarea
              name='message'
              rows={7}
              placeholder='Your message'
            ></textarea>
            <button type='button' className='btn flex__center submit__btn'>
              <div className='icon'>
                <BsFillSendFill />
              </div>
              <span>Send Now</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
