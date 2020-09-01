import React, { useContext, useEffect} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import loginContext from '../../context/autentificacion/loginContext';
import transferContext from '../../context/transfer/transferContext';   
import  TablaMain from './TablaMain';
import {TransactionHistory } from '../../ejmplos'
import {generarNuevoColor} from '../helper'
import './home.css'

const Home = () => {
    
    const LoginContext = useContext(loginContext); 
    // const { user } = LoginContext;
    const user = {username: 'GeanCarlo'}
    const TransferContext = useContext(transferContext); 
    const { transaciones, obtenerTracciones } = TransferContext;

    useEffect(() => {
        // como si fuera el backend cargamos todos los datos backend
        obtenerTracciones(TransactionHistory.transactions)
        console.log(generarNuevoColor())
    }, [])
    
    const Data = transaciones.map(item => ({ title: item.toAccount, value: item.amount.value, color: generarNuevoColor()}))
    
    return (  
        <main className="home contenedor">
            
            <div className="home-titulo">
                <p>Welcome to your online banking {user.username}</p>
            </div>
            
            <div className="home-cards">
           
                <div className="card">
                    <div className="grafica">
                        <PieChart
                            data={Data}
                            label={({ dataEntry }) => dataEntry.value}
                            labelStyle={(index) => ({
                                fontSize: '5px',
                                fontFamily: 'sans-serif',
                              })}
                        />
                    </div>
                    <p className="titulo-card">Transactions History</p>
                    <p className="parrafo-card">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error maiores quas nihil dolore veniam esse numquam? 
                        Temporibus impedit nemo pariatur nam maiores. </p>
                </div>
               
                <div className="card">
                    <div className="card-img">
                        <img src="" alt="320x200" />
                    </div>                
                    <p className="titulo-card">Transactions History</p>
                    <p className="parrafo-card">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error maiores quas nihil dolore veniam esse numquam? 
                        Temporibus impedit nemo pariatur nam maiores. 
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quis dolorum harum dignissimos labore libero reprehenderit
                        dicta soluta velit consequatur! Error, ab? Reprehenderit 
                        earum perspiciatis culpa nemo cumque sint totam molestiae? 
                        Temporibus impedit nemo pariatur nam maiores. 
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quis dolorum harum dignissimos labore libero reprehenderit
                        dicta soluta velit consequatur! Error, ab? Reprehenderit </p>
                </div>
               
                <div className="card-ultimo">
                    <p className="titulo-card">Current Balance</p>
                    <TablaMain />
                </div>
           
            </div>

        </main>
    );

}
 
export default Home;