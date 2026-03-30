function show(page) {
  ["login","signup","dashboard"].forEach(p=>{
    document.getElementById(p).classList.add("hidden");
  });
  document.getElementById(page).classList.remove("hidden");
}

function signup(){
  const u = user.value;
  const p = pass.value;

  if(p.length < 6) return alert("Password too short");

  const code = API.signup(u, p);
  document.getElementById("recovery").innerText =
    "Save your recovery code: " + code;

  setTimeout(()=> show("login"), 4000);
}

function login(){
  const u = loginUser.value;
  const p = loginPass.value;

  if(API.login(u, p)){
    show("dashboard");
    loadTherapists();
    loadSessions();
  } else {
    alert("Login failed");
  }
}

function showTab(tab){
  ["therapists","book","sessions","crisis"].forEach(t=>{
    document.getElementById(t).classList.add("hidden");
  });
  document.getElementById(tab).classList.remove("hidden");
}

function loadTherapists(){
  const list = document.getElementById("list");
  const select = document.getElementById("therapistSelect");
  const filter = document.getElementById("filter").value;

  list.innerHTML="";
  select.innerHTML="";

  API.getTherapists()
    .filter(t => !filter || t.specialty === filter)
    .forEach(t=>{
      list.innerHTML += `
        <div class="card">
          <strong>${t.name}</strong><br>
          ${t.specialty}<br>
          ⭐ ${t.rating}
        </div>`;
      select.innerHTML += `<option>${t.name}</option>`;
    });
}

function confirmBooking(){
  document.getElementById("paymentBox").classList.remove("hidden");
}

function pay(){
  const session = {
    therapist: therapistSelect.value,
    type: document.getElementById("type").value,
    date: document.getElementById("date").value,
    rating: null
  };

  API.bookSession(session);
  alert("Payment successful");

  loadSessions();
}

function loadSessions(){
  const div = document.getElementById("sessionList");
  div.innerHTML="";

  API.getSessions().forEach((s, i)=>{
    div.innerHTML += `
      <div class="card">
        ${s.therapist} - ${s.type}<br>
        ${s.date}<br>
        <button onclick="rate(${i})">Rate</button>
      </div>`;
  });
}

function rate(i){
  const r = prompt("Rate 1-5");
  API.rateSession(i, r);
  alert("Feedback saved");
  loadSessions();
}