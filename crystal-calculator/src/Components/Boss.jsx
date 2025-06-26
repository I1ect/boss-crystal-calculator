import Power from '../assets/power_crystal.png'
import Power_Week from '../assets/power_crystal_weekly.png'


function Boss(props) {

    return (
    <div className="boss-element">
        <img className="boss-image" src={props.image}></img>
        <h1 className="boss-name">{props.name} </h1>
        <h2 className="boss-difficulty">{props.difficulty} </h2>
        <h2 className="crystal-value"><img src={props.isWeekly ? Power_Week:Power}></img>{props.crystalValue.toLocaleString()}</h2>
        <h2 className="weekly-value">{props.isWeekly ? null:<><img src={Power_Week}></img>{(props.crystalValue * 7).toLocaleString()}</>}</h2>
        <h2 className="clear-selector">
            <label>Effort </label>
            <select className="values">
                <option value="none">None</option>
                <option value="minclear">Min Clear</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="easy">Easy </option>
                <option value="burst">1 Burst</option>
            </select>
        </h2>
    </div>
    )
}

export default Boss