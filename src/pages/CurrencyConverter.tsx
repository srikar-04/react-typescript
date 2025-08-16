import React, { useEffect } from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import CurrencyInput from '../components/CurrencyInput';

function CurrencyConverter() {

    const data = useCurrencyInfo('usd')
    console.log(`THIS IS THE ACTUAL DATA :`, data);
    
  return (
    <div className='bg-zinc-500 p-4 flex items-center justify-center'>
      <h1 className='text-white'>CurrencyConverter</h1>
      <CurrencyInput />
    </div>
  )
}

export default CurrencyConverter