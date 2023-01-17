import './styles/global.css'
import { Habit } from "./components/Habit"

export default function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={120}/>
      <Habit completed={32} />
    </div>
  )
}
