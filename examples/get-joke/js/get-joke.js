const axios = require('axios').default;
const {key} = require('./config.js')

function getJoke() {

    const options = {
        method: 'GET',
        url: 'https://dad-jokes.p.rapidapi.com/random/joke',
        headers: {
            'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
            'x-rapidapi-key': key
        }
    };

    return axios.request(options).then(function (response) {
        const {setup, punchline} = response.data.body[0];
        return `Your dad joke is: ${setup} - ${punchline}`

    }).catch(e => {
        console.log(e);
    });
}

module.exports = {getJoke}
