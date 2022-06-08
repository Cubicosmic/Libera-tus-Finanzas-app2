import React from 'react'
import '../styles/table.scss'

export const Table = ({ date, saldo }) => {
    return (
        <div className='table' id='table'>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Saldo</th>
                    </tr>
                </thead>
                <tbody>
                    {date.map((e,i)=>{
                        return(
                            <tr key={i}>
                                <td>{date[i]}</td>
                                <td>{saldo[i]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
