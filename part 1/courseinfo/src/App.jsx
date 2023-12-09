
//Add Header Component - Pass the header as prop single argument
const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

//Add Content Component - Content can be passed as an array of courses and excersizes
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>Name: {props.content.name}  Exercises: {props.content.exercises}</p>
    </div>
  )
}

//Add Total Component
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total Number of exercises = {props.content}</p>
    </div>
  )
}
const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course = {course} />
      <Content content = {part1} />
      <Content content = {part2} />
      <Content content = {part3} />
      <Total content = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App