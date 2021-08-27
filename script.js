//bookdetails object
display();
function bookDetails(name, author, genre) {
  this.name = name;
  this.author = author;
  this.genre = genre;
}

//To Check the genre

function genre() {
  let comedy = document.getElementById("comedy");
  let scifi = document.getElementById("scifi");
  let romantic = document.getElementById("romantic");

  console.log(comedy.value);
  console.log(scifi.value);
  console.log(romantic.value);

  if (comedy.checked) {
    return comedy.value;
  } else if (scifi.checked) {
    return scifi.value;
  } else if (romantic.checked) {
    return romantic.value;
  }
}
//function showNotes

// function shownotes() {
//   let tableBody = document.getElementById("tbody");
//   let localSessionObj = localStorage.getItem("bookDetails");

//   if (localSessionObj == null) {
//     var localSessionArr = [];
//   } else {
//     localSessionArr = JSON.parse(localSessionObj);
//   }

//   localSessionArr.array.forEach(element => {

//   });

// }

//Display function to display
function display() {
  let tableBody = document.getElementById("tbody");
  let localSessionObj = localStorage.getItem("bookDetails");

  if (localSessionObj == null) {
    var localSessionArr = [];
  } else {
    localSessionArr = JSON.parse(localSessionObj);
  }

  let UiString = "";

  localSessionArr.forEach((element) => {
    UiString += `
      <tr>
      
      <td>${element.name} </td>
      <td>${element.author}</td>
      <td>${element.genre} </td>
      </tr>
      `;
  });

  tableBody.innerHTML = UiString;
}

//adding protoype in display function to add book
display.prototype.add = function (book) {
  let tableBody = document.getElementById("tbody");
  let localSessionObj = localStorage.getItem("bookDetails");

  if (localSessionObj == null) {
    var localSessionArr = [];
  } else {
    localSessionArr = JSON.parse(localSessionObj);
  }

  localSessionArr.push(book);
  localStorage.setItem("bookDetails", JSON.stringify(localSessionArr));
  // console.log(localStorage.getItem("bookDetails"));
  display();
};
display.prototype.clear = function () {
  document.getElementById("bookname").value = "";

  document.getElementById("author").value = "";
};

//Flow Start from here

let submit = document.getElementById("sbmt");
console.log(submit);

//OnClick add buuton Button
submit.addEventListener("click", function (e) {
  e.preventDefault();
  let name = document.getElementById("bookname").value;
  let author = document.getElementById("author").value;

  //VALIDATING IF THE FORM IS FILLED OUT OR NOT
  //IF NOT CREATING AN ALERT

  if (name == "" || author == "") {
    let elemen = document.createElement("p");
    elemen.className = "alert alert-danger alert-dismissible  fade show";
    elemen.setAttribute("role", "alert");
    elemen.setAttribute("id", "alert");
    elemen.innerHTML = `<strong>Please fill all the fields !</strong>.
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;

    let container = document.getElementById("container");
    container.append(elemen);
    container.insertBefore(elemen, document.getElementById("myBookForm"));

    //IF NOT
  } else {
    let type = genre();

    let book = new bookDetails(name, author, type);

    let displayContent = new display();
    displayContent.add(book);
    displayContent.clear();
  }
});

//
