import React, {useEffect, useState, useContext} from 'react';
import { useLocation, Link } from 'react-router-dom';
import loginContext from '../../context/autentificacion/loginContext';
import './navbar.css'


const Navbar = () => {
    
    const LoginContext = useContext(loginContext); 
    const { eliminarUsario } = LoginContext;
    

    const [lugarInicial, cambiolugar] = useState(true);
    const [estilo, setEstilo] = useState(null)

    // cambio de posicion del app
    let location = useLocation();
    useEffect( () => { 
        if(location.pathname === '/'){  
            cambiolugar(true);
        }else { 
            cambiolugar(false)
        }
        if(location.pathname === '/home') {
            setEstilo('hom');
        }else if(location.pathname === '/transfer') {
            setEstilo('trans');
        }

    }, [location]);

    const dellUsario = () => { 
        console.log('dos')
        eliminarUsario()
    }
    return (  
        <div >
            { lugarInicial 
            ? 
            <div className="nav-conteiner">
                
                    <p className="letra-nav">Company</p >    
            </div> 
            :
            <div className="nav-conteiner">
                <div className="links">
                    <p className="letra-nav">Company</p >   
                    <Link to='/home' className={estilo === "hom" ? "hom" : "letra-nav"}>Home</Link>
                    <Link to="/transfer" className={estilo === "trans" ? "trans" : "letra-nav"}>Transfer</Link>     
                </div>
                <div>
                    <Link to='/'
                        className="letra-nav"
                        onClick={dellUsario} >Log Out</Link>
                </div>
            </div>     
            }   
            
        </div>
    );
}
 
export default Navbar;


