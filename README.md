# FOSS
File Organization Synergy System is a simple way to use node in order to organize links to repositories.

## Installation
1. Clone the repository or download the zip file and extract the file.
2. Open the terminal within the application and use `npm i chalk yargs`.
3. Enjoy!

## Commands

### There are four main commands to use this application:

- Add a new repository!
`node app.js add --title='FrontEnd' --link='https://github.com/whooshoo/frontend'`

- List the current repositories saved!
`node app.js list`

- Read the link of a repo!
`node app.js read --title="FrontEnd"`

- Delete a repository!
`node app.js remove --title="FrontEnd"`
