const {io} = require('../index');
const Bands = require('../models/bands_model')
const Band = require('../models/band_model')
const bands = new Bands();

bands.addBand(new Band('queen'));
bands.addBand(new Band('Metallica'));
bands.addBand(new Band('aerosmit'));
bands.addBand(new Band('gans and roses'));

console.log(bands)

io.on('connection', client => {
    console.log('cliente conectado');
    client.emit('active-bands', bands.getBands());
    client.on('disconnect', () => {
        console.log('cliente desconectado');
    }); 
    client.on('mensaje', (payload) =>{
        console.log('mensaje', payload);
        io.emit('mensaje',{admin: 'nuevo mensaje'});
    })

    client.on('vote-band', (payload) =>{
       console.log(payload);
       bands.voteBand(payload.id);
       io.emit('active-bands', bands.getBands());
    });

    client.on('add-band',(payload) =>{
        console.log(payload);
        bands.addBand(new Band(payload.name));
        io.emit('active-bands', bands.getBands());
    })

    client.on('delete-band', (payload) =>{
        bands.deleteBands(payload.id);
        io.emit('active-bands', bands.getBands());
    })
});