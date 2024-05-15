const tweetsContainer = document.getElementById('tweets-container');

function postTweet() {
    const author = document.getElementById('author').value;
    const content = document.getElementById('content').value;

    if (author && content) {
        const tweetElement = document.createElement('div');
        tweetElement.className = 'tweet';

        const tweetAuthor = document.createElement('h3');
        tweetAuthor.textContent = author;

        const tweetContent = document.createElement('p');
        tweetContent.textContent = content;

        const tweetTimestamp = document.createElement('small');
        tweetTimestamp.textContent = new Date().toLocaleString();

        tweetElement.appendChild(tweetAuthor);
        tweetElement.appendChild(tweetContent);
        tweetElement.appendChild(tweetTimestamp);

        tweetsContainer.prepend(tweetElement);

        // Clear the input fields
        document.getElementById('author').value = '';
        document.getElementById('content').value = '';
    }
}
