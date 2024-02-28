import ListaCategoria from "../../components/categoria/listaCategoria/ListaCategoria";

function Home() {
    return (
        <>
        <div className="bg-cyan-500 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Aqui você encontra tudo para a sua saúde</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-cyan-500 py-2 px-4'>Ver Categorias</button>
              </div>
            </div>
  
            <div className="flex justify-center py-4">
              <img src="https://github.com/IgorCavalcantiMoura/Procenge-Sistema-Escola/blob/main/Farmacia.png?raw=true" alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      <ListaCategoria/>
      </>
    );
}

export default Home;