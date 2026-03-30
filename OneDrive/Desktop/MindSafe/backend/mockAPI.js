const API = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  sessions: JSON.parse(localStorage.getItem("sessions")) || [],

  signup(user, pass){
    const recoveryCode = "RC-" + Math.floor(Math.random()*100000);
    this.users.push({ user, pass, recoveryCode });
    localStorage.setItem("users", JSON.stringify(this.users));
    return recoveryCode;
  },

  login(user, pass){
    return this.users.find(u => u.user === user && u.pass === pass);
  },

  getTherapists(){
    return [
      { name: "Dr. Kim", specialty: "Anxiety", rating: 4.8 },
      { name: "Dr. Amina", specialty: "Trauma", rating: 4.6 }
    ];
  },

  bookSession(session){
    this.sessions.push(session);
    localStorage.setItem("sessions", JSON.stringify(this.sessions));
  },

  getSessions(){
    return this.sessions;
  },

  rateSession(index, rating){
    this.sessions[index].rating = rating;
    localStorage.setItem("sessions", JSON.stringify(this.sessions));
  }
};