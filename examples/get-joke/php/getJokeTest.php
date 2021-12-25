<?php

use PHPUnit\Framework\TestCase;
use \GuzzleHttp\Psr7\Response;
use \GuzzleHttp\Client;

require_once "DadJokeService.php";

class getJokeTest extends TestCase {

  public function testGetJoke(): void {
    $jsonContents = json_encode([
      'body' => [[
        'setup' => 'Why Was Six Afraid of Seven',
        'punchline' => 'Because Seven ate Nine!',
      ]]
    ]);
    $response = new Response(200, ['Content-Type' => 'application/json'],
      $jsonContents
    );

    $clientMock = $this->getMockBuilder(Client::class)->getMock();
    $clientMock->method('get')->willReturn($response);

    $dadJokeService = new DadJokeService();
    $dadJokeService->client = $clientMock;
    $this->assertEquals(
      $dadJokeService->getJoke(),
      'Your dad joke is: Why Was Six Afraid of Seven - Because Seven ate Nine!'
    );
  }
}