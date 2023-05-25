import Button from "../Landingpage/Components/ui/Button";

export default function Contact() {
  const issues = [
    "Adding removing links",
    "Billings and plans",
    "Connection trouble",
    "Notifications",
    "Login issue",
  ];
  return (
    <section className="bg-white py-12 relative grid  gap-4 ">
      <div className="w-full  h-[600px] grid place-items-center relative bg-gradient-to-t from-[#076585] to-[#fff">
        {" "}
        <div className="md:w-[600px] text-center grid gap-4 place-items-center">
          <h2 className="text-4xl font-bold ">Contact Us</h2>
          <p className="font-semibold">
            Thank you for your interest in contacting us. We're here to assist
            you and answer any questions you may have. Please feel free to reach
            out to us using the contact information below or by filling out the
            contact form.
          </p>
          <Button
            children={"Learn more"}
            variant={"default"}
            className="w-fit"
            icon={"true"}
          />
        </div>
      </div>
      <div className="grid place-items-center w-full ">
        <div className="grid md:grid-cols-2 place-items-center   ">
          <div className="md:w-[600px] w-[90%]  md:h-[600px] shadow-bs bg-white rounded p-8 -top-[200px] relative">
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
                    className=" w-fit p-2 px-4 bg-gray-200 rounded-full shadow hover:shadow-bs font-semibold text-sm"
                    key={issue}
                  >
                    {issue}
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

              <Button
                children={"Submit"}
                variant={"default"}
                className="grid place-items-center"
              />
            </form>
          </div>
          <div className="relative top-0 z-[5] md:flex hidden">
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
