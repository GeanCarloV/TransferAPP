import React, { useState, useContext, useEffect} from 'react';
import transferContext from '../../context/transfer/transferContext';   

import TablaTransfer from './TablaTransfer';
import { PieChart } from 'react-minimal-pie-chart';
import { generarNuevoColor } from '../helper';
import { curretBalance } from '../../ejmplos';

import './Transfer.css';

const Transfer = () => {
    
    const TransferContext = useContext(transferContext);
    const { transaciones } = TransferContext;
   
    const [data, setData] = useState([]);
    const [transfer, setTransfer] = useState({
        "fromAccount": '',
        "toAccount": '',
        "amount": {
            "currency": "€",
            "value": 876.88
        },
        "sentAt": "2012-04-23T18:25:43.511Z"
    })
    
    const {toAccount, value} = transfer;

    useEffect(() => {
        
        setData(transaciones.map(item => 
                ({ 
                    title: item.toAccount, 
                    value: item.amount.value, 
                    color: generarNuevoColor()
                })
    ))}, []);
        
    const cambianCuenta = (e) => { 
            
        setTransfer({
                ...transfer,
                [e.target.name] : e.target.value
            })
            
    }

    const onSumit = (e) => { 
        e.preventDefault()
        console.log('se fue');
    }

    return (
    <div className="contenedor">

        <div className="dinamic-transfer">
            
            <div className="card-transfer">
                <form className="form-transfer" onSubmit={onSumit}>
                    
                    <p className="titulo-from">Create new transfer</p>
                    
                    <label className="label-from" htmlFor="select">Select origin account</label>
                    <select 
                        id='select' 
                        onChange={cambianCuenta} 
                        className="custom-select"
                    >
                        {curretBalance.balance.map( item => (
                            <option 
                                name="fromAccount"
                                value={item.account} 
                            >{item.account} - {item.balance.currency} {item.balance.value}</option>
                        ))} 
                        

                    </select>    

                    <label className="label-from" htmlFor="destino">Destination occount</label>
                    <input 
                        type="text" 
                        name="toAccount" 
                        id="destino"
                        onChange={cambianCuenta}
                        value={toAccount}
                    />

                    <label className="label-from" htmlFor="monto">Amount</label>
                    <input 
                        type="text" 
                        name="value" 
                        id="monto"
                        onChange={cambianCuenta}
                        value={value}
                    />

                    <div className="botones">
                        <input type="submit" value="Transfer"/>
                        <input type="button" value="Cancel"/>
                    </div>
                        
                </form>
            </div>
        
            <div className="grafica-tranfer">
                <PieChart
                    data={data}
                    label={({ dataEntry }) => dataEntry.value}
                    labelStyle={(index) => ({
                        fontSize: '5px',
                        fontFamily: 'sans-serif',
                        })}
                />
            </div>
        
        </div>
    
        <div >
            {/* <TablaTransfer /> */}
        </div>
    </div>
) 
}
 
export default Transfer;