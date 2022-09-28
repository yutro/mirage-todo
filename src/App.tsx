import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {useGetTodosQuery} from "./generated";



function App() {
    const {data, error, isFetching} = useGetTodosQuery()
    console.log({data}) // {data:{todos: []}}

    const [count, setCount] = useState(0)

  return (
    <div className="App mb-10">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
