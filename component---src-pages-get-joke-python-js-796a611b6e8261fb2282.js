"use strict";(self.webpackChunktestim_mocks_examples=self.webpackChunktestim_mocks_examples||[]).push([[600],{8549:function(e,n,s){s.r(n),n.default="\nimport requests\nfrom config import key\n\n\ndef get_joke():\n    response = requests.get(\n        url=\"https://dad-jokes.p.rapidapi.com/random/joke\",\n        headers={\n            'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',\n            'x-rapidapi-key': key,\n        }\n    ).json()\n\n    joke = response['body'][0]\n\n    return f\"Your dad joke is: {joke['setup']} - {joke['punchline']}\"\n"}}]);
//# sourceMappingURL=component---src-pages-get-joke-python-js-796a611b6e8261fb2282.js.map