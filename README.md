## About The Project

### Demonstration

[![Product Demonstation][product-demo]](https://caucus-app.herokuapp.com/)

<br/>

### Collaborative Code Editor

[![Product Name Screen Shot][product-screenshoti]](https://caucus-app.herokuapp.com/)

|                                       Login Page                                       |                                   Navigate Rooms Page                                   |
| :------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: |
| [![Product Name Screen Shot][product-screenshotii]](https://caucus-app.herokuapp.com/) | [![Product Name Screen Shot][product-screenshotiii]](https://caucus-app.herokuapp.com/) |

<br />

### Built With

- [React](https://reactjs.org/docs/getting-started.html)
- [Material UI](https://material-ui.com/getting-started/installation/)
- [yjs](https://yjs.dev/)

Written in TypeScript ♥

## Getting Started

Follow the instructions to set up the project on your local machine.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Fork the repo(required), a star is also appretiated but optional :P

2. Clone the forked repo

   ```sh
   git clone https://github.com/{your-github-username}/caucus.git
   ```

   example : `git clone https://github.com/Rishabh-malhotraa/caucus.git`

3. Install NPM packages

   ```sh
   npm run install-modules
   ```

4. Start the react and nodejs server concucrrently

   ```sh
   npm run dev
   ```

### Setting up DATABASE

To setup the database with mockdata, follow this [guide](/Setting%20up%20Database.md)

### Execute Code

To allow cuacus to execute code, you need to get your api keys from [JDoodle](https://www.jdoodle.com/) and add them to the `.env` file
Update: I have included API keys from a dummy account, you can get your own also from JDoodle, the keys are restricited to 200 executions per day, and is visible to everyone, you can get your own private key at JDOODLE

```text
JDOODLE_CLIENTID=get_your_key
JDOOLDE_CLIENTSECRET=get_your_key
```
