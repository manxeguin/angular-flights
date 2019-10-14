export default function AirportSelectorController($filter) {
    'ngInject';
    return {
        airport:{},
        
        $onInit() {
            this.airportsFiltered = [];
        },
        
        $onChanges(changes) {
            if (changes.airport) {
                this.airport = Object.assign({}, this.airport);
            }
        },

        selectAirport (airport) {
            this.airportsFiltered = [];
            this.onUpdate({
                $event: {
                airport: airport
                }
            });
        },

        getAirportsFiltered(){
            return this.airportsData.filter(airport => airport.name.toLowerCase().indexOf(this.airport.name.toLowerCase()) !== -1)
        },

        keyUp(event){
            this.searching = this.airport.name.length > 0;
            this.airportsFiltered = this.searching 
                ? this.getAirportsFiltered(this.airport.name)
                : [];
        },

        changeText () {

        }

    }
}
