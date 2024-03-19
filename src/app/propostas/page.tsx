const Page = () => {
    return (
        <div className="bg-propostas-backgound bg-cover h-screen">
            <div className="bg-black bg-opacity-45 h-screen flex flex-col px-16">
                <h1 className="font-bold text-6xl text-center uppercase my-4 text-white">Propostas</h1>
                <div className="bg-yellow-100 flex flex-col justify-between rounded-md p-4 font-bold bg-opacity-70 text-center">
                    <h2>Titulo</h2>
                    <p>descrição</p>
                    <button className="bg-white text-black py-2 px-4 rounded-lg font-bold hover:bg-black hover:text-white">
                        Saiba mais
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Page;