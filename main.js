const cardsEl = document.querySelector(".cards")
const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
  ];

console.log(teamMembers);


function renderTeamMembers(membersArray, domEl) {
    for (let i = 0; i < membersArray.length; i++) {
        const thisMember = membersArray[i];
        console.log(thisMember);
        
        // funzione che restituisce il markup
        const markup = getMemberMarkup(thisMember)
        console.log(markup);
        
        domEl.innerHTML += markup
    }
}

renderTeamMembers(teamMembers, cardsEl)

function getMemberMarkup(memberObj) {
    // destrutturazione dell'oggetto
    const {name, role, email, image} = memberObj
    console.log(name, role, email, image);
    
    const markup = `
        <div class="card col-4">
            <img src="${image}" style="width: 100px;" alt="" class="card-mg-top">
            <div class="card-body bg-dark text-light">
                <h3>"${name}"</h3>
                <p>"${role}"</p>
                <p class="text-primary">"${email}"</p>
            </div>
        </div>`

    console.log(markup);
    return markup
}
