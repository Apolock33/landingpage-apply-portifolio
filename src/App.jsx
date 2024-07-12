import Home from './sections/home'
import Header from './components/header'
import { PrimeReactProvider } from 'primereact/api'
import Tools from './sections/tools'
import Priorizing from './sections/priorizing'
import Coments from './sections/coments'
import FAQ from './sections/faq'
import CallToAction from './sections/callToAction'

const App = () => {

  return (
    <PrimeReactProvider>
      <Header>
        <Home />
        <Tools />
        <Priorizing />
        <Coments />
        <FAQ />
      </Header>
      <CallToAction />
    </PrimeReactProvider>
  )
}

export default App
