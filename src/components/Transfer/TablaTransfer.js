import React from 'react';


const TablaTransfer = ({cuenta}) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Origin Account</th>
                    <th>Destination account</th>
                    <th>Transfer date</th>
                    <th>Aumount</th>
            </tr>
            </thead>
            <tbody>
                { cuenta.map( (item,index) => ( 
                    
                    <tr key={index} >                        
                        <td>{item.fromAccount}</td>
                        <td>{item.toAccount}</td>
                        <td>{item.sentAt.slice(0, 10)}</td>
                        

                        <td>{item.amount.currency} {item.amount.value}</td>
                    </tr>
                ))

                }
                
            </tbody>
        </table>
     );
}
 
export default TablaTransfer;