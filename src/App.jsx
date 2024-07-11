import Home from './sections/home'
import Header from './components/header'
import { PrimeReactProvider } from 'primereact/api'

const App = () => {

  return (
    <PrimeReactProvider>
      <Header>
        <Home />
      </Header>
    </PrimeReactProvider>
  )
}

export default App
