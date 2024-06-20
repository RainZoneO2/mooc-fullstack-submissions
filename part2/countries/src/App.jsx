import { useState } from 'react'
import Filter from './components/Filter'
import CountryPanel from './components/CountryPanel'

const App = () => {
  const [filter, setFilter] = useState('')
  const [regex, setRegex] = useState(RegExp)

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} setRegex={setRegex} />
      <CountryPanel regex={regex} />
    </div>
  )
}

export default App
