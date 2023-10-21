// JavaScript code for your entire project

// Function to handle form submissions (post creation)
function submitPost(event) {
  event.preventDefault();
  
  const postContent = document.getElementById('post-content').value;

  if (!postContent) {
    alert('Please enter some content before posting.');
    return;
  }

  
  PostCreation(postContent);
}

function PostCreation(content) {
  setTimeout(() => {
    const success = Math.random() < 0.8;

    if (success) {
      alert('Post created successfully!');
      // Redirect to the main page 
      window.location.href = 'index.html';
    } else {
      alert('Post creation failed. Please try again later.');
    }
  }, 2000);}

// Function to handle liking a post
function likePost(event) {
  // Add your like functionality here
  alert('Liked the post!');
}

// Function to handle commenting on a post
function commentPost(event) {
  // Add your comment functionality here
  alert('Commented on the post!');
}

// Function to handle sharing a post
function sharePost(event) {
  // Add your share functionality here
  alert('Shared the post!');
}

// Event listeners for like, comment, and share buttons
const likeButtons = document.querySelectorAll('.like-button');
const commentButtons = document.querySelectorAll('.comment-button');
const shareButtons = document.querySelectorAll('.share-button');

likeButtons.forEach((button) => {
  button.addEventListener('click', likePost);
});

commentButtons.forEach((button) => {
  button.addEventListener('click', commentPost);
});

shareButtons.forEach((button) => {
  button.addEventListener('click', sharePost);
});



// Function to handle image uploads
function uploadImage() {
  const imageFile = document.getElementById('post-image').files[0];
  const imageCaption = document.getElementById('image-caption').value;

  // Check if an image is selected
  if (!imageFile) {
    alert('Please select an image to upload.');
    return;
  }

  ImageUpload(imageFile, imageCaption);
}

function ImageUpload(imageFile, caption) {
  setTimeout(() => {
    const success = Math.random() < 0.8; // Simulate success with an 80% chance

    if (success) {
      alert('Image uploaded successfully!');
      // Redirect to the main page (you should replace this with a real redirect)
      window.location.href = 'index.html';
    } else {
      alert('Image upload failed. Please try again later.');
    }
  }, 2000); }

// Function to fetch and display groups
function fetchGroups() {
  const groupsList = document.getElementById('groups-list');

 
  const groupsData = [
    { name: 'Group 1', imageUrl: 'group1.jpg' },
    { name: 'Group 2', imageUrl: 'group2.jpg' },
    { name: 'Group 3', imageUrl: 'group3.jpg' },
    // Add more groups as needed
  ];

  // Display groups
  groupsData.forEach(group => {
    const groupDiv = document.createElement('div');
    groupDiv.classList.add('group-item');
    groupDiv.innerHTML = `
      <img src="${group.imageUrl}" alt="${group.name}">
      <p>${group.name}</p>
    `;
    groupsList.appendChild(groupDiv);
  });
}

// Add event listeners for form submissions
document.getElementById('post-form').addEventListener('submit', submitPost);
document.getElementById('image-upload-form').addEventListener('submit', uploadImage);

// Fetch and display groups when the page loads
fetchGroups();

// Function to handle adding a comment to a post
function addComment(event) {
  event.preventDefault();

  // Get the comment input and post element
  const commentInput = event.target.parentElement.querySelector('.comment-input');
  const postElement = event.target.closest('.post');

  // Get the comment content
  const commentContent = commentInput.value;

  if (commentContent.trim() === '') {
    alert('Please enter a comment.');
    return;
  }

  // Create a new comment element
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.textContent = commentContent;

  // Add the comment to the comments section
  const commentsSection = postElement.querySelector('.comments');
  commentsSection.appendChild(commentElement);

  // Clear the comment input
  commentInput.value = '';
}

// Event listener for adding comments
const commentButtons = document.querySelectorAll('.comment-button');
commentButtons.forEach((button) => {
  button.addEventListener('click', addComment);
});

// Simulate fetching user data from the server
function fetchUserData() {
  // Replace this with your actual API request to fetch user data
  return {
    name: 'John Doe',
    avatarUrl: 'user-avatar.jpg',
    description: 'A passionate user of our platform.'
  };
}

// Function to update the user profile
function updateProfile() {
  const userData = fetchUserData();

  // Update the user's name
  const userNameElement = document.querySelector('.user-name');
  userNameElement.textContent = userData.name;

  // Update the user's avatar image
  const avatarImageElement = document.querySelector('.avatar-image');
  avatarImageElement.src = userData.avatarUrl;

  // Update the user's description
  const userDescriptionElement = document.querySelector('.user-description');
  userDescriptionElement.textContent = userData.description;
}

// Call the updateProfile function to populate user data
updateProfile();

// Simulate fetching group data from the server
function fetchGroupData() {
  // Replace this with your actual API request to fetch group data
  return [
    { name: 'Group 1', avatarUrl: 'group1.jpg' },
    { name: 'Group 2', avatarUrl: 'group2.jpg' },
    // Add more group data as needed
  ];
}

// Function to update the group list
function updateGroupList() {
  const groupData = fetchGroupData();
  const groupList = document.querySelector('.right-sidebar-links');

  groupData.forEach((group) => {
    const groupItem = document.createElement('li');
    groupItem.innerHTML = `
      <div class="group-item">
        <img src="${group.avatarUrl}" alt="${group.name}" class="group-avatar">
        <h3><a href="#" class="group-name">${group.name}</a></h3>
      </div>
    `;
    groupList.appendChild(groupItem);
  });
}

// Call the updateGroupList function to populate group data
updateGroupList();

  // JavaScript to toggle the 'new-post' class for indicators
        const storyIndicators = document.querySelectorAll('.story-indicator');

        setInterval(() => {
            storyIndicators.forEach(indicator => {
                indicator.classList.toggle('new-post');
            });
        }, 2000); // Toggle every 2 seconds (simulating new posts)

