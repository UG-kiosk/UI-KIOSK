# UI-KIOSK

![GitHub package.json version](https://img.shields.io/github/package-json/v/UniversityOfGdanskProjects/UI-KIOSK?style=for-the-badge)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/UniversityOfGdanskProjects/UI-KIOSK/dev/vite/master?color=brown&logo=vite&style=for-the-badge)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/UniversityOfGdanskProjects/UI-KIOSK/dev/typescript/master?color=darkblue&logo=typescript&style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/UniversityOfGdanskProjects/UI-KIOSK/react?color=green&logo=react&style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/UniversityOfGdanskProjects/UI-KIOSK/react-redux?color=purple&label=redux&logo=redux&style=for-the-badge)

## Description

UI-KIOSK is a front-end project made for the University of Gdańsk. It will be used in the information kiosk located outside of the MFI building.

### Technologies

UI-KIOSK uses:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)

### Bundler

This project is bundled by [Vite](https://vitejs.dev/).

### Tests

This app uses [Jest](https://jestjs.io/) for unit testing and [Cypress](https://www.cypress.io/) for end-to-end testing.

### CI & CD

CI pipeline runs on every pull request to any branch, while CD runs on every merge to `master` branch.

### Production site

You can check the deployment for [development](https://ui-kiosk-dev.onrender.com) and [production](https://ui-kiosk-prod.onrender.com).

---

## Setup

In order to run this app, you need to have [Node](https://nodejs.org/en/) installed on your environment. You can check your Node version by running following command:

```console
$ node --version
v18.12.1
```

You also need [Yarn](https://yarnpkg.com/) to run scripts, add dependencies and install packages:

```console
$ yarn --version
1.22.19
```

---

## How to work with this repository

### Install

Clone repo:

```console
$ git clone https://github.com/UniversityOfGdanskProjects/UI-KIOSK.git
```

or

```console
$ git clone git@github.com:UniversityOfGdanskProjects/UI-KIOSK.git
```

After cloning:

```console
$ cd UI-KIOSK
$ yarn install
```

### Start development server

```console
$ yarn start
```

By default, the server starts on port 3000.

### Build for production

```console
$ yarn build
```

### Run unit tests

```console
$ yarn test
```

### Run end-to-end tests

```console
$ yarn cy:e2e
```

---

## Contribution

In order to contribute to the repository, check out the [contribution guide](docs/CONTRIBUTING.md).
