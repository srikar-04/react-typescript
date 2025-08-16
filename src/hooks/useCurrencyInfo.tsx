import { useCallback, useEffect, useState } from 'react'
import { type Price, type Currency } from '../lib/types'

function useCurrencyInfo<Base extends string>(currency: Base) {

    const [data, setData] = useState<Price>({})
  
    const currencyInfo = useCallback(() => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
        .then((res) => res.json())
        .then((res: Currency<Base>) => {
            // console.log(`BASE CURRENCY:`, res[currency])
            setData(() => res[currency])
        })
    }, [currency])

    useEffect( () => {
        currencyInfo()
    }, [currencyInfo])

    // console.log(data)

    return data
}

export default useCurrencyInfo