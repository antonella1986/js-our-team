const cardsEl = document.querySelector(".cards")
const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "assets/img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "assets/img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "assets/img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "assets/img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "assets/img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "assets/img/female3.png"
    }
  ];

console.log(teamMembers);


function renderTeamMembers(membersArray, domEl) {
    for (let i = 0; i < membersArray.length; i++) {
        // prendo il membro corrente
        const thisMember = membersArray[i];
        // e lo stampo
        console.log(thisMember);
        
        // genero il codice HTML della card
        const markup = getMemberMarkup(thisMember)
        console.log(markup);
        // aggiungo il codice HTML generato dentro il DOM
        domEl.innerHTML += markup
    }
}

// richiamo la funzione per eseguire il rendering
renderTeamMembers(teamMembers, cardsEl)

function getMemberMarkup(memberObj) {
    // destrutturo l'oggetto
    const {name, role, email, img} = memberObj
    // e lo stampo
    console.log(name, role, email, img);
    
    const markup = `
        <div class="card col-4">
            <div class="card-body d-flex bg-dark text-light text-start p-0">
                <img src=${img} style="width: 30%;" alt="" class="card-mg-top me-3">
                <div class="mt-2">
                    <h3><strong>${name.toUpperCase()}</strong></h3>
                    <p>${role}</p>
                    <p class="text-info">${email}</p>
                </div>
            </div>
        </div>`

    // stampo il markup generato
    console.log(markup);
    // e restituisco il codice HTML
    return markup
}
