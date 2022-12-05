import { useState } from "react"

const Feedback = (props) => (
  <div>
    <h1>give feedback</h1>
    <Button 
      text='good'
      handle={props.setGood}
    />
    <Button 
      text='neutral'
      handle={props.setNeutral}
    />
    <Button 
      text='bad'
      handle={props.setBad}
    />
  </div>
)

const Button = ({text, handle}) => (
  <button onClick={handle}>{text}</button>
)

const Statistics = (props) => {
  if (props.all) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine 
              text='good'
              value={props.good}
            />
            <StatisticLine 
              text='neutral'
              value={props.neutral}
            />
            <StatisticLine 
              text='bad'
              value={props.bad}
            />
            <StatisticLine 
              text='all'
              value={props.all}
            />
            <StatisticLine 
              text='average'
              value={(props.good - props.bad) / props.all}
            />
            <StatisticLine 
              text='positive'
              value={(props.good * 100 / props.all) + '%'}
            />
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  )
}

const StatisticLine = ({ text, value }) => (
  <tr>
    <th></th>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setGood(good + 1)   
    setAll(all + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  } 
  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <Feedback 
        setGood={handleGood}
        setNeutral={handleNeutral}
        setBad={handleBad}
      />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
      />
    </div>
  )
}

export default App
