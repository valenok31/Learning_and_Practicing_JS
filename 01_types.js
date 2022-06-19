class Country {
    constructor() {
        this.name = arguments[0];
    }
    set name(countryName){
        this._name = countryName
    }
    get name(){
        console.log(`${this._name} in gud`)
    }
}

let russ = new Country('Russia')

russ.name = 34



russ.name;