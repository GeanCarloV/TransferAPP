import React, {useState, useContext}from 'react';
import './login.css'
import {verificacionPassword} from '../helper';
import loginContext from '../../context/autentificacion/loginContext';

const Login = (props) => {

    const LoginContext = useContext(loginContext); 
    const { obtenerUsario } = LoginContext;

    const [user, guardandoUser] = useState({ 
        username: '', 
        password: ''
    }); 
    const [alerta, setAlerta ] = useState(''); 

    const {username, password } = user; 

    const onChange = (e) => { 
        setAlerta('')
        guardandoUser({ 
            ...user, 
            [e.target.name] : e.target.value
        })
    }

    const Logeo = (e) => { 
        e.preventDefault(); 
        if(username.trim() === 0 || password.trim() === 0){ 
            setAlerta('Todos los campos son obligatorios'); 
            return 
        }
        if(username.length<8 || username.length>20 || password.length<8 || password.length>20 ) { 
            setAlerta('El usuario debe tener como minimo 8 caracterres y maximo 20');
            return
        }
        if(verificacionPassword(password) === 1 ) { 
            setAlerta('La contraseña no debe de tener numeros consecutivos');
            return 
        }

        if(!(verificacionPassword(password))) { 
            setAlerta('La contraseña no debe de tener, una mayuscula, una minuscula y un caracter espcial');
            return 
        }
        
        console.log('se envio');
        obtenerUsario(user); 
        setTimeout(()=> { 
            guardandoUser({ 
                username: '', 
                password: ''
            })
            props.history.push('/home');
        },1000);
        
        
        
    }   
    
    return ( 
        <div className="contenedor-login">
            
            <form  
                onSubmit={Logeo} 
                className="form"
            >
                <p>Login</p>
                {alerta.length ? 
                    <div className="error" >
                        <p>{alerta}</p>
                    </div>
                    :
                    null
                }
                <input 
                    type="text" 
                    id="username"
                    name="username"  
                    placeholder="Usename"
                    value={username}
                    onChange={onChange}
                />

                <input 
                    type="password" 
                    id="password"
                    name="password" 
                    placeholder="Password"
                    value={password}
                    onChange={onChange}
                />

                <input 
                    type="submit" 
                    value="Enter"
                />
            
            </form>
        </div> 
    );
}
 
export default Login;