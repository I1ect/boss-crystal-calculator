
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
      chaos: {id: 100, difficulty: "Chaos", value: 12800000, isWeekly: false}}},
    cygnus: {name: "Cygnus", image: Cygnus, difficulties: 
      {easy: {id: 24, difficulty: "Easy", value: 9112500, isWeekly: true}, 
      normal: {id: 26, difficulty: "Normal", value: 14450000, isWeekly: true}}},
    princess_no: {name: "Princess No", image: Princess_No, difficulties: 
      {normal: {id: 32, difficulty: "Normal", value: 16200000, isWeekly: true}}},
    akechi: {name: "Akechi", image: Akechi, difficulties: 
      {normal: {id: 35, difficulty: "Normal", value: 28800000, isWeekly: true}}},
    lotus: {name: "Lotus", image: Lotus, difficulties: 
      {normal: {id: 36, difficulty: "Normal", value: 32512500, isWeekly: true},
      hard: {id: 46, difficulty: "Hard", value: 32512500, isWeekly: true},
      extreme: {id: 57, difficulty: "Extreme", value: 279500000, isWeekly: true},}},
    damien: {name: "Damien", image: Damien, difficulties: 
      {normal: {id: 37, difficulty: "Normal", value: 33800000, isWeekly: true},
      hard: {id: 45, difficulty: "Hard", value: 84375000, isWeekly: true}}},
    slime: {name: "Slime", image: Slime, difficulties: 
      {normal: {id: 38, difficulty: "Normal", value: 46334700, isWeekly: true}}},
    lucid: {name: "Lucid", image: Lucid, difficulties: 
      {easy: {id: 39, difficulty: "Easy", value: 47401875, isWeekly: true}, 
      normal: {id: 41, difficulty: "Normal", value: 55815000, isWeekly: true}, 
      hard: {id: 102, difficulty: "Hard", value: 100800000, isWeekly: true},}},
    will: {name: "Will", image: Lucid, difficulties: 
      {easy: {id: 40, difficulty: "Easy", value: 49348950, isWeekly: true},
      normal: {id: 42, difficulty: "Normal", value: 55815000, isWeekly: true},
      hard: {id: 101, difficulty: "Normal", value: 124362000, isWeekly: true},}},
    gloom: {name: "Gloom", image: Gloom, difficulties: 
      {normal: {id: 43, difficulty: "Normal", value: 59535000, isWeekly: true}, 
      chaos: {id: 47, difficulty: "Chaos", value: 112789000, isWeekly: true}}},
    darknell: {name: "Darknell", image: Darknell, difficulties: 
      {normal: {id: 44, difficulty: "Normal", value: 63375000, isWeekly: true}, 
      hard: {id: 49, difficulty: "Hard", value: 133584000, isWeekly: true}}},
    vhilla: {name: "Verus Hilla", image: Vhilla, difficulties: 
      {normal: {id: 48, difficulty: "Normal", value: 116376000, isWeekly: true}, 
      hard: {id: 50, difficulty: "Hard", value: 152421000, isWeekly: true}}},
    seren: {name: "Chosen Seren", image: Seren, difficulties: 
      {normal: {id: 51, difficulty: "Normal", value: 177804375, isWeekly: true}, 
      hard: {id: 54, difficulty: "Hard", value: 219312500, isWeekly: true}, 
      extreme: {id: 62, difficulty: "Extreme", value: 847000000, isWeekly: true}}},
    kalos: {name: "Kalos", image: Kalos, difficulties: 
      {easy: {id: 52, difficulty: "Easy", value: 187500000, isWeekly: true}, 
      normal: {id: 55, difficulty: "Normal", value: 260000000, isWeekly: true}, 
      chaos: {id: 60, difficulty: "Chaos", value: 520000000, isWeekly: true}, 
      extreme: {id: 63, difficulty: "Extreme", value: 1040000000, isWeekly: true}}},
    kaling: {name: "Kaling", image: Kaling, difficulties: 
      {easy: {id: 53, difficulty: "Easy", value: 206250000, isWeekly: true}, 
      normal: {id: 56, difficulty: "Normal", value: 301300000, isWeekly: true}, 
      hard: {id: 61, difficulty: "Hard", value: 598000000, isWeekly: true}, 
      extreme: {id: 64, difficulty: "Extreme", value: 1205200000, isWeekly: true}}},
    limbo: {name: "Limbo", image: Limbo, difficulties: 
      {normal: {id: 58, difficulty: "Normal", value: 420000000, isWeekly: true}, 
      hard: {id: 59, difficulty: "Hard", value: 749000000, isWeekly: true}}},
  }

  const daily_bosses = Object.values(bosses).flatMap(boss => Object.values(boss.difficulties).filter(diff => !diff.isWeekly).map((diff) => (
    <Boss key={diff.id} image={boss.image} name={boss.name} difficulty={diff.difficulty} crystalValue={diff.value} isWeekly={diff.isWeekly}></Boss>
  )))

  const weekly_bosses = Object.values(bosses).flatMap(boss => Object.values(boss.difficulties).filter(diff => diff.isWeekly).map((diff) => (
    <Boss key={diff.id} image={boss.image} name={boss.name} difficulty={diff.difficulty} crystalValue={diff.value} isWeekly={diff.isWeekly}></Boss>
  )))

  return (
    <>
      <title>Boss Crystal Calculator</title>
      <div className='title'>Daily
        <input type="checkbox" id='heroic-checkbox' name='Heroic'>
          <label for="Heroic">Heroic</label>
        </input>
      </div>
      <div className='dailies'>
        {daily_bosses}
      </div>
      
      <hr></hr>
      <div className='title'>Weekly</div>
      <div className='weeklies'>
        {weekly_bosses} 
      </div>
      
      </>
  )
}

export default App
