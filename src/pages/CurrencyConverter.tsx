import {useMemo, useState } from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import CurrencyInput from '../components/CurrencyInput';

function CurrencyConverter() {

  const [fromCurrency, setFromCurrency] = useState<string>('usd')
  const [toCurrency, setToCurrency] = useState<string>('inr')
  const [fromCurrencyValue, setFromCurrencyValue] = useState<number>(0)
  const [toCurrencyValue, setToCurrencyValue] = useState<number>(0)

  const data = useCurrencyInfo(fromCurrency)
  // console.log(`THIS IS THE ACTUAL DATA :`, data);

  const currencyList = useMemo(() => Object.keys(data), [data])

  const convertCurrency = () => {
    const finalAmount = fromCurrencyValue*data[toCurrency]
    setToCurrencyValue(() => finalAmount)
  }

  
  return (
    <div className='bg-zinc-500 p-4 flex flex-col items-center justify-center '>
      {/* <h1 className='text-white'>CurrencyConverter</h1> */}
      <div className='w-3/4 border border-blue-500 flex flex-col items-center justify-center p-6 rounded-2xl bg-blue-200'>
        <CurrencyInput 
          label='From'
          currencyList={currencyList}
          currencyValue={fromCurrencyValue}
          onCurrencyChange={(currency: string) => setFromCurrency(currency) }
          onAmountChange={(amount) => {
            setFromCurrencyValue(amount)
          }}
          value={fromCurrency}
        />
        <CurrencyInput 
          label='To'
          currencyList={currencyList}
          currencyValue={toCurrencyValue}
          onCurrencyChange={(currency: string) => setToCurrency(currency) }
          value={toCurrency}
        />
        <button onClick={convertCurrency} className='bg-blue-900 p-3 rounded-md text-white cursor-pointer'>
          Convert {fromCurrency} to {toCurrency}
        </button>
      </div>
    </div>
  )
}

export default CurrencyConverter