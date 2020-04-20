// Here are the dependencies we will be using.
const chalk = require('chalk');
const yargs = require('yargs');
const repos = require('./repos.js')

// Customize yargs version
yargs.version('1.0.0');

// This is the creation of the four main commands of this application

// I will walk through this first command, after the first time through, very small things will change in the other commands.


// This is the start to the yargs command creation method. In this first instance, we are creating the add command.
yargs.command({
  // Command will be used directly while running the application, 'node app.js add'.
  command: 'add',
  // Describe is just the description of the command, it's good to have a small detailing of what the command is. 
  describe: 'add a new repo',
  // Builder is the creation of new values within a yargs command. This is one created called 'title'.
  builder: {
    title: {
      describe: 'repo title',
      // Adding the demandOption allows some error catching as the user must return the title to be able to work with the right document.
      demandOption: true,
      type: 'string' // and we see 'title' is a string.
    },
    link: {
      describe: 'repo link',
      demandOption: true,
      type: 'string'
    }
  },
  // This outputs all of this new information to the handler, which controls the application.
  handler(argv) {
    repos.addrepo(argv.title, argv.link)
  }
})

// Create remove command. Note that you do not need the link argument.
yargs.command({
  command: 'remove',
  describe: 'Remove a repo',
  builder: {
      title: {
          describe: 'repo title',
          demandOption: true,
          type: 'string'
      }
  },
  handler(argv) {
      repos.removerepo(argv.title)
  }
})

// Create list command, Note that you do not need the link argument.
yargs.command({
  command: 'list',
  describe: 'List your repos',
  handler() {
      repos.listrepos() // Displays the array that has stored the newly created repos.
  }
})

// Create read command. Note that you do not need the link argument.
yargs.command({
  command: 'read',
  describe: 'Read a repo',
  builder: {
      title: {
          describe: 'repo title',
          demandOption: true,
          type: 'string'
      }
  },
  handler(argv) {
      repos.readrepo(argv.title)
  }
})

yargs.parse()