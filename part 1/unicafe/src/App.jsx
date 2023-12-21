import { useState } from "react"

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Stats = (props) => {
  console.log(props)
  return (
    <div>
      {props.text} {props.value}
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

  const handleGoodClick = () => {
    //setAll(allClicks.concat('L'))
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    //setAll(allClicks.concat('L'))
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    //setAll(allClicks.concat('L'))
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
    </div>
  )
}

export default App
