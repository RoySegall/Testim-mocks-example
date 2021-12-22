const axios = require('axios');
const {getJoke} = require('../get-joke');
jest.mock('axios');

describe('Get joke', () => {
    let requestMock = jest.fn();

    beforeAll(() => {
        axios.request.mockImplementationOnce(requestMock);
    });

    it('Should return a joke number and invoke with the correct values', async () => {
        requestMock.mockResolvedValue({
            data: {
                body: [{
                    setup: 'Why Was Six Afraid of Seven',
                    punchline: 'Because Seven ate Nine!'
                }]
            }
        });

        const joke = await getJoke();
        expect(joke).toBe('Your dad joke is: Why Was Six Afraid of Seven - Because Seven ate Nine!');
        expect(requestMock).toBeCalledTimes(1);
        expect(requestMock).toBeCalledWith({
            "method": "GET",
            "url": "https://dad-jokes.p.rapidapi.com/random/joke",
            "headers": {
                "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
                "x-rapidapi-key": "your_key",
            },
        });
    });
});