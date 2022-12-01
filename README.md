# <center>UI-KIOSK</center>

<center>

![GitHub package.json version](https://img.shields.io/github/package-json/v/UniversityOfGdanskProjects/UI-KIOSK?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/UniversityOfGdanskProjects/UI-KIOSK?logo=typescript&style=for-the-badge)
![Netlify](https://img.shields.io/netlify/9aef6243-0742-42b4-9636-049204e0bbed?logo=netlify&style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/UniversityOfGdanskProjects/UI-KIOSK/react?color=green&logo=react&style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/UniversityOfGdanskProjects/UI-KIOSK/react-hook-form?color=red&logo=react-hook-form&style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/UniversityOfGdanskProjects/UI-KIOSK/react-router-dom?color=yellow&logo=react-router&style=for-the-badge)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/UniversityOfGdanskProjects/UI-KIOSK/dev/cypress/master?color=darkgreen&logo=cypress&style=for-the-badge)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/UniversityOfGdanskProjects/UI-KIOSK/dev/jest/master?color=pink&logo=jest&style=for-the-badge)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/UniversityOfGdanskProjects/UI-KIOSK/dev/typescript/master?color=darkblue&logo=typescript&style=for-the-badge)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/UniversityOfGdanskProjects/UI-KIOSK/dev/vite/master?color=brown&logo=vite&style=for-the-badge)

</center>

## Description

UI-KIOSK is a front-end project made for University of Gdańsk. It will be used with an information kiosk located outside of MFI building.

### Technologies

For our project, we use:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [React-hook-form](https://react-hook-form.com/)
- [React-router](https://reactrouter.com/en/main)
- [Cypress](https://www.cypress.io/)
- [Jest](https://jestjs.io/)

### Bundler

We are using [Vite](https://vitejs.dev/) as our bundler.

### Production site

We deploy our project [here](https://mfi-kiosk.netlify.app/).

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

### Start server

```console
$ yarn start
```

By default, the server starts on port 3000.

### Build for production

```console
$ yarn build
```

### Jest tests

```console
$ yarn test
```

### Cypress E2E tests

```console
$ yarn cy:e2e
```
