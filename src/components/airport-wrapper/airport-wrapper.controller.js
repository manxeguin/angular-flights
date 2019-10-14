export default function AirportWrapperController(AiportsService,UtilsService) {
  'ngInject';

  return {
    $onInit() {
      this.airportsData = [];

      AiportsService.getAirports().then((airports) => {
        this.airportsData = airports;
        if (this.defaultValues){
          this.fromAirport = UtilsService.findByKeyValue(this.airportsData,'iataCode',this.defaultValues.from);
          this.toAirport = UtilsService.findByKeyValue(this.airportsData,'iataCode',this.defaultValues.to);
          this.sendAirportsUpdateEvent();
        }
      })

    },

    $onChanges(changes) {
            if (changes.fromAirport) {
                this.fromAirport = Object.assign({}, this.fromAirport);
            }
            if (changes.toAirport) {
                this.toAirport = Object.assign({}, this.toAirport);
            }
        },

    sendAirportsUpdateEvent() {
      if (this.onUpdate) {
        this.onUpdate({
          $event: {
            airports: {
              fromAirport: this.fromAirport,
              toAirport: this.toAirport
            }
          }
        });
      }
    },

    setAirportFrom(event) {
      this.fromAirport = event.airport;
      this.sendAirportsUpdateEvent();
    },

    setAirportTo(event) {
      this.toAirport = event.airport;
      this.sendAirportsUpdateEvent();
    },

    removeFromAirport() {
      this.fromAirport = undefined;
      this.sendAirportsUpdateEvent();
    },
    removeToAirport() {
      this.toAirport = undefined;
      this.sendAirportsUpdateEvent();
    }

  }

}

