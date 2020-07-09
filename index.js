'use strict';

/*handles requests and responses to GitHub API*/
function makeRequest() {
    console.log(`makeRequest activated`);
    let endpointUser = document.getElementById('username').value
    let requestAPI = 'https://api.github.com/users/'+endpointUser+'/repos'
    fetch(requestAPI)
        .then(response => response.json())
        .then(responseJson => createList(responseJson))
        .catch(error => {
            console.log(error)
            alert(`either that user does not exist, or my code still sucks`)
         });
};

/*handles form submission*/
function submitForm() {
    $('form').submit(event => {
        event.preventDefault();
        console.log(`submitForm activated`)
        makeRequest();
    });
};

/*creates list items for each search result*/
function createList(responseJson) {
    console.log(responseJson);
    console.log(`createList activated`);
    /*$('.hide').removeClass('.hide');*/
    $(`.results-list`).empty();
        for (let i=0; i < responseJson.length; i++) {
            console.log('creating list item');
            let repoURL = responseJson[i].html_url
            let repoName = responseJson[i].name
            $(`.results-list`).append(`<li>
            <h4>${repoName}</h4>
            <a href="${repoURL}">Click here for repository</a>
            </li>`);
    };
};

/*handles the app*/
function handleApp() {
    console.log(`SearchGitHub App is ready to rock`);
    $(submitForm);
}

$(handleApp);