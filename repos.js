// Dependencies.
const fs = require('fs')
const chalk = require('chalk')

// This function creates the loadrepos() command that allows us to create repos if there is a title and a link. It also double checks to make sure that there's no other repo already named what was put and returns information if that is the case.
const addrepo = (title, link) => {
    const repos = loadrepos()
    const duplicaterepo = repos.find((repo) => repo.title === title)

    if (!duplicaterepo) {
        repos.push({
            title: title,
            link: link
        })
        saverepos(repos)
        console.log(chalk.green.inverse('New repo added!'))
    } else {
        console.log(chalk.red.inverse('repo title taken!'))
    }
}

// This is the logic to delete the repo that was mentioned in the remove command. 
const removerepo = (title) => {
    const repos = loadrepos()
    const reposToKeep = repos.filter((repo) => repo.title !== title)

    if (repos.length > reposToKeep.length) {
        console.log(chalk.green.inverse('repo removed!'))
        saverepos(reposToKeep)
    } else {
        console.log(chalk.red.inverse('No repo found!'))
    }    
}

// This is the logic to be able to list the repos currently added. 
const listrepos = () => {
    const repos = loadrepos()

    console.log(chalk.inverse('Your repos'))

    repos.forEach((repo) => {
        console.log(repo.title)
    })
}

// This is the logic that allows one to read a certain repo defined by their title.
const readrepo = (title) => {
    const repos = loadrepos()
    const repo = repos.find((repo) => repo.title === title)

    if (repo) {
        console.log(chalk.inverse(repo.title))
        console.log(repo.link)
    } else {
        console.log(chalk.red.inverse('repo not found!'))
    }
}

// This is the logic that saves the info of title and link to a json file. 
const saverepos = (repos) => {
    const dataJSON = JSON.stringify(repos)
    fs.writeFileSync('repos.json', dataJSON)
}

// This is the logic that reads the repos from the json file to see what is in it. 
const loadrepos = () => {
    try {
        const dataBuffer = fs.readFileSync('repos.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

// This exports all of our functions into nice small methods.
module.exports = {
    addrepo: addrepo,
    removerepo: removerepo,
    listrepos: listrepos,
    readrepo: readrepo
}