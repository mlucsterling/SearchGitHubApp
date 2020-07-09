'use strict';

/*global variables*/
let endpointUser = document.getElementById(`username`).value
let requestAPI = `https://api.github.com/users/` + endpointUser + `/repos`
const APIKey = `94bcfc7aa83ca4956aad05a14a7008722adcacfc`

/*handles requests and responses to GitHub API*/
function makeRequest() {
    console.log(`makeRequest activated`);

    fetch(requestAPI)
        .then(response => response.json())
        .then(responseJson => createList(responseJson))
        .catch(error => alert(`either that user does not exist, or my code still sucks`));
};

/*handles form submission*/
function submitForm() {
    $('form').submit(event => 
        event.preventDefault());
        console.log(`submitForm activated`)
        makeRequest();
    };

/*creates list items for each search result*/
function createList() {
    console.log(responseJson);
    console.log(`createList activated`);

    $(`.results-container`).empty();
        for (let i=0; i < json.message; i++) {
            $(`.results-container`).append(`<ul>
            <h4>${reponame}</h4>
            <a href="${repoURL}">Click here for repository</a>
            </ul>`)
    };
};

/*handles the app*/
function handleApp() {
    console.log(`SearchGitHub App is ready to rock`);
    
    $(createList);
}

$(handleApp);