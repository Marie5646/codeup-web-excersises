
fetch('https://api.github.com/users/{username}/events/public', {headers: {'Authorization': GITHUBTOK}}).then((res) => {
        console.log('resolved!',res)
        return res.json();
    })
    .then((data)=> {
        console.log(data)
        return fetch('https://api.github.com/users');
     })
    .then((res) => {
        console.log('resolved!', res)
        return res.json
    })
    .catch((error) => {
            console.error(error);
    });

function getLastCommit(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUBTOK}}).
    then(res => res.json())
    .then(data => console.log(data[0].created_at))}

getLastCommit('Marie5646')
