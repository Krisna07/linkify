import Link from "next/link";
import Button from "../../../components/Global_components/Button";

export default function Contact() {
  const issues = [
    "Adding removing links",
    "Billings and plans",
    "Connection trouble",
    "Notifications",
    "Login issue",
  ];
  return (
    <section className=" py-12 relative grid  gap-4 bg-white ">
      <div className="w-full  h-[600px] grid place-items-center mb-16 relative bg-gradient-to-t from-[#076585] to-[#fff">
        <div className="laptop:w-[600px] text-center grid gap-4 p-4 place-items-center text-dark">
          <h2 className="text-4xl font-bold animate-slidein500">Contact Us</h2>
          <p className="font-semibold animate-slidein300">
            We appreciate your interest in reaching out to us. Our team is
            dedicated to providing assistance and addressing any inquiries you
            may have. You can get in touch with us through the contact details
            provided below or by submitting the contact form.
          </p>
          <Link href="/about">
            <Button
              children={"Learn more"}
              variant={"default"}
              className="w-fit"
              size={"sm"}
              icon={true}
            />
          </Link>
        </div>
      </div>
      <div className="grid place-items-center w-full ">
        <div className="grid laptop:grid-cols-2 place-items-center  text-dark  ">
          <div className="laptop:w-[600px] w-[90%]   shadow-bs bg-silver rounded p-8 -top-[200px] relative">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-4">
              We'd love to hear from you. Send us a message and we'll get back
              to you as soon as possible.
            </p>
            <form className=" grid gap-4">
              <h3 className="text-xl font-semibold mb-4">Select topics</h3>
              <div className="flex flex-wrap gap-4 items-center">
                {issues.map((issue) => (
                  <div
                    className=" w-fit p-2 px-4 bg-gray-200 rounded-full shadow hover:shadow-bs font-semibold text-sm flex items-center gap-2"
                    key={issue}
                  >
                    {issue}{" "}
                  </div>
                ))}
              </div>

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
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>

              <Button
                children={"Submit"}
                variant={"default"}
                size={"default"}
                icon={false}
              />
            </form>
          </div>
          <div className="relative top-0 z-[5] laptop:flex hidden">
            <img
              src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-3147.jpg?w=826&t=st=1684905058~exp=1684905658~hmac=480349469f57add4648619a45b58d6470457f9f984d6ae9b4fdafaa8b8cff344"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
