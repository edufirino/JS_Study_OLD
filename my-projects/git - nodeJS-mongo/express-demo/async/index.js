console.log('before');
getUser(1,getRepositories1);

function displayCommits(commits){
    console.log(commits);
}

function getRepositories1(user){
    console.log(1);
    getRepositories(user.gitHubUserName,getCommits1);
}

function getRepositories(username,callback){
    console.log(2);
    setTimeout(()=>{
        console.log('Done!2');
        callback (['repo1','repo2','repo3']);
    },2000);
}

function getCommits1(repos){
    const repo=repos[0];
    getCommits(repo,displayCommits);      
}

console.log('after');
function getUser(id,callback){
    setTimeout(()=>{
        console.log('Done!1');
        callback ({id:id, gitHubUserName:'mosh'});
    },2000);
}

function getCommits(repo,callback){
    setTimeout(()=>{
        console.log('Done!3');
        callback (['commit1','commit2','commit3']);
    },2000);
}