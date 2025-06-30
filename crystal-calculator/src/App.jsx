
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
import Limbo from './assets/limbo.png'


function App() {

  const bosses = {
    zakum: {name: "Zakum", image: Zakum, difficulties: 
      {easy: {id: 1, difficulty: "Easy", value: 200000, isWeekly: false}, 
      normal: {id: 2, difficulty: "Normal", value: 612500, isWeekly: false}, 
      chaos: {id: 27, difficulty: "Chaos", value: 16200000, isWeekly: true}}},
    papulatus: {name: "Papulatus", image: Papulatus, difficulties: 
      {easy: {id: 3, difficulty: "Easy", value: 684500, isWeekly: false}, 
      normal: {id: 4, difficulty: "Normal", value: 2664500, isWeekly: false}, 
      chaos: {id: 34, difficulty: "Chaos", value: 19012500, isWeekly: true}}},
    magnus: {name: "Magnus", image: Magnus, difficulties: 
      {easy: {id: 5, difficulty: "Easy", value: 722000, isWeekly: false}, 
      normal: {id: 6, difficulty: "Normal", value: 2592000, isWeekly: false}, 
      hard: {id: 33, difficulty: "Hard", value: 19012500, isWeekly: true}}},
    hilla: {name: "Hilla", image: Hilla, difficulties: 
      {normal: {id: 7, difficulty: "Normal", value: 800000, isWeekly: false}, 
      hard: {id: 25, difficulty: "Hard", value: 11250000, isWeekly: true}}},
    ranmaru: {name: "Ranmaru", image: Ranmaru, difficulties: 
      {normal: {id: 8, difficulty: "Normal", value: 840500, isWeekly: false}, 
      hard: {id: 9, difficulty: "Hard", value: 2664500, isWeekly: false}, }},
    horntail: {name: "Horntail", image: Horntail, difficulties: 
      {easy: {id: 10, difficulty: "Easy", value: 882000, isWeekly: false}, 
      normal: {id: 11, difficulty: "Normal", value: 1012500, isWeekly: false}, 
      chaos: {id: 12, difficulty: "Chaos", value: 1352000, isWeekly: false}, }},
    pierre: {name: "Pierre", image: Pierre, difficulties: 
      {normal: {id: 13, difficulty: "Normal", value: 968000, isWeekly: false}, 
      chaos: {id: 28, difficulty: "Chaos", value: 16200000, isWeekly: true}}},
    vonbon: {name: "Von Bon", image: Vonbon, difficulties: 
      {normal: {id: 14, difficulty: "Normal", value: 968000, isWeekly: false}, 
      chaos: {id: 29, difficulty: "Chaos", value: 16200000, isWeekly: true}}},
    queen: {name: "Queen", image: Queen, difficulties: 
      {normal: {id: 15, difficulty: "Normal", value: 968000, isWeekly: false}, 
      chaos: {id: 30, difficulty: "Chaos", value: 16200000, isWeekly: true}}},
    vellum: {name: "Vellum", image: Vellum, difficulties: 
      {normal: {id: 16, difficulty: "Normal", value: 968000, isWeekly: false}, 
      chaos: {id: 31, difficulty: "Chaos", value: 21012500, isWeekly: true}}},
    vonleon: {name: "Von Leon", image: Von_Leon, difficulties: 
      {easy: {id: 17, difficulty: "Easy", value: 1058000, isWeekly: false}, 
      normal: {id: 18, difficulty: "Normal", value: 1458000, isWeekly: false}, 
      hard: {id: 19, difficulty: "Hard", value: 2450000, isWeekly: false}, }},
    arkarium: {name: "Arkarium", image: Arkarium,  difficulties: 
      {easy: {id: 20, difficulty: "Easy", value: 1152000, isWeekly: false}, 
      normal: {id: 21, difficulty: "Normal", value: 2520500, isWeekly: false}, }},
    omnicln: {name: "OMNI-CLN", image: Omni_Cln, difficulties: 
      {normal: {id: 22, difficulty: "Normal", value: 1250000, isWeekly: false}, }},
    pinkbean: {name: "Pink Bean", image: Pink_Bean, difficulties: 
      {normal: {id: 23, difficulty: "Normal", value: 1404500, isWeekly: false}, 
      chaos: {id: 23, difficulty: "Chaos", value: 12800000, isWeekly: false}}},
    cygnus: {name: "Cygnus", image: Cygnus, difficulties: 
      {easy: {id: 24, difficulty: "Easy", value: 9112500, isWeekly: true}, 
      normal: {id: 26, difficulty: "Normal", value: 14450000, isWeekly: true}}},
    princess_no: {name: "Princess No", image: Princess_No, difficulties: 
      {normal: {id: 32, difficulty: "Normal", value: 16200000, isWeekly: true}}},
    akechi: {name: "Akechi", image: Akechi, difficulties: 
      {normal: {id: 35, difficulty: "Normal", value: 28800000, isWeekly: true}}},
  }

  const daily_bosses = Object.values(bosses).flatMap(boss => Object.values(boss.difficulties).filter(diff => !diff.isWeekly).map((diff) => (
    <Boss image={boss.image} name={boss.name} difficulty={diff.difficulty} crystalValue={diff.value} isWeekly={diff.isWeekly}></Boss>
  )))

  const weekly_bosses = Object.values(bosses).flatMap(boss => Object.values(boss.difficulties).filter(diff => diff.isWeekly).map((diff) => (
    <Boss image={boss.image} name={boss.name} difficulty={diff.difficulty} crystalValue={diff.value} isWeekly={diff.isWeekly}></Boss>
  )))

  return (
    <>
      <title>Boss Crystal Calculator</title>
      <div className='title'>Daily</div>
      <div className='dailies'>
        {daily_bosses}
      </div>
      
      <hr></hr>
      <div className='title'>Weekly</div>
      <div className='weeklies'>
        {weekly_bosses}
      <Boss alt="lotus" image={Lotus} name="Lotus" difficulty="Normal" crystalValue={32512500} isWeekly={true}/>
      <Boss alt="damien" image={Damien} name="Damien" difficulty="Normal" crystalValue={33800000} isWeekly={true}/>
      <Boss alt="slime" image={Slime} name="Slime" difficulty="Normal" crystalValue={46334700} isWeekly={true}/>
      <Boss alt="lucid" image={Lucid} name="Lucid" difficulty="Easy" crystalValue={47401875} isWeekly={true}/>
      <Boss alt="will" image={Will} name="Will" difficulty="Easy" crystalValue={49348950} isWeekly={true}/>
      <Boss alt="lucid" image={Lucid} name="Lucid" difficulty="Normal" crystalValue={50765625} isWeekly={true}/>
      <Boss alt="will" image={Will} name="Will" difficulty="Normal" crystalValue={55815000} isWeekly={true}/>
      <Boss alt="gloom" image={Gloom} name="Gloom" difficulty="Normal" crystalValue={59535000} isWeekly={true}/>
      <Boss alt="darknell" image={Darknell} name="Darknell" difficulty="Normal" crystalValue={63375000} isWeekly={true}/>
      <Boss alt="damien" image={Damien} name="Damien" difficulty="Hard" crystalValue={84375000} isWeekly={true}/>
      <Boss alt="lotus" image={Lotus} name="Lotus" difficulty="Hard" crystalValue={88935000} isWeekly={true}/>
      <Boss alt="lucid" image={Lucid} name="Lucid" difficulty="Hard" crystalValue={100800000} isWeekly={true}/>
      <Boss alt="gloom" image={Gloom} name="Gloom" difficulty="Chaos" crystalValue={112789000} isWeekly={true}/>
      <Boss alt="vhilla" image={Vhilla} name="Vhilla" difficulty="Normal" crystalValue={116376000} isWeekly={true}/>
      <Boss alt="will" image={Will} name="Will" difficulty="Hard" crystalValue={124362000} isWeekly={true}/>
      <Boss alt="darknell" image={Darknell} name="Darknell" difficulty="Hard" crystalValue={133584000} isWeekly={true}/>
      <Boss alt="vhilla" image={Vhilla} name="Vhilla" difficulty="Hard" crystalValue={152421000} isWeekly={true}/>
      <Boss alt="seren" image={Seren} name="Seren" difficulty="Normal" crystalValue={177804375} isWeekly={true}/>
      <Boss alt="kalos" image={Kalos} name="Kalos" difficulty="Easy" crystalValue={187500000} isWeekly={true}/>
      <Boss alt="kaling" image={Kaling} name="Kaling" difficulty="Easy" crystalValue={206250000} isWeekly={true}/>
      <Boss alt="seren" image={Seren} name="Seren" difficulty="Hard" crystalValue={219312500} isWeekly={true}/>
      <Boss alt="kalos" image={Kalos} name="Kalos" difficulty="Normal" crystalValue={260000000} isWeekly={true}/>
      <Boss alt="lotus" image={Lotus} name="Lotus" difficulty="Extreme" crystalValue={279500000} isWeekly={true}/>
      <Boss alt="kaling" image={Kaling} name="Kaling" difficulty="Normal" crystalValue={301300000} isWeekly={true}/>
      <Boss alt="limbo" image={Limbo} name="Limbo" difficulty="Normal" crystalValue={420000000} isWeekly={true}/>
      <Boss alt="kalos" image={Kalos} name="Kalos" difficulty="Chaos" crystalValue={520000000} isWeekly={true}/>
      <Boss alt="kaling" image={Kaling} name="Kaling" difficulty="Hard" crystalValue={598000000} isWeekly={true}/>
      <Boss alt="limbo" image={Limbo} name="Limbo" difficulty="Hard" crystalValue={749000000} isWeekly={true}/>
      <Boss alt="seren" image={Seren} name="Seren" difficulty="Extreme" crystalValue={847000000} isWeekly={true}/>
      <Boss alt="kalos" image={Kalos} name="Kalos" difficulty="Extreme" crystalValue={1040000000} isWeekly={true}/>
      <Boss alt="kaling" image={Kaling} name="Kaling" difficulty="Hard" crystalValue={1205200000} isWeekly={true}/>
      
      </div>
      
      </>
  )
}

export default App
