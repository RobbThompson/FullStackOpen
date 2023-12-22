import { useState } from "react"

const Header = ({ text }) => {
  console.log({ text })
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Stats = ({ text, value }) => {
  console.log({ text, value })
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  console.log(text)
  return <button onClick={handleClick}>{text}</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allVotes, setAllVotes] = useState(0)

  const handleGoodClick = () => {
    setAllVotes(allVotes + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAllVotes(allVotes + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAllVotes(allVotes + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text="Give Feedback" />
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Header text="Statistics" />
      <Stats text="Good" value={good} />
      <Stats text="Neutral" value={neutral} />
      <Stats text="Bad" value={bad} />
      <Stats text="Total Votes" value={allVotes} />
      <Stats text="Average" value={(good + bad * -1) / allVotes} />
      <Stats text="Positive %" value={(good / allVotes) * 100} />
    </div>
  )
}

export default App
