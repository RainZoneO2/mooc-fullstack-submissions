import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({text}) => (
  <p>{text}</p>
)

const App = () => {
  const [countGood, setCountGood] = useState(0)
  const [countNeutral, setCountNeutral] = useState(0)
  const [countBad, setCountBad] = useState(0)

  const all = countGood + countNeutral + countBad
  const average = (countGood - countBad) / all
  const positive = countGood / all

  const increaseGoodCount = () => {
    setCountGood(countGood + 1)
  }
  const increaseNeutralCount = () => {
    setCountNeutral(countNeutral + 1)
  }
  const increaseBadCount = () => {
    setCountBad(countBad + 1)
  }

  return (
    <>
      <h1> Give us feedback below! </h1>
      <Button handleClick={increaseGoodCount} text="Good" />
      <Button handleClick={increaseNeutralCount} text="Neutral" />
      <Button handleClick={increaseBadCount} text="Bad" />

      <h1> Statistics </h1>
      <Display text={"Good: " + countGood} />
      <Display text={"Neutral: " + countNeutral} />
      <Display text={"Bad: " + countBad} />
      <Display text={"All: " + all} />
      <Display text={"Average: " + average} />
      <Display text={"Positive: " + positive} />
    </>
  )
}

export default App
