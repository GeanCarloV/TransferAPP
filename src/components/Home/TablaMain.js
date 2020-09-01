import React from 'react';
import './home.css';
import { curretBalance } from '../../ejmplos'

const TablaMain = () => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Account No.</th>
                    <th>Balance</th>
                    <th>Date of Lastest Transfer</th>  
            </tr>
            </thead>
            <tbody>
                { curretBalance.balance.map( (item,index) => ( 
                    
                    <tr key={index} >
                        
                        
                        <td>{item.account}</td>
                        <td>{item.balance.currency} {item.balance.value}</td>
                        <td>{item.createdAt.slice(0, 10)}</td>
                    </tr>
                ))

                }
                
            </tbody>
        </table>
     );
}
 
export default TablaMain;