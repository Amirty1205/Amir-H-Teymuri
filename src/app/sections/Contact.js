// src/components/sections/Contact.js
export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto"> {/* Added this container */}
        <h2 className="text-4xl font-bold mb-8 text-left">Contact Me</h2> {/* Changed to text-left */}

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="flex-1 space-y-4">
            <p className="text-lg">
              Feel free to reach out via email or connect with me on social media.
            </p>
            <p className="text-lg">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:amir.h.teymuri@gmail.com"
                className="text-greenLight hover:text-greenDark transition"
              >
                amir.h.teymuri@gmail.com
              </a>
            </p>
            <p className="text-lg">
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Amirty1205"
                target="_blank"
                rel="noopener noreferrer"
                className="text-greenLight hover:text-greenDark transition"
              >
                github.com/Amirty1205
              </a>
            </p>
            <p className="text-lg">
              <strong>Telegram:</strong>{" "}
              <a
                href="https://t.me/AmirHTeymuri"
              >
                @AmirHTeymuri
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form className="flex-1 flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greenLight"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greenLight"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greenLight"
            />
            <button
              type="submit"
              className="bg-greenLight hover:bg-greenDark text-white px-6 py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}