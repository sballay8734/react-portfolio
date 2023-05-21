import "./contact.css"
import { HiOutlineMail } from "react-icons/hi"
import { AiOutlinePhone } from "react-icons/ai"
import { FaCheck } from "react-icons/fa"
import { Oval } from "react-loading-icons"
import { useInView } from "react-intersection-observer"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

function Contact() {
  const { ref, inView } = useInView()
  const form = useRef()
  const [messageSent, setMessageSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function sendEmail(e) {
    e.preventDefault()
    setLoading(true)
    setMessageSent(true)
    let messageField = document.querySelector(".input__message")
    let emailField = document.querySelector(".input__email")
    let nameField = document.querySelector(".input__name")

    emailjs
      .sendForm(
        "service_vbiq6kw",
        "template_esp1thd",
        ".contact__form",
        "fvsYIQxyCsB8x_27f"
      )
      .then((result) => {
        console.log(result)
        setLoading(false)

        messageField.value = ""
        emailField.value = ""
        nameField.value = ""
        setTimeout(() => setMessageSent(false), 5000)
      })
      .catch((error) => {
        console.log(error.text)
      })
  }

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
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <input
              className="input input__name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              className="input input__email"
              type="email"
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
            <div className="button__message">
              <button type="submit" className="form__button">
                Send Message
              </button>
              {messageSent ? (
                <p className="form__success-message">
                  {loading ? (
                    <Oval stroke="#000000" height="30" width="30" />
                  ) : (
                    <span className="form__success-message">
                      {messageSent && (
                        <span className="form__success-message">
                          <FaCheck /> Message received!
                        </span>
                      )}
                    </span>
                  )}
                </p>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
