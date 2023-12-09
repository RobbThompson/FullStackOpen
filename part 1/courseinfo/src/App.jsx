
//Add Header Component - Pass the header as prop single argument
const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course.name}</h1>
  )
}

//Add course Component - course can be passed as an array of courses and excersizes
const Course = (props) => {
  console.log(props)
  return (
    <div>
      <p>Name: {props.course.parts[0].name}  Exercises: {props.course.parts[0].exercises}</p>
      <p>Name: {props.course.parts[1].name}  Exercises: {props.course.parts[1].exercises}</p>
      <p>Name: {props.course.parts[2].name}  Exercises: {props.course.parts[2].exercises}</p>
    </div>
  )
}

//Add Total Component
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total Number of exercises = {props.course.parts[0].exercises
                                        + props.course.parts[1].exercises
                                        + props.course.parts[2].exercises}
      </p>
    </div>
  )
}
const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course = {course} />
      <Course course = {course} />
      <Total course = {course} />
    </div>
  )
}

export default App