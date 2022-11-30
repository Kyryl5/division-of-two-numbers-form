import { useState } from 'react'
import Divident from './components/Divident'
import Divider from './components/Divider'
import Result from './components/Result'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  const [inpData, setInpData] = useState({
    dividend: '',
    divider: '',
  })

  return (
    <ErrorBoundary>
      <div className="wrapper">
        <Divident inpData={inpData} setInpData={setInpData} />
        <Divider inpData={inpData} setInpData={setInpData} />
        <Result inpData={inpData} />
      </div>
    </ErrorBoundary>
  )
}

export default App
