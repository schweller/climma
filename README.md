
**climma** is the weather channel for your terminal.

## Features

- Supports Openweathermap for now
- TypeScript types (at least some part of it)

## Installation

`npm install -g climma`

## Usage

`$ climma <city>`

When running `climma` for the first time it'll create `.climmarc` on the user's $HOME directory and exit the program.
Afterwards, edit it with the credentials for your API:

1. Create an account on Openweathermap and get your API key
2. Update `$HOME/.climmarc`:

```bash
API_KEY=YOUR_KEY_HERE
```

## Roadmap

- [ASCII for Conditions & rendering with Ink](https://github.com/schweller/climma/tree/render-with-ink)  
- Support for multiple providers
- Tuning configuration for metric system and other informations
- Testing with Jest
- Autoformatting with Prettier

## Contributing

Feel free to fork and open a Pull Request.
