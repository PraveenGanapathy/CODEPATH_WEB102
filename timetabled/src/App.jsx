import './App.css';
import Calendar  from './components/Calender';

const App = () => {

  return (
    <div className="App">
      <h1>TimeForge</h1>
      <h2>Master Your Minutes, Craft Your Destiny</h2>
      <p>
        Welcome to TimeForge — where productivity meets creativity. Shape your schedule, smash your goals, and turn every week into a masterpiece!
      </p>
      <Calendar/>
    </div>
  )
}

export default App
