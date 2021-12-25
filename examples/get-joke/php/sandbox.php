<?php

require_once "DadJokeService.php";

$dadJokeService = new DadJokeService();
Kint::dump($dadJokeService->getJoke());