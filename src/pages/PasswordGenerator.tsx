import React, { useEffect, useState } from 'react'

function PasswordGenerator() {


    const [length, setLenght] = useState(8)
    const [isSymbolAllowed, setIsSymbolAllowed] = useState<boolean>(false)
    const [isNumAllowed, setIsNumAllowed] = useState<boolean>(false)
    const [randomPassword, setRandomPassword] = useState<string | null>(null)

    function randomPasswordGenerator() {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let numbers = '0123456789'
        let specialSymbols = '!@#$%^&*(){}\|?:";'

        let finalString = chars
        let password = ''

        if (isSymbolAllowed) finalString+=specialSymbols
        if (isNumAllowed) finalString+=numbers

        for (let index = 0; index < length; index++) {
            let randomIndex = Math.floor(Math.random() * finalString.length)
            password+=finalString[randomIndex]
        }

        setRandomPassword(() => password)
    }

    useEffect(() => {
        randomPasswordGenerator()
    }, [length, isSymbolAllowed, isNumAllowed])
    

  return (
    <div className='bg-zinc-800 w-full p-4 flex items-center justify-center flex-col'>
        <h1 className='font-bold text-3xl mb-2 text-white'>Password Generator</h1>
        <div className='mb-3 px-4 py-3 flex gap-3 w-1/2 justify-center'>
            <input className='bg-white rounded-xl px-3 py-2' type="text" value={randomPassword ?? 'random password here'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRandomPassword(e.target.value)}/>
            <button className='bg-blue-400 p-2 rounded-lg text-white cursor-pointer'>Copy</button>
        </div>

        <div className='w-1/2 flex items-center justify-evenly text-white'>
            <div>
                <span className='mr-2'>Length {length}</span>
                <input type="range" value={length} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLenght(Number(e.target.value))}/>
            </div>
            <div>
                <span className='mr-2'>Numbers</span>
                <input type="checkbox" checked={isNumAllowed} onChange={() => setIsNumAllowed(prev => !prev)}/>
            </div>
            <div>
                <span className='mr-2'>Symbols</span>
                <input type="checkbox" checked={isSymbolAllowed} onChange={() => setIsSymbolAllowed(prev => !prev)}/>
            </div>
        </div>
    </div>
  )
}

export default PasswordGenerator