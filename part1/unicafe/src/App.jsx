import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({text}) => <td>{text}</td>

const StatisticLine = ({label, value}) => {
  return (
    <tr> 
      {
        (label == "Positive")
        ? <><Display text={label + ": "} /><Display text={value + "%"} /></>
        : <><Display text={label + ": "} /><Display text={value} /></>
      }
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback has been given yet.</p>
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine label="Good" value={props.countGood} />
        <StatisticLine label="Neutral" value={props.countNeutral} />
        <StatisticLine label="Bad" value={props.countBad} />
        <StatisticLine label="Total" value={props.all} />
        <StatisticLine label="Average" value={props.average} />
        <StatisticLine label="Positive" value={props.positive} />
      </tbody>
    </table>
  )
}

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
      <Statistics 
      countGood={countGood}
      countNeutral={countNeutral}
      countBad={countBad}
      all={all}
      average={average}
      positive={positive}
      />
    </>
  )
}

export default App
