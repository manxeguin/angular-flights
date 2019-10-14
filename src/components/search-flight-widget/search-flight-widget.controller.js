export default function SearchFlightWidgetController(UtilsService) {
    'ngInject';
    return {

        $onInit() {
            if (this.defaultValues){
                this.startDate = UtilsService.dateStringToDate(this.defaultValues.flyout);
                this.endDate = UtilsService.dateStringToDate(this.defaultValues.flyback);
            }else{
                this.startDate = new Date();
                this.endDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
            }
            
        },

        updateDates(event) {
            if (event.dates) {
                this.startDate = event.dates.flyOut;
                this.endDate = event.dates.flyBack;
            }
        },

        updateAirports(event) {
            if (event.airports) {
                this.fromAirport = event.airports.fromAirport;
                this.toAirport = event.airports.toAirport;
            }
        },

        sendSearchParams(from, to, flyout, flyback) {
            if (this.searchFunction) {
                this.searchFunction({
                    $event: {
                        params: {
                            from: from,
                            to: to,
                            flyout: flyout,
                            flyback: flyback
                        }
                    }
                });
            }
        },

        searchFlights() {
            console.log('searching flights...');
            if (this.startDate && this.endDate && this.fromAirport && this.toAirport) {
                
                    this.errorParams = false;
                    const from = this.fromAirport;
                    const to = this.toAirport;
                    const flyout = this.startDate;
                    const flyback = this.endDate;
                    this.sendSearchParams(from, to, flyout, flyback);
                
            } else {
                this.errorParams = true;
            }

        }


    }
}
