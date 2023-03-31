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
  console.log(name, email, phone, date, time);
  // Local Storage add
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("date", date);
  localStorage.setItem("time", time);
});
