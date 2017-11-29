# Basic NodeJS Starter Pack

Inspired from [js-stack-from-scratch](https://github.com/verekia/js-stack-from-scratch)

**Disclaimer**

*This is not intended to force anyone to use this repository to start their NodeJS apps. I wrote this with the intention to avoid the hassle of memorizing libs to start a NodeJS application.`*
*Web frameworks such as Express or React are not included since it will be up to the developers discretion to add those.*

## Libraries

The following are included out of the box:

* [Babel](https://babeljs.io/)
* [ESLint](https://eslint.org/)
* Airbnb coding standard and linter
* [Flow](https://flowtype.org/) - static type checker
* Testing using [Jest](https://facebook.github.io/jest/)
* Husky for git hooks

## Requirements

* node `^8.0.0`
* yarn `^1.3.0` | npm `^5.5.0`

## Installation

You can install this pack to your own machine by doing the following:

```
$ git clone https://github.com/jhnferraris/nodejs-starter-pack <some-node-project>
$ cd <some-node-project>
```

You need to update the remote url of the repository so it won't push to this repository

```
$ git remote set-url origin <your-own-node-repo-url>
```

**OR**

You can just simply fork this repository.

When your repository is all set, install the dependencies:

```
$ yarn
```

## Running your application

By default, the command is:

```
$ yarn start
```

But you can change it based on your flavor.

## Commands

| Command | Description |
| --- | --- |
| `yarn test` | Runs the code linter, static type checker and jest tests |
| `yarn start` | Starts the application |
| `yarn precommit` | Executes `test` script prior to a git commit |
| `yarn prepush` | Executes `test` prior to a git push |
| `yarn prod:build` | Builds a "production" ready code at `\lib\`|



