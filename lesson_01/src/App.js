import './App.css'

import JSX from './components/JSX/JSX'
import Heading from './components/Heading'
import Counter from './components/Counter/'

const App = () => {
  const date = new Date();

  return <>
    <h1>Hello, world {date.toISOString()}</h1>

    <Heading text="Heading first" color="red" fs="14px" />
    <Heading text="Heading second" color="green"></Heading>
    <Heading />

    <JSX />

    <Counter />
  </>
}

export default App;
