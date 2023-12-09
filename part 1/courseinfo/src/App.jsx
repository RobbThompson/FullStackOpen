
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
      <p>Name: {props.content[0].name}  Exercises: {props.content[0].excercises}</p>
      <p>Name: {props.content[1].name}  Exercises: {props.content[1].excercises}</p>
      <p>Name: {props.content[2].name}  Exercises: {props.content[2].excercises}</p>
    </div>
  )
}

//Add Total Component
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total Number of exercises = {props.content[0].excercises + props.content[1].excercises + props.content[2].excercises}</p>
    </div>
  )
}
const App = () => {

    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }

  return (
    <div>
      <Header course = {course} />
      {/* <Content content = {content} />
      <Total content = {content} /> */}
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </div>
  )
}

export default App