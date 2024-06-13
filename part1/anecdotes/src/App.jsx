import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const selectNext = () => {
    const ran = getRandomInt(anecdotes.length)
    setSelected(ran)
    console.log('Generated...',ran)
  }

  const voteOnAnecdote = () => {
    const cPoints = [...points]
    console.log('Copied...', cPoints)
    cPoints[selected] += 1
    setPoints(cPoints)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {points[selected]}</p>
      <Button handleClick={voteOnAnecdote} text="Vote"/>
      <Button handleClick={selectNext} text="Next Anecdote"/>
    </div>
  )
}

export default App
