# Basic NodeJS Starter Pack

Inspired from [js-stack-from-scratch](https://github.com/verekia/js-stack-from-scratch)

**Disclaimer**

*This is not intended to force anyone to use this repository to start their NodeJS apps. I wrote this with the intention to avoid the hassle of memorizing libs to start a NodeJS application*
*Web frameworks such as Express or React are not included since it will be up to the developers discretion to add those.*

## Libraries

The following are included out of the box:

* [Babel](https://babeljs.io/)
* [ESLint](https://eslint.org/)
* Airbnb coding standard and linter
* [Flow](https://flowtype.org/) - static type checker
* Testing using [Jest](https://facebook.github.io/jest/)
* Husky for git hooks

## Commands

| Command | Description |
| --- | --- |
| `yarn test` | Runs the code linter, static type checker and jest tests |
| `yarn start` | Starts the application |
| `yarn precommit` | Executes `test` script prior to a git commit |
| `yarn prepush` | Executes `test` prior to a git push |

## Installation


