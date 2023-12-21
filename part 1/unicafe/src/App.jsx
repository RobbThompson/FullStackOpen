import { useState } from "react"

const Title = (props) => {
  console.log(props)
  return <div>{props.text}</div>
}

const StatsTitle = (props) => {
  console.log(props)
  return <div>{props.text}</div>
}

const Stats = (props) => {
  console.log(props)
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

const Button = (props) => {
  console.log(props)
  return <button>{props.text}</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text="Give Feedback" />
      <Button text="Good" />
      <Button text="Neutral" />
      <Button text="Bad" />
      <StatsTitle text="Statistics" />
      <Stats text="Good" value={good} />
      <Stats text="Neutral" value={neutral} />
      <Stats text="Bad" value={bad} />
    </div>
  )
}

export default App
