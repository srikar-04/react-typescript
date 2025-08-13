import React, { useCallback, useState } from 'react'
import { type CurrencyType } from '../lib/types'

function useCurrencyInfo(currency: string) {

    const [data, setData] = useState<CurrencyType>({})
  
    const currencyInfo = useCallback(() => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
        .then( res => res.json())
        .then(res => setData(res[currency]))
    }, [])

    useCallback( currencyInfo, [])
}

export default useCurrencyInfo