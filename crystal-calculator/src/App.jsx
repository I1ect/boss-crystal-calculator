
import Boss from './Components/Boss'
import Hilla from './assets/hilla.png'
import Zakum from './assets/zakum.png'
import Magnus from './assets/magnus.png'
import Ranmaru from './assets/ranmaru.png'
import Horntail from './assets/horntail.png'
import Pierre from './assets/pierre.png'
import Vonbon from './assets/von_bon.png'
import Queen from './assets/queen.png'
import Vellum from './assets/vellum.png'
import Von_Leon from './assets/von_leon.png'
import Arkarium from './assets/arkarium.png'
import Omni_Cln from './assets/omni-cln.png'
import Pink_Bean from './assets/pink_bean.png'
import Papulatus from './assets/papulatus.png'
import Cygnus from './assets/cygnus.png'
import Princess_No from './assets/princess_no.png'
import Akechi from './assets/akechi.png'
import Lotus from './assets/lotus.png'
import Damien from './assets/damien.png'
import Slime from './assets/slime.png'
import Lucid from './assets/lucid.png'
import Will from './assets/will.png'
import Gloom from './assets/gloom.png'
import Darknell from './assets/darknell.png'
import Vhilla from './assets/verus_hilla.png'
import Seren from './assets/seren.png'
import Kalos from './assets/kalos.png'
import Kaling from './assets/kaling.png'


