# parcel-pyscript-starter

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/rjoydip/parcel-pyscript-starter/blob/master/LICENSE)
[![GitHub deployments](https://img.shields.io/github/deployments/rjoydip/parcel-pyscript-starter/github-pages?label=Deploy)](https://github.com/rjoydip/parcel-pyscript-starter/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/rjoydip/parcel-pyscript-starter/pulls)

Parcel + PyScript + TypeScript + Preact Starter

## Features

- HTML Includer
- PyScript
- Preact
- TypeScript
- Automatic deploy to gh-pages branch

## Demo

[Demo](https://rjoydip.github.io/parcel-pyscript-starter/)

## Quick start

#### `npm install/yarn install`:

Install the dependencies.

#### `npm run start/yarn start`:

Run the app, you can view the app by visiting `http://localhost:1234/`.

---

#### `npm run build/yarn build`:

Builds the website for production to the dist folder.

## Github Pages Deploy

If you want to deploy your website on gh-pages, you need to:
1. Check the branch name in the [`deploy.yml`](https://github.com/rjoydip/parcel-pyscript-starter/blob/master/.github/workflows/deploy.yml) file
2. In the `package.json` specify the following fields:
```json
"homepage": "https://%your-name%.github.io/%rep-name%",
"scripts": {
    "build": "parcel build src/index.html --public-url /%rep-name%/"
}
```
