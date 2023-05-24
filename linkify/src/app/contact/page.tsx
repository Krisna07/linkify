export default function Contact() {
  return (
    <section className="bg-white py-12 relative top-[56px]">
      <div className="md:w-[80%] mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-4">
              We'd love to hear from you. Send us a message and we'll get back
              to you as soon as possible.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              You can also reach out to us using the contact information below:
            </p>
            <ul className="list-disc ml-6">
              <li>Email: info@example.com</li>
              <li>Phone: +1 123 456 7890</li>
              <li>Address: 123 Main St, City, State, ZIP</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
