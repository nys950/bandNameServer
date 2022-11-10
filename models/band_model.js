const { v4: uuidv4 } = require('uuid');

class Band_model{
    constructor(name = 'no-name') {

        this.id = uuidv4(); //identificador unico
        this.name = name;
        this.votos = 0;
    }
}

module.exports = Band_model;