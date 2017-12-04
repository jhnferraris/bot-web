# Bot Content Designer Web

## Requirements

* node `^8.0.0`
* yarn `^1.3.0` | npm `^5.5.0`

## Installation

Install the dependencies:

```
$ yarn
```

## Running on a development environment

Open 2 terminals, on the first terminal run:

```
$ yarn start
```

on the other terminal, Execute

```
$ yarn dev:wds
```

## Deployment

### Pre-requisites

* [pm2](https://github.com/Unitech/pm2)

### Execution

On your remote server, execute the following commands

```
$ yarn prod:build
$ yarn prod:start
```
