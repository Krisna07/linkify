import Button from "../../../components/Global_components/Button";

export default function Journey() {
  const codeSnippet = `
  function combineLinks(links) {
     const combinedLinks = links.join(", ");
    return combinedLinks;
  }
  
  const links = ["https://example.com", "https://google.com", "https://github.com"];
  const combined = combineLinks(links);
  
  console.log(combined);
`;
  return (
    <div className="journeyContainer w-full min-h-[80vh] flex items-center justify-center gap-8  p-4 bg-gradient-to-tr from-accent via-tahiti to-bermuda animate-bg ">
      <div className="w-full   grid place-items-center gap-6">
        <div className="grid gap-2 text-center">
          <h3 className="text-3xl font-semibold">Our Journey</h3>
          <h2 className="text-6xl font-semibold text-primary">
            From Humble Beginnings to Innovation
          </h2>
        </div>
        <p className="md:w-5/6 font-[500] text-center">
          Discover how our passion for technology and innovation led us to{" "}
          <br />
          create solutions that transform lives.
        </p>
        <Button
          children={"Read Our Story"}
          icon={true}
          variant={"default"}
          size={"sm"}
          className={"w-fit"}
        />
      </div>
      {/* <div className="hidden laptop:block">
        <div className="w-[400px] animate-text shadow-lg overflow-hidden h-[400px]  bg-gradient-to-br from-dark to-dark rounded-md relative animate">
          <div className="w-full bg-gray-600 h-fit flex overflow-hidden">
            <div className="flex gap-1 p-2 ">
              <div className="w-4 h-4 bg-white rounded-full "></div>
              <div className="w-4 h-4 bg-white rounded-full "></div>
              <div className="w-4 h-4 bg-white rounded-full "></div>
            </div>
            <div className="w-fit px-2 text-sm text-white bg-gray-900 relative top-2 rounded-md py-[2px]">
              index.js
            </div>
          </div>
          <div className="text-white"> </div>
        </div>
      </div> */}
    </div>
  );
}
