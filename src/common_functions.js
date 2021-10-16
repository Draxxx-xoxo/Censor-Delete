const yaml = require('js-yaml');
const fs = require('fs');
const doc = yaml.load(fs.readFileSync( __dirname + '/censor_config.yml' ,'utf8'));

module.exports = {
    async censorWords() {
        return doc.censor.censor_words
    },

    async censorIgnoreUser() {
        return doc.censor.ignore_users
    },

    async censorIgnoreChannel() {
        return doc.censor.ignore_channels
    },


}