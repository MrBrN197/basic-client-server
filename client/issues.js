const fetch = require('node-fetch');

const port = 8080;
const baseUrl = `http://localhost:${port}/issues`

const headers = {'content-type': 'application/json'};

function getIssue(args) {
  const { id } = args;
  const issue = fetch(`${baseUrl}/${id}`)
    .then(resp => resp.json())
    .then( issue => console.log('created new issue', issue));
}

function updateIssue(args) {
  const { id, description, title } = args;
  const body = JSON.stringify({
    id,
    description,
    title
  })
  return fetch(baseUrl, {
    method: 'PATCH',
    headers,
    body
  }).then(() => console.log(`updated issue #${id}`))
}

function deleteIssue(args) {
  const { id } = args;
  const body = JSON.stringify({id});
  fetch(baseUrl, {
    method: 'DELETE',
    headers,
    body
  }).then(() => console.log(`deleted issue #${id}`))
}

function createIssue(args) {
  const { title, description } = args;
  const body = JSON.stringify({title, description})
  return fetch(baseUrl, {
    method: 'POST',
    headers,
    body
  });
}

module.exports = {
  getIssue,
  updateIssue,
  deleteIssue,
  createIssue,
}