function App() {

  return (
    <>
      <title>Boss Crystal Calculator</title>
      <div className='title'>Daily</div>
      <div className='dailies'>
        <Boss alt="zakum" image={Zakum} name="Zakum" difficulty="Easy" crystalValue={200000} isWeekly={false}/>
        <Boss alt="zakum" image={Zakum} name="Zakum" difficulty="Normal" crystalValue={612500} isWeekly={false}/>
        <Boss alt="papulatus" image={Papulatus} name="Papulatus" difficulty="Easy" crystalValue={684500} isWeekly={false}/>
        <Boss alt="magnus" image={Magnus} name="Magnus" difficulty="Easy" crystalValue={722000} isWeekly={false}/>
        <Boss alt="hilla" image={Hilla} name="Hilla" difficulty="Normal" crystalValue={800000} isWeekly={false}/>
        <Boss alt="ranmaru" image={Ranmaru} name="Ranmaru" difficulty="Normal" crystalValue={840500} isWeekly={false}/>
        <Boss alt="horntail" image={Horntail} name="Horntail" difficulty="Easy" crystalValue={882000} isWeekly={false}/>
        <Boss alt="pierre" image={Pierre} name="Pierre" difficulty="Normal" crystalValue={968000} isWeekly={false}/>
        <Boss alt="vonbon" image={Vonbon} name="Von Bon" difficulty="Normal" crystalValue={968000} isWeekly={false}/>
        <Boss alt="queen" image={Queen} name="Queen" difficulty="Normal" crystalValue={968000} isWeekly={false}/>
        <Boss alt="vellum" image={Vellum} name="Vellum" difficulty="Normal" crystalValue={968000} isWeekly={false}/>
        <Boss alt="horntail" image={Horntail} name="Horntail" difficulty="Normal" crystalValue={1012500} isWeekly={false}/>
        <Boss alt="vonleon" image={Von_Leon} name="Von Leon" difficulty="Easy" crystalValue={1058000} isWeekly={false}/>
        <Boss alt="arkarium" image={Arkarium} name="Arkarium" difficulty="Easy" crystalValue={1152000} isWeekly={false}/>
        <Boss alt="omnicln" image={Omni_Cln} name="OMNI-CLN" difficulty="Normal" crystalValue={1250000} isWeekly={false}/>
        <Boss alt="horntail" image={Horntail} name="Horntail" difficulty="Chaos" crystalValue={1352000} isWeekly={false}/>
        <Boss alt="pinkbean" image={Pink_Bean} name="Pink Bean" difficulty="Normal" crystalValue={1404500} isWeekly={false}/>
        <Boss alt="vonleon" image={Von_Leon} name="Von Leon" difficulty="Normal" crystalValue={1458000} isWeekly={false}/>
        <Boss alt="vonleon" image={Von_Leon} name="Von Leon" difficulty="Hard" crystalValue={2450000} isWeekly={false}/>
        <Boss alt="arkarium" image={Arkarium} name="Arkarium" difficulty="Normal" crystalValue={2520500} isWeekly={false}/>
        <Boss alt="magnus" image={Magnus} name="Magnus" difficulty="Normal" crystalValue={2592000} isWeekly={false}/>
        <Boss alt="ranmaru" image={Ranmaru} name="Ranmaru" difficulty="Hard" crystalValue={2664500} isWeekly={false}/>
        <Boss alt="papulatus" image={Papulatus} name="Papulatus" difficulty="Normal" crystalValue={2664500} isWeekly={false}/>
      </div>
      
      <hr></hr>
      <div className='title'>Weekly</div>
      <div className='weeklies'>
      <Boss alt="cygnus" image={Cygnus} name="Cygnus" difficulty="Easy" crystalValue={9112500} isWeekly={true}/>
      <Boss alt="hilla" image={Hilla} name="Hilla" difficulty="Hard" crystalValue={11250000} isWeekly={true}/>
      <Boss alt="pinkbean" image={Pink_Bean} name="Pink Bean" difficulty="Chaos" crystalValue={12800000} isWeekly={true}/>
      <Boss alt="cygnus" image={Cygnus} name="Cygnus" difficulty="Normal" crystalValue={14450000} isWeekly={true}/>
      <Boss alt="zakum" image={Zakum} name="Zakum" difficulty="Chaos" crystalValue={16200000} isWeekly={true}/>
      <Boss alt="pierre" image={Pierre} name="Pierre" difficulty="Chaos" crystalValue={16200000} isWeekly={true}/>
      <Boss alt="vonbon" image={Vonbon} name="Von Bon" difficulty="Chaos" crystalValue={16200000} isWeekly={true}/>
      <Boss alt="queen" image={Queen} name="Queen" difficulty="Chaos" crystalValue={16200000} isWeekly={true}/>
      <Boss alt="princess no" image={Princess_No} name="Princess No" difficulty="Normal" crystalValue={16200000} isWeekly={true}/>
      <Boss alt="magnus" image={Magnus} name="Magnus" difficulty="Hard" crystalValue={19012500} isWeekly={true}/>
      <Boss alt="vellum" image={Vellum} name="Vellum" difficulty="Chaos" crystalValue={21012500} isWeekly={true}/>
      <Boss alt="papulatus" image={Papulatus} name="Papulatus" difficulty="Chaos" crystalValue={26450000} isWeekly={true}/>
      <Boss alt="akechi" image={Akechi} name="Akechi" difficulty="Normal" crystalValue={28800000} isWeekly={true}/>
      <Boss alt="lotus" image={Lotus} name="Lotus" difficulty="Normal" crystalValue={32512500} isWeekly={true}/>
      <Boss alt="damien" image={Damien} name="Damien" difficulty="Normal" crystalValue={33800000} isWeekly={true}/>
      <Boss alt="slime" image={Slime} name="Slime" difficulty="Normal" crystalValue={46334700} isWeekly={true}/>
      <Boss alt="lucid" image={Lucid} name="Lucid" difficulty="Easy" crystalValue={47401875} isWeekly={true}/>
      <Boss alt="will" image={Will} name="Will" difficulty="Easy" crystalValue={49348950} isWeekly={true}/>
      <Boss alt="lucid" image={Lucid} name="Lucid" difficulty="Normal" crystalValue={50765625} isWeekly={true}/>
      <Boss alt="will" image={Will} name="Will" difficulty="Normal" crystalValue={55815000} isWeekly={true}/>
      <Boss alt="gloom" image={Gloom} name="Gloom" difficulty="Normal" crystalValue={59535000} isWeekly={true}/>
      <Boss alt="darknell" image={Darknell} name="Darknell" difficulty="Normal" crystalValue={52812500} isWeekly={true}/>
      <Boss alt="damien" image={Damien} name="Damien" difficulty="Hard" crystalValue={70312500} isWeekly={true}/>
      <Boss alt="lotus" image={Lotus} name="Lotus" difficulty="Hard" crystalValue={74112500} isWeekly={true}/>
      <Boss alt="lucid" image={Lucid} name="Lucid" difficulty="Hard" crystalValue={80000000} isWeekly={true}/>
      <Boss alt="will" image={Will} name="Will" difficulty="Hard" crystalValue={88200000} isWeekly={true}/>
      <Boss alt="gloom" image={Gloom} name="Gloom" difficulty="Chaos" crystalValue={88200000} isWeekly={true}/>
      <Boss alt="vhilla" image={Vhilla} name="Vhilla" difficulty="Normal" crystalValue={89520000} isWeekly={true}/>
      <Boss alt="darknell" image={Darknell} name="Darknell" difficulty="Hard" crystalValue={96800000} isWeekly={true}/>
      <Boss alt="vhilla" image={Vhilla} name="Vhilla" difficulty="Normal" crystalValue={110450000} isWeekly={true}/>
      <Boss alt="seren" image={Seren} name="Seren" difficulty="Normal" crystalValue={133687500} isWeekly={true}/>
      <Boss alt="kalos" image={Kalos} name="Kalos" difficulty="Easy" crystalValue={150000000} isWeekly={true}/>
      <Boss alt="kaling" image={Kaling} name="Kaling" difficulty="Easy" crystalValue={150000000} isWeekly={true}/>
      <Boss alt="seren" image={Seren} name="Seren" difficulty="Hard" crystalValue={151250000} isWeekly={true}/>
      <Boss alt="kalos" image={Kalos} name="Kalos" difficulty="Normal" crystalValue={200000000} isWeekly={true}/>
      <Boss alt="kalos" image={Kalos} name="Kalos" difficulty="Chaos" crystalValue={400000000} isWeekly={true}/>
      <Boss alt="kaling" image={Kaling} name="Kaling" difficulty="Hard" crystalValue={150000000} isWeekly={true}/>
      
      </div>
      
      </>
  )
}

export default App
