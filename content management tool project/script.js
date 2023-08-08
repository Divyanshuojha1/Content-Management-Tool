document.getElementById('blogForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the form data
  var formData = new FormData(this);

  // Send the form data to the server
  fetch('/api/blog', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Display the newly added blog post
    displayBlogPost(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  // Reset the form
  this.reset();
});

// Function for displaying a blog post on the page
function displayBlogPost(post) {
  var postContainer = document.createElement('div');
  postContainer.classList.add('blogPost');
  postContainer.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
    ${post.image ? `<img src="${post.image}" alt="Blog Image">` : ''}
    ${post.video ? `<video src="${post.video}" controls></video>` : ''}
  `;
  document.getElementById('blogPosts').appendChild(postContainer);
}
