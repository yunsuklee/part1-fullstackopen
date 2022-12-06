import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Anecdote = ({ title, anecdote, votes }) => (
  <div>
    <h1>{title}</h1>
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [max, setMax] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  // console.log(votes)

  const handleClick = () => {
    let tmp = Math.floor(Math.random() * (anecdotes.length - 1))

    while (tmp === selected)
      tmp = Math.floor(Math.random() * (anecdotes.length - 1))

    setSelected(tmp)
  }

  const handleVotes = () => {
    const copy = { ...votes }
    copy[selected] += 1

    if (copy[selected] > votes[max]) setMax(selected)

    setVotes(copy)
  }

  return (
    <div>
      <Anecdote 
        title='Anecdote of the day' 
        anecdote={anecdotes[selected]}
        votes={votes[selected]} 
      />
      <Button handleClick={handleVotes} text='vote' />
      <Button handleClick={handleClick} text='next anecdote' />
      <Anecdote
        title='Anecdote with most votes'
        anecdote={anecdotes[max]}
        votes={votes[max]}
      />
    </div>
  )
}

export default App
