import * as React from "react";
import "../../css/index.scss";
import CodeViewer from "../../componenets/CodeViewer";
import {Helmet} from "react-helmet";

const javascript = `
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
        return \`Your dad joke is: \${setup} - \${punchline}\`
    }).catch(e => {
        console.log(e);
    });
}
`;

const php = `
function getJoke() {
  global $key;

  $client = new Client(['base_uri' => 'https://dad-jokes.p.rapidapi.com']);

  $options = [
    'headers' => [
      'x-rapidapi-host' => 'dad-jokes.p.rapidapi.com',
      'x-rapidapi-key' => $key,
    ],
  ];

  $response = json_decode($client->get('random/joke', $options)->getBody()->getContents());
  $jokeData = $response->body[0];

  return "Your dad joke is: {$jokeData->setup} - {$jokeData->punchline}";
}
`;

const IndexPage = () => {
  return <main className="bg-neutral-100 w-100 h-screen flex flex-row w-screen justify-center items-center">
    <Helmet title="get-joke" />
    <CodeViewer codes={{javascript, php}} filename="get-joke" />
  </main>
}

export default IndexPage
