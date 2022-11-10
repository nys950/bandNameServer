class Bands_models{
    constructor() {
        this.bands =[];
    }

    addBand(band = new Bands_models()){
        this.bands.push(band)
    }

    getBands(){
        return this.bands;
    }

    deleteBands(id = ''){
        this.bands = this.bands.filter(b => b.id  !== id);
        return this.bands;
    }

    voteBand(id =''){
        this.bands = this.bands.map( b =>{
            if (b.id === id){
                b.votos++
                return b;
            }else {
                return b;
            }
        })
    }


}

module.exports = Bands_models;