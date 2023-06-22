//LIKE BUTTON
//Adds 1 like (++) everytime the button is clicked andn updates the storage.
//JSON session storage is used to update and retrieve the data.
let likeCount = 0;

function addLike() {
  likeCount++;

  const likeCountElement = $('#like-count');

  likeCountElement.text(`${likeCount} Likes`);

  updateLikeStorage();
}

$('#like-form').on('click', function(event) {
  addLike();
  event.preventDefault();
});


function updateLikeStorage() {    
  sessionStorage.setItem('likeCount', JSON.stringify(likeCount));
}

function retrieveLikeStorage() {
  const storedLikeCount = sessionStorage.getItem('likeCount');
  if (storedLikeCount) {
    likeCount = JSON.parse(storedLikeCount);
    const likeCountElement = $('#like-count');
    likeCountElement.text(`${likeCount} Likes`);
  }
}

retrieveLikeStorage();

// SAVE4LATER 
//The user adds a title for the items they are saving so they have a easy reference. The saved item is added to the array.
//JSON session storage is used and the displaySaved function is called.
//It display a message if no items are saved
//Creates list elements for the saved items and the user can click on it to navigate to the saved item on the site.


let savedArray = [];

function addSave() {
  let title = prompt("Enter a title:");

  let savedObject = {
    title: title,
    link: window.location.href
  };

  savedArray.push(savedObject);

  updateStorage();
  displaySaved();

  let savedItemCount = savedArray.length;
  alert(`You have ${savedItemCount} items in your Saved For List.`);
}


let saveButtons = document.querySelectorAll(".save-btn");

saveButtons.forEach(function(button) {
  button.addEventListener('click', addSave);
});

retrieveStorage();
displaySaved();

function displaySaved() {
  let saveListContent = $('#save-list');
  saveListContent.innerHTML = '';

  if (savedArray.length === 0) {
    saveListContent.innerHTML = 'No items saved.'; 
    return;
  }

  for (let i = 0; i < savedArray.length; i++) {
    let save = savedArray[i];

    let listItem = document.createElement('li');
    let linkElement = document.createElement('a');

    linkElement.href = save.link;
    linkElement.textContent = save.title;

    listItem.append(linkElement);
    saveListContent.append(listItem);
  }
}

function updateStorage() {
  sessionStorage.setItem('savedArray', JSON.stringify(savedArray));
}

function retrieveStorage() {
  const storedSavedArray = sessionStorage.getItem('savedArray');
  if (storedSavedArray) {
    savedArray = JSON.parse(storedSavedArray);
  }
}


//COMMENT FUNCTIONAILTY 
//Code inspiration was from the book cataloge task.
//Adds the user info and comment and displays it. Forms are reset on submission and delete functionailty is added.
//JSON storage is used.
let commentArr = [];    

function addComment() {    
  
  let name = $('#name').val();
  let email = $('#email').val()
  let comment = $('#comment').val();
  

  const commentOBJ = { name: name, email: email, comment: comment};

  commentArr.push(commentOBJ);

  updateCommentStorage();
  displayComment();
  resetForm();
}

function resetForm() {
  $('#comment-form')[0].reset();
}

function displayComment() {
  let commentListContent = $('#comment-list');
  commentListContent.html('');

  if (commentArr.length === 0) {     
    commentListContent.html('No comments added.');
    return;
  }

  for (let i = 0; i < commentArr.length; i++) {    
    let comment = commentArr[i];

    let listItem = document.createElement('li');

    listItem = $('<li>').html(
      `Name: ${comment.name}<br>
      Email: ${comment.email}<br>
      Comment: ${comment.comment}<br>
      
      <button onclick="deletecomment(${i})">Delete</button>`
    );
    commentListContent.append(listItem);
  }
}

function deletecomment() {     
  commentArr.splice(0, 1);

  updateCommentStorage();
  displayComment();
}

function updateCommentStorage() {    
  sessionStorage.setItem('commentArr', JSON.stringify(commentArr));
}

function retrieveCommentStorage() {    
  const storedCommentList = sessionStorage.getItem('commentArr');
  if (storedCommentList) {
    commentArr = JSON.parse(storedCommentList);
  }
}

$('.commentbtn').on('click', addComment);


retrieveCommentStorage();
displayComment();


//CONTACT US FUNCTIONAILTY 
//Saves the user contact info for an admin to get in touch at a later date
//The user receives an alert to say they will be contacted shortly.
//Forms are reset on submission
let ContactsArr = [];    

function addUserContact() {    
  let name = $('#name-cont').val();
  let email = $('#email-cont').val();
  let comment = $('#comment-cont').val();
  

  const contactOBJ = { name: name, email: email, comment: comment};

  ContactsArr.push(contactOBJ);

  updateContactStorage();
  resetContactForm();

  let contactsCount = ContactsArr.length;
  alert(`Thank you ${name}! We will be in touch shortly!`);
}

function resetContactForm() {
  $('#contact-form')[0].reset();
}


function updateContactStorage() {    
  sessionStorage.setItem('ContactsArr', JSON.stringify(ContactsArr));
}

function retrieveContactStorage() {    
  const storedContactsList = sessionStorage.getItem('ContactsArr');
  if (storedContactsList) {
    ContactsArr = JSON.parse(storedContactsList);
  }
}

$('#contactbtn').on('click', addUserContact);

retrieveContactStorage();

