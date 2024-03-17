import { BuscarVideos } from "../componentes/buscar-videos"
import { EnsenarOAprender } from "../ensenar-o-aprender"
export function UsuarioBienvenida(){
    return(
        <div className="container-fluid mb-3">
            {/* Pagina usuario bienvenida */}
            <div className="row">
                <div className="col-3">
                    <EnsenarOAprender />
                </div>
                <div className="col-9">
                    <BuscarVideos/>
                </div>
            </div>
        </div>
    )
}