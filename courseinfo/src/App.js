const Header = (props) => {
  console.log(props)
  return <h1>{props.courseName}</h1>
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.parts.map((part, i) => {
        return (
          <Part 
            name={part.name}
            exercises={part['exercises']}
            key={i}
          />
        )
      })}
    </div>
  )
}

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
)

const Total = (props) => {
  console.log(props);
  return <p>Number of exercises {props.parts.reduce((acc, part) => acc + part.exercises, 0)}</p>
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
      <Header courseName={course.name} />
      <Content parts={course['parts']} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
