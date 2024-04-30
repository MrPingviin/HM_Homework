import './App.css'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { setName } from './redux/slices/main';

function App() {

  const name = useAppSelector((state) => state.main.name);
  const dispatch = useAppDispatch()

  return (
    <>
    <h1 className="">{name}</h1>
    <button onClick={() => dispatch(setName("Steve"))}>Click on me</button>
    </>
  )
}

export default App
