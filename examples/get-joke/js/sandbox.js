const {getJoke} = require('./get-joke');

(async() => {
    console.log(await getJoke())
})();
