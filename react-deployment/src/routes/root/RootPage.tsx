export default function RootPage() {
  return (
    <section className="container mx-auto max-7xl mt-18 border h-full ">
      <div>
        {/* list of doings */}
        <div className="p-2 space-y-2 archivo-black-regular">
          <h1 className="edu-nsw-act-cursive-font text-3xl ">Deploying</h1>
          {/* details */}
          <div className="px-4">
            <p className=" text-4xl tracking-tighter uppercase text-extralight  ">
              Deploying for the first time
            </p>
            <div className="text-9xl font-light flex items-center">
              <span className="text-6xl">~</span>
              <p>hkirat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
