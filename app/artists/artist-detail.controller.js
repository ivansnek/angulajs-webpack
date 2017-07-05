
class ArtistDetailCtrl {
    constructor($stateParams) {
        "ngInject"
        this.$stateParams = $stateParams;
        console.log(this.artist);
        
    }    
}

export default ArtistDetailCtrl
