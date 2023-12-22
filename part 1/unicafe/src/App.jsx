import { useState } from "react"

const Header = ({ text }) => {
  //console.log({ text })
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const PrintVotes = ({ text, value }) => {
  //console.log({ text, value })
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Stats = (props) => {
  //console.log({ text, value })

  if (props.stat == "average") {
    //console.log(props)
    const badScore = props.bad * -1
    const average =
      (props.good + badScore) / (props.good + props.bad + props.neutral)
    return <div>Average {average}</div>
  } else if (props.stat == "percentage") {
    //console.log(props)
    const percentage =
      (props.good / (props.good + props.bad + props.neutral)) * 100
    return <div>Positive Percentage {percentage} %</div>
  }
}

const Button = ({ handleClick, text }) => {
  //console.log(text)
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
      <PrintVotes text="Good" value={good} />
      <PrintVotes text="Neutral" value={neutral} />
      <PrintVotes text="Bad" value={bad} />
      <PrintVotes text="Total Votes" value={allVotes} />
      <Stats stat="average" good={good} bad={bad} neutral={neutral} />
      <Stats stat="percentage" good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
