import "./contact.css"
import { HiOutlineMail } from "react-icons/hi"
import { AiOutlinePhone } from "react-icons/ai"
import { useInView } from "react-intersection-observer"

function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contact">
      <div
        ref={ref}
        className={`contact__section-wrapper ${inView ? "animate" : ""}`}
      >
        <h5 className="contact__header-5">Get In Touch</h5>
        <h2 className="contact__header-2">Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <span className="contact__option-icon">{<HiOutlineMail />}</span>
              <h4>Email</h4>
              <small>shawnballay1@gmail.com</small>
              <a
                href="mailto:shawnballay1@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send A Message
              </a>
            </article>
            <article className="contact__option">
              <span className="contact__option-icon">{<AiOutlinePhone />}</span>
              <h4>Phone</h4>
              <small>Text messages preferred</small>
              <p>252.751.1276</p>
            </article>
          </div>
          <form action="" className="contact__form">
            <input
              className="input input__name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              className="input input__email"
              type="text"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="input input__message"
              type="text"
              name="message"
              placeholder="Your Message"
              maxLength={1000}
              required
            ></textarea>
            <button type="submit" className="form__button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
