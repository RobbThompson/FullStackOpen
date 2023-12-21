import { useState } from "react"

const Title = (props) => {
  console.log(props)
  return <div>{props.text}</div>
}

const Stats = (props) => {
  console.log(props)
  return <div>{props.text}</div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text="Give Feedback" />
      <Stats text="Statistics" />
    </div>
  )
}

export default App
