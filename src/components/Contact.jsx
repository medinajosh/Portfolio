import React from "react";

const Contact = React.forwardRef((props, ref) => (
    <section ref={ref} className="contact h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-20 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-5xl font-extrabold text-blue-500 mb-6 animate__animated animate__fadeIn">
        Contact Me
      </h2>
      <p className="text-lg leading-relaxed text-gray-300 mb-12 animate__animated animate__fadeIn animate__delay-1s">
        Interested in collaborating? Feel free to reach out to me. Let's build something amazing together!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzQZSjdFwBbhNmCnWmtSXvLbDBKm"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium shadow-xl transition-transform transform hover:scale-105 flex items-center justify-center space-x-3"
        >
          <span className="text-lg">Email Me</span>
        </a>
        <a
          href="https://github.com/medinajosh/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium shadow-xl transition-transform transform hover:scale-105 flex items-center justify-center space-x-3"
        >
          <span className="text-lg">GitHub</span>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100091386252261"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-full font-medium shadow-xl transition-transform transform hover:scale-105 flex items-center justify-center space-x-3"
        >
          <span className="text-lg">Facebook</span>
        </a>
        <a
          href="https://www.instagram.com/kyosh_u/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-medium shadow-xl transition-transform transform hover:scale-105 flex items-center justify-center space-x-3"
        >
          <span className="text-lg">Instagram</span>
        </a>
        <a
          href="t.me/kyoshouh"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium shadow-xl transition-transform transform hover:scale-105 flex items-center justify-center space-x-3"
        >
          <span className="text-lg">Telegram</span>
        </a>
      </div>
    </div>
  </section>
));

export default Contact;
