import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css";

const Nosotros =()=>{
    return (
        <header className='Nosotros'>
            <div className="Izq">
                <h1>SOBRE NOSOTROS</h1>
                <h5>En ContechMe  brindamos un entorno seguro para el flujo de conocimiento entre el aprendizaje y a enseñanza. </h5>
                <a href="Hola">🙋‍♀️</a>
            </div>
            
            <div className='Der'>
                <h2>💡 Comparte conocimiento</h2>
                <ol>
                    <li>Colabora en vivo.</li>
                    <li>Transmite tu sabiduría.</li>
                    <li>Refuerza tu desarrollo personal.</li>
                </ol>
                <h2>📌 Incorpora saberes</h2>
                <ol>
                    <li>Participa de tutorias.</li>
                    <li>Descubre temas nuevos.</li>
                    <li>Desarrolla autonomía.</li>
                </ol>
                <h2>💻 Cómo funciona?</h2>
                <ol>
                    <li>Tod@s pueden enseñar, tod@s pueden aprender. Elige un rol y divertete.</li>
                </ol>
            </div>
        </header>
    )
}

export default Nosotros;