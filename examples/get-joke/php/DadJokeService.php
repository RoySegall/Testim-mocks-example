<?php

require_once "./vendor/autoload.php";
include_once "./config.php";

use GuzzleHttp\Client;

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