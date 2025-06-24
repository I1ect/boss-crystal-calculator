
import Boss from './Components/Boss'

function App() {

  return (
    <>
      <title>Boss Crystal Calculator</title>
      <Boss alt="hilla" name="Hilla" difficulty="Hard" crystalValue={9000000} isWeekly={true}/>
      <Boss name="Hilla" difficulty="Normal" crystalValue={90000} isWeekly={false}/>
      </>
  )
}

export default App
