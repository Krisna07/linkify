import Button from "@/app/Landingpage/Components/ui/Button";

export default function Journey() {
  return (
    <div className="journeyContainer w-5/6 flex items-center gap-8 ">
      <div className="w-2/4 grid gap-8">
        <h3 className="text-xl font-semibold">Our stories</h3>
        <h2 className="text-2xl font-bold">Humble but not subtle</h2>
        <p className="font-[500]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          error ab blanditiis labore ea possimus nostrum doloremque sit et quas
          ullam nisi, quisquam iste odit soluta. Suscipit minima cumque
          possimus.
        </p>
        <Button
          children={"Read"}
          icon={true}
          variant={"default"}
          className={"w-fit"}
        />
      </div>
      <div>
        <div className="w-[400px] animate-text shadow-lg overflow-hidden h-[400px] bg-gradient-to-br from-zinc-700 via-slate-800 to-slate-900 rounded-full relative animate grid place-items-center text-white text-3xl font-bold">
          WE
          <div className="smallcircle w-[100px] h-[100px] absolute bg-white rounded-full top-[200px] right-0 animate-ping "></div>
        </div>
      </div>
    </div>
  );
}
