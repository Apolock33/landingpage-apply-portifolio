import Home from './sections/home'
import Header from './components/header'
import { PrimeReactProvider } from 'primereact/api'
import Tools from './sections/tools'
import Priorizing from './sections/priorizing'
import Coments from './sections/coments'

const App = () => {

  return (
    <PrimeReactProvider>
      <Header>
        <Home />
        <Tools />
        <Priorizing />
        <Coments />
      </Header>
    </PrimeReactProvider>
  )
}

export default App
