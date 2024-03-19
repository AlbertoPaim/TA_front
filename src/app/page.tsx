import Header from "@/components/Header";

export default function Home() {

  return (

    <main className="flex h-screen w-screen flex-col" >
      <Header />
      <section className=" overflow-hidden flex bg-custom-background bg-no-repeat bg-center h-screen w-full" style={{ backgroundSize: '100% auto' }}>
        <div className="bg-black bg-opacity-70 h-screen w-full flex items-center justify-center flex-col">
          <h1 className="text-center mx-auto text-8xl text-white font-bold">TARCISIO ANDRADE</h1>
          <button className="bg-white text-black  py-4 px-8 rounded-lg font-bold text-2xl mt-8 hover:bg-black hover:text-white">
            Saiba mais
          </button>
        </div>

      </section>
    </main>
  );
}