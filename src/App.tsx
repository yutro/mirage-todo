import {Route, Routes} from "react-router-dom";

// import reactLogo from './assets/react.svg'
// import './App.css'
import {Lists} from "./pages";
import {routes} from "./shared/const";

export const AppRoutes = (): JSX.Element => (
    <Routes>
        <Route path={routes.lists.base.relative} element={<Lists />} />
    </Routes>
)

// <div className="App mb-10">
//     <div>
//     <a href="https://vitejs.dev" target="_blank">
//     <img src="/vite.svg" className="logo" alt="Vite logo" />
//     </a>
// <a href="https://reactjs.org" target="_blank">
//     <img src={reactLogo} className="logo react" alt="React logo" />
// </a>
// </div>
// <h1>Vite + React</h1>
// <div className="card">
//     <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//     </button>
//     <p>
//         Edit <code>src/App.tsx</code> and save to test HMR
//     </p>
// </div>
// <p className="read-the-docs">
//     Click on the Vite and React logos to learn more
// </p>
// </div>