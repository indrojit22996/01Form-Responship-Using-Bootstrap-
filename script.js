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

  const User = {
    name: name,
    email: email,
    phone: phone,
    date: date,
    time: time,
  };
  // console.log(User);
  // let newUser = JSON.stringify(User);
  localStorage.setItem("User Detail", JSON.stringify(User));
  let display = document.querySelector(".dis");

  let li = document.createElement("li");
  li.className = "container";
  li.classList.add("dispaly-1");
  li.textContent = JSON.stringify(User);
  li.style.listStyle = "none";
  li.style.color = "#fff";
  li.style.fontWeight = "bold";
  display.appendChild(li);
});
