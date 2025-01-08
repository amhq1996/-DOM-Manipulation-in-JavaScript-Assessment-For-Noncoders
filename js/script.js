// This function should retrieve all the project objects from projects array.
// It should then traverse over the array to create individual cards displaying each project details.

function loadProjects() {
  // Write your code here
    // Step 1: Retrieve all the project objects from the projects array by creating a variable that holds the reference to the projects array.
    var allProjects = projects;

  // Step 2: Get the HTML element with the id "projects" by creating a variable that holds the reference to the HTML element with the id "projects".
   var elementProjects = document.getElementById('projects');

  // Step 3: Clear the HTML content inside the projects element by making use of innerHTML method
  elementProjects.innerHTML = ""; 

  // Step 4: Traverse over the projectObjects array (you can use for loop for traversal over each project in the array)
   for (let i= 0; i < allProjects.length; i++){
    // Step 5: Get the project at index i
    var project = allProjects[i];
  
    // Step 6: Append a new card to the projects element with project details. For each project, you can use a new card by creating it using HTML string concatenation and adding to the "projects" element.
    
    elementProjects.innerHTML += 
    "<div class='card'>" +  
    "<img src='" +   
    project["image"] +     
    "'>" +     
    "<span>" +    
    project["title"] +   
    "</span>" +    
    "<span>" +      
    project["description"] +    
    "</span>" +   
    "</div>";
  }
}

// This function should create a new project by retrieving details from the form.
// The project is then added to the projects array and displayed.
function saveNewProject() {

  // Write your code here
  // Get the new project details by using the DOM elements 
  var newTitle = document.getElementById('title').value;
  var newDescription = document.getElementById('desc').value;
  var newImage = document.getElementById('image').value;

  // Create a new project object
  var newProjects = {
    "title": newTitle,
    "description":newDescription,
    "image":newImage,
  }
  // Add the new project object to the projects array 
  projects.push(newProjects);

  // Load the projects after adding the new project
  loadProjects();

  // Clear the values of the New Project Details Form after adding the new project
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";
}
