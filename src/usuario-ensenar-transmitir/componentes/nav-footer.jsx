import '../../index.css';

export function NavFooter(){
    return(
        <div className='container'>
            <div className='d-flex justify-content-evenly'>
                <button className='col-3 btn btn-lg border-dark mr-2'>SOLICITAR UNIRSE</button> 
                <button className='col-3 btn btn-lg border-dark mr-2'>HERRAMIENTAS</button> 
                <button className='col-3 btn btn-lg border-dark'>APUNTES</button> 
            </div>
        </div>
    )
}