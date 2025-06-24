
import Boss from './Components/Boss'
import Hilla from './assets/hilla.png'
import Zakum from './assets/zakum.png'
import Magnus from './assets/magnus.png'
import Ranmaru from './assets/ranmaru.png'

function App() {

  return (
    <>
      <title>Boss Crystal Calculator</title>
      <div className='title'>Daily</div>
      <Boss alt="zakum" image={Zakum} name="Zakum" difficulty="Easy" crystalValue={200000} isWeekly={false}/>
      <Boss alt="zakum" image={Zakum} name="Zakum" difficulty="Normal" crystalValue={612500} isWeekly={false}/>
      <Boss alt="magnus" image={Magnus} name="Magnus" difficulty="Easy" crystalValue={722000} isWeekly={false}/>
      <Boss alt="hilla" image={Hilla} name="Hilla" difficulty="Normal" crystalValue={800000} isWeekly={false}/>
      <Boss alt="ranmaru" image={Ranmaru} name="Ranmaru" difficulty="Normal" crystalValue={840500} isWeekly={false}/>
      <hr></hr>
      <div className='title'>Weekly</div>
      <Boss alt="hilla" image={Hilla} name="Hilla" difficulty="Hard" crystalValue={9000000} isWeekly={true}/>
      </>
  )
}

export default App
