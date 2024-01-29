const posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("No posts to delete");
            }
        }, 1000);
    });
}

// Example usage
createPost({ title: 'Post One', body: 'This is Post One' })
    .then(() => updateLastUserActivityTime())
    .then(updatedLastActivityTime => {
        console.log('Posts:', posts);
        console.log('Last Activity Time:', updatedLastActivityTime);
    })
    .then(() => deletePost())
    .then(() => {
        console.log('Remaining Posts:', posts);
    })
    .catch(error => {
        console.error('Error:', error);
    });
