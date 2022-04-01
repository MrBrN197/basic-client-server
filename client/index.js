const { 
  getIssue,
  createIssue, 
  updateIssue,
  deleteIssue
} =  require('./issues');

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
  .command('create', 'create an issue', {
    title: {type: '', demmandOption: true},
    description: {type: '', demandOption: true}
  }, createIssue)
  .command('read', 'read an issue', { id: { type: 'number', demmandOption: true}}, getIssue)
  .command('update', 'update an issue', {
      id: { demmandOption: true, type:  'number'},
      title: { type: 'string'},
      description: {type: 'string'}
    }, updateIssue)
  .command('delete', 'delete an issue', { id: {type: 'number', demmandOption: true } }, deleteIssue)
 .argv;
