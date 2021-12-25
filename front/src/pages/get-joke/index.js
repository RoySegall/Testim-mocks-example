import * as React from "react";
import CodeViewer from "../../componenets/CodeViewer";

const javascript = `
const axios = require('axios');
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
class DadJokeService {

  public $client;

  public function __construct() {
    $this->client = new Client([
      'base_uri' => 'https://dad-jokes.p.rapidapi.com',
      'timeout' => 2.0,
    ]);
  }

  public function getJoke() {
    global $key;
    $options = [
      'headers' => [
        'x-rapidapi-host' => 'dad-jokes.p.rapidapi.com',
        'x-rapidapi-key' => $key,
      ],
    ];

    $response = json_decode($this->client->get('random/joke', $options)->getBody()->getContents());
    $jokeData = $response->body[0];

    return "Your dad joke is: {$jokeData->setup} - {$jokeData->punchline}";
  }

}
`;

const python = `
import requests
from config import key


def get_joke():
    response = requests.get(
        url="https://dad-jokes.p.rapidapi.com/random/joke",
        headers={
            'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
            'x-rapidapi-key': key,
        }
    ).json()

    joke = response['body'][0]

    return f"Your dad joke is: {joke['setup']} - {joke['punchline']}"
`

const IndexPage = () => <CodeViewer codes={{javascript, php, python}} filename="get-joke" />;

export default IndexPage
