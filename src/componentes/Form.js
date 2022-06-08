import React from 'react'
//estilos
import '../styles/form.scss'

export const Form = ({ 
    setEdit,
    date,
    setDate,
    saldo,
    setSaldo
}) => {

    const add = (e) => {
        e.preventDefault();
        if(!e.target.date.value | !e.target.saldo.value){
            alert('Completa todos los campos');
        } else {
            setDate([...date, e.target.date.value]);
            setSaldo([...saldo, e.target.saldo.value]);
            e.target.date.value = "";
            e.target.saldo.value = "";
        }
    }

    return (
        <form className='form' onSubmit={add}>
            <label htmlFor='date'>Fecha:</label>
            <input type='date' id='date'></input>
            <label htmlFor='saldo'>Saldo:</label>
            <input type='number' id='saldo'></input>
            <button type='submit'>Agregar</button>
            <button onClick={()=>{
                if(date.length < 2){
                    alert('Se necesitan por lo menos 2 valores para generar la grafica');
                } else {
                    setEdit(false);
                }
            }}>Gráfica</button>
        </form>
    )
}
