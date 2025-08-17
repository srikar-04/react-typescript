import './App.css'
// import Button from './components/Button'
import BgChanger from './pages/BgChanger'
import ContextApi from './pages/ContextApi'
import CurrencyConverter from './pages/CurrencyConverter'
import PasswordGenerator from './pages/PasswordGenerator'
import ReactRouter from './pages/ReactRouter'

function App() {

  return (
    <>
      <BgChanger />
      <PasswordGenerator />
      <CurrencyConverter />
      <ReactRouter />
      <ContextApi />
    </>
  )
}

export default App
