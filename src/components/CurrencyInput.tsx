import React from 'react'
import { type TCurrencyInput } from '../lib/types'

function CurrencyInput({
  label,
  currencyValue,
  currencyList,
  onCurrencyChange,
  onAmountChange,
  defaultValue
}: TCurrencyInput) {
  return (
    <>
        <div className='bg-white w-3/4 p-4 mb-4 rounded-xl'>
            <div className='flex items-center justify-between mb-3'>
                <label htmlFor={label}>{label}</label>
                <h1>Currency Type</h1>
            </div>
            <div className={`flex items-center justify-between`}>
                <input 
                    type='number' 
                    value={currencyValue} 
                    onChange={(e) => {
                            if(onAmountChange) {
                                onAmountChange(Number(e.target.value))
                            }
                        }
                    }
                />
                <select 
                    className='cursor-pointer' 
                    value={defaultValue}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {
                        currencyList.map(currValue => {
                            return <option key={currValue} className=''>{currValue}</option>
                        })
                    }
                </select>
            </div>
        </div>
    </>
  )
}

export default CurrencyInput