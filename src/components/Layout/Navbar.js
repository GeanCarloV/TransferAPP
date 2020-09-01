import React, {useEffect, useState} from 'react';
import { useLocation, Link } from 'react-router-dom';
import './navbar.css'


const Navbar = () => {
    const [lugarInicial, cambiolugar] = useState(true);
   
    // cambio de posicion del app
    let location = useLocation();
    useEffect( () => { 
        if(location.pathname === '/'){  
            cambiolugar(true);
        }else { 
            cambiolugar(false)
        }
    }, [location]);

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
                    <Link to='/home' className="letra-nav">Home</Link>
                    <Link to="/transfer" className="letra-nav">Transfer</Link>     
                </div>
                <div>
                    <Link to='/'className="letra-nav" >Log Out</Link>
                </div>
            </div>     
            }   
            
        </div>
    );
}
 
export default Navbar;


