import requests
from .config import key


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
