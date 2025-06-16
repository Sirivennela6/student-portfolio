import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaInstagram, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        alert('Message Sent!');
        form.current.reset();
      },
      () => {
        alert('Error Sending Message');
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-purple-900 to-black text-white flex flex-col items-center p-10">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-white/20 placeholder-white text-white outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-white/20 placeholder-white text-white outline-none focus:ring-2 focus:ring-purple-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded bg-white/20 placeholder-white text-white outline-none focus:ring-2 focus:ring-purple-400 h-32 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-purple-600 transition font-semibold"
        >
          Send
        </button>
      </form>

      <div className="flex justify-center gap-6 mt-6 text-2xl">
        <a
          href="mailto:sirivennela6166@gmail.com"
          className="hover:text-red-400 transition"
          aria-label="Gmail"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/SiriVennela6166"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/Siri.Vennela_6"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="tel:+917386477696"
          className="hover:text-green-400 transition"
          aria-label="Phone"
        >
          <FaPhone />
        </a>
      </div>
    </div>
  );
};

export default Contact;
