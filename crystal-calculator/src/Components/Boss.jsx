
function Boss(props) {

    return (
    <div className="boss-element">
        <img className="boss-image">{props.image}</img>
        <h1 className="boss-name">{props.name} </h1>
        <span className="boss-difficulty">{props.difficulty} </span>
        <span className="crystal-value">Crystal Value: {props.crystalValue} </span>
        <span className="is-weekly">{props.isWeekly ? " Weekly ":" Daily "}</span>
        <span>
            <label>Difficulty </label>
            <select>
                <option value="normal">Normal</option>
                <option value="normal">Hard</option>
            </select>
        </span>
    </div>
    )
}

export default Boss