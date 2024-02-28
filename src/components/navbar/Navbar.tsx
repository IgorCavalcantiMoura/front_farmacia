import { FunnelSimple, House, Pill, PlusCircle} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <div className="w-full bg-cyan-500 text-white flex justify-center py-4">
                <div className="container flex justify-between text-lg">
                    <div className="text-2xl font-bold uppercasse flex items-center gap-1"><Pill size={32} />FARMACIA</div>
                    

                        <div className="flex gap-5">
                            <Link to='/home' className="hover:scale-110 flex items-center gap-1"><House size={16} />Home</Link>
                            <Link to='/categorias' className="hover:scale-110 flex items-center gap-1"><FunnelSimple size={16} />Categorias</Link>
                            <Link to='/cadastroCategoria' className="hover:scale-110 flex items-center gap-1"><PlusCircle size={16} />Nova Categoria</Link>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;