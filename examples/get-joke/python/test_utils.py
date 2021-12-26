from unittest.mock import patch
from .utils import get_joke


@patch('requests.get')
def test_foo(mock_api_call):
    mock_api_call.return_value.json.return_value = {
        'body': [{
            'setup': 'Why Was Six Afraid of Seven',
            'punchline': 'Because Seven ate Nine!'
        }]
    }
    assert 'Your dad joke is: Why Was Six Afraid of Seven - Because Seven ate Nine!' == get_joke()
