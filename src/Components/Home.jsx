import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css";
import logo from '../logo.png';

const Home =()=>{
    return (
        <header className='Home'>
            <img src={logo} alt="logo" />
            <h1>BIENVENID@S</h1>
            <h3>al espacio donde la <span>transmisión</span> de <span>saberes</span> y la <span>empatía</span> convergen</h3>
        </header>
    )
}

export default Home;