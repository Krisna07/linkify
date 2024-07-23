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
    <div className="journeyContainer laptop:w-[1100px] flex items-center gap-8  p-4 ">
      <div className="w-full grid gap-6">
        <div className="grid gap-2">
          <h3 className="text-xl font-semibold">Our stories</h3>
          <h2 className="text-2xl font-bold"></h2>
        </div>
        <p className="md:w-5/6 font-[500]"></p>
        <Button
          children={"Read"}
          icon={true}
          variant={"default"}
          size={"sm"}
          className={"w-fit"}
        />
      </div>
      <div className="hidden laptop:block">
        <div className="w-[400px] animate-text shadow-lg overflow-hidden h-[400px]  bg-gradient-to-br from-zinc-700 via-slate-800 to-slate-900 rounded-md relative animate">
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
      </div>
    </div>
  );
}
