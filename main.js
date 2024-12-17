

function Boss(name, difficulty, crystal_value, beatable) {
    this.name = name
    this.difficuly = difficulty
    this.crystal_value = crystal_value
    this.beatable = false
    this.div = document.createElement('div')

    this.div.className = 'bossClass'
    this.div.textContent = `Name: ${this.name}, Difficulty: ${this.difficuly}, Crystal Value: ${this.crystal_value}, Beatable: ${this.beatable}`;
}

function Character(name) {
    this.name = name
    this.div = document.createElement('div')

    this.div.className = 'characterClass'
    this.div.textContent = name

    let hilla = new Boss("Hilla", "hard", 11250000, false)
    let pb = new Boss("Pink Bean", "chaos", 12800000, false)
    let zakum = new Boss("Zakum", "chaos", 16200000, false)
    let queen = new Boss("Crimson Queen", "chaos", 16200000, false)
    let vonbon = new Boss("Von Bon", "chaos", 16200000, false)
    let pierre = new Boss("Pierre", "chaos", 16200000, false)
    let pno = new Boss("Princess No", "chaos", 16200000, false)

    this.div.append(hilla.div)
    this.div.append(pb.div)
    this.div.append(zakum.div)
    this.div.append(queen.div)
    this.div.append(vonbon.div)
    this.div.append(pierre.div)
    this.div.append(pno.div)

    document.body.append(this.div)
}

let CloudBorn = new Character("CloudBorn")
let CloudBorn2 = new Character("CloudBorn2")

