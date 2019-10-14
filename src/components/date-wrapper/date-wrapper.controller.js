import moment from 'moment';

export default function DateWrapperController($scope) {
  'ngInject';

  return {
    $onInit() {
      $scope.$watch('$ctrl.startDate', () => {

        if (moment(this.startDate) > moment(this.endDate)) {
          this.endDate = moment(this.startDate).add(2, 'd').toDate();
        }
      });

      $scope.$watch('$ctrl.endDate', () => {

        if (moment(this.endDate) < moment(this.startDate)) {
          this.startDate = moment(this.endDate).subtract(2, 'd').toDate();
        }
      });

    },

    sendUpdateDatesEvent(){
      if (this.onUpdate){
        this.onUpdate({
                $event: {
                dates: {
                  flyOut:this.startDate,
                  flyBack:this.endDate}
                }
            });
      }   
    },

    setStartDate(event) {
      this.startDate = event.date;
      this.sendUpdateDatesEvent();
    },

    setEndDate(event) {
      this.endDate = event.date;
      this.sendUpdateDatesEvent();
    }

  }

}
