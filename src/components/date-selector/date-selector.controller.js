export default function DateSelectorController() {
    return {

        changeDate(){
            if (this.onUpdate){
                this.onUpdate({
                    $event: {
                    date: this.date
                    }
                });
            }        
        }
    }
}
