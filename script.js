// inisilized the variavle
const getAcall = document.querySelector(".btn");

// Add Button Eventlisner
getAcall.addEventListener("click", () => {
  // selecting the eliment
  let name = document.querySelector(".name-js").value;
  let email = document.querySelector(".email-js").value;
  let phone = document.querySelector(".phone-js").value;
  let date = document.querySelector(".date-js").value;
  let time = document.querySelector(".time-js").value;
  // console.log(name, email, phone, date, time);
  // Local Storage add
  /*
    // local Storage pass by string
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("date", date);
  localStorage.setItem("time", time);
  */
  // local Storage pass by Object
  
// Creating a Object
  const User = {
    name: name,
    email: email,
    phone: phone,
    date: date,
    time: time,
  };
  // console.log(User);
  // let newUser = JSON.stringify(User);
  // localStorage.setItem(User.email, JSON.stringify(User));
  let display = document.querySelector(".dis");

  let li = document.createElement("li");
  li.className = "container";
  li.classList.add("dispaly-1");
  li.textContent = JSON.stringify(
    User.name + " - " + User.email + " - " + User.phone
  );
  li.style.listStyle = "none";
  li.style.color = "#fff";
  li.style.fontWeight = "bold";
  display.appendChild(li);
  // adding th Delete Button
  const delButton = document.createElement("button");
  delButton.textContent = "Delete";
  display.appendChild(delButton);
  // adding th Delete Button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  display.appendChild(editButton);
  // Delete Function
  delButton.addEventListener("click", () => {
    display.removeChild(li);
    display.removeChild(delButton);
    display.removeChild(editButton);
  });
  // Edit Function
  editButton.addEventListener("click", () => {
    display.removeChild(li);
    display.removeChild(delButton);
    display.removeChild(editButton);
    localStorage.removeItem(User.email);
    document.getElementById("usernameInputTag") = User.name;
    document.getElementById("emailInputTag") = User.email;
    document.getElementById("phoneInputTag") = User.phone;
  });
  // network or Axios call
  axios.post("https://crudcrud.com/api/ae15d3b718fc484185505d769e82ebb6/AppiointmentDetali",User)
  .then((response)=>{
    console.log(response);
  })
  .catch((error)=>{
    document.body.innerHTML=document.body.innerHTML+"<h4>Something Went Wrong</h4>"
    console.log(error);
  })
});
