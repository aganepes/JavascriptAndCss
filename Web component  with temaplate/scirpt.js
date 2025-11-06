const template= document.createElement('template');

template.innerHTML=`
    <style>
        h3{
            color:coral;
        }
        .user-card{
            font-family = 'Arial', sans-serif;
            background:#f4f4f4;
            width:500px;
            display:grid;
            grid-template-columns:1fr 2fr;
            grid-gap:10px;
            margin-bottom:15px;
            border-bottom:darkorchid 5px solid; 
        }
        .user-card img{
            width:100%;
            height:170px;
            transition:all 200ms ease-in-out;
        }
        .user-card button{
            cursor:pointer;
            background:darkorchid;
            color:#fff;
            border:0;
            border-radius:5px;
            padding:5px 10px;
        }
        .user-card .hidden{
            display:none;
        }
    </style>
    <div class="user-card">
    <img  alt="This user image"/>
    <div>
        <h3></h3>
        <div class='info'>
        <p>Email: <slot name='email'></slot></p>
        <p>Phone: <slot name='phone'></slot></p>
        </div>
        <button id="toggle-info">Hide info </button>
    </div>
    </div>
`

class UserCard extends HTMLElement {
    constructor(){
        super();
        
        this.attachShadow({'mode':'open'});

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        this.shadowRoot.querySelector('h3').textContent=this.getAttribute('name');
        this.shadowRoot.querySelector('img').src=this.getAttribute('avatar');
    }
    static get observedAttributes(){
        return ["name","avatar"];
    }
    toggleInfo(){
        const classList =this.shadowRoot.querySelector('.info').classList;
        if(classList.contains('hidden')){
            classList.remove('hidden');
            this.shadowRoot.querySelector('#toggle-info').textContent='Hide Info ';
        }else{
            classList.add('hidden');
            this.shadowRoot.querySelector('#toggle-info').textContent='Show Info';
        }         
    }

    connectedCallback(){
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click',()=>this.toggleInfo());
    }
    attributeChangedCallback(name,oldValue,newValue){
        if(name==="name" && oldValue!=newValue){
            this.shadowRoot.querySelector('h3').textContent = newValue;
        }
        if(name==="avatar" && oldValue!=newValue){
            this.shadowRoot.querySelector('img').src = newValue;
        }
    }
    disconnectedCallback(){
        this.shadowRoot.querySelector('#toggle-info').removeEventListener();
    }
}

window.customElements.define('user-card',UserCard);


const db = [
  {
    "id": 1,
    "jyns": "men",
    "lastname": "Mergen",
    "surname": "Gurbanow",
    "mobil_number": "61527811",
    "email_address": "m.gurbanow@mysal.com"
  },
  {
    "id": 2,
    "jyns": "women",
    "lastname": "Güljemal",
    "surname": "Gurbanowa",
    "mobil_number": "62527812",
    "email_address": "guljemal80@mysal.com"
  },
  {
    "id": 3,
    "jyns": "men",
    "lastname": "Rejep",
    "surname": "Saparow",
    "mobil_number": "63527813",
    "email_address": "rejeps@mysal.com"
  },
  {
    "id": 4,
    "jyns": "women",
    "lastname": "Bägül",
    "surname": "Saparowa",
    "mobil_number": "64527814",
    "email_address": "bagul.s@mysal.com"
  },
  {
    "id": 5,
    "jyns": "men",
    "lastname": "Şatlyk",
    "surname": "Berdiýew",
    "mobil_number": "65527815",
    "email_address": "shatlyk.b@mysal.com"
  },
  {
    "id": 6,
    "jyns": "women",
    "lastname": "Jeren",
    "surname": "Berdiýewa",
    "mobil_number": "66527816",
    "email_address": "jerenka@mysal.com"
  },
  {
    "id": 7,
    "jyns": "men",
    "lastname": "Yslam",
    "surname": "Täşliýew",
    "mobil_number": "67527817",
    "email_address": "yslam_t75@mysal.com"
  },
  {
    "id": 8,
    "jyns": "women",
    "lastname": "Maral",
    "surname": "Täşliýewa",
    "mobil_number": "68527818",
    "email_address": "maral.t@mysal.com"
  },
  {
    "id": 9,
    "jyns": "men",
    "lastname": "Azym",
    "surname": "Akmämmedow",
    "mobil_number": "69527819",
    "email_address": "azym.akmam@mysal.com"
  },
  {
    "id": 10,
    "jyns": "women",
    "lastname": "Ogultäç",
    "surname": "Akmämmedowa",
    "mobil_number": "70527820",
    "email_address": "ogultach@mysal.com"
  },
  {
    "id": 11,
    "jyns": "men",
    "lastname": "Zaman",
    "surname": "Geldymämmedow",
    "mobil_number": "61527821",
    "email_address": "zaman_g@mysal.com"
  },
  {
    "id": 12,
    "jyns": "women",
    "lastname": "Nurgül",
    "surname": "Geldymämmedowa",
    "mobil_number": "62527822",
    "email_address": "nurgul.g@mysal.com"
  },
  {
    "id": 13,
    "jyns": "men",
    "lastname": "Maksat",
    "surname": "Baýramow",
    "mobil_number": "63527823",
    "email_address": "maksat_b90@mysal.com"
  },
  {
    "id": 14,
    "jyns": "women",
    "lastname": "Aýsoltan",
    "surname": "Baýramowa",
    "mobil_number": "64527824",
    "email_address": "aysoltan@mysal.com"
  },
  {
    "id": 15,
    "jyns": "men",
    "lastname": "Kakamyrat",
    "surname": "Çaryýew",
    "mobil_number": "65527825",
    "email_address": "k.charyyew@mysal.com"
  },
  {
    "id": 16,
    "jyns": "women",
    "lastname": "Altyn",
    "surname": "Çaryýewa",
    "mobil_number": "66527826",
    "email_address": "altyn.chary@mysal.com"
  },
  {
    "id": 17,
    "jyns": "men",
    "lastname": "Dädebaý",
    "surname": "Saryýew",
    "mobil_number": "67527827",
    "email_address": "dadebay.s@mysal.com"
  },
  {
    "id": 18,
    "jyns": "women",
    "lastname": "Aýjahan",
    "surname": "Saryýewa",
    "mobil_number": "68527828",
    "email_address": "ayjahan@mysal.com"
  },
  {
    "id": 19,
    "jyns": "men",
    "lastname": "Parahat",
    "surname": "Seýidow",
    "mobil_number": "69527829",
    "email_address": "parahat_s@mysal.com"
  },
  {
    "id": 20,
    "jyns": "women",
    "lastname": "Gülälek",
    "surname": "Seýidowa",
    "mobil_number": "70527830",
    "email_address": "gulalek.seyid@mysal.com"
  }
];


const imgUrl = "https://randomuser.me/api/portraits"; //? /men/1.jpg  or /women/1.jpg;

const userCards = document.querySelectorAll("user-card");
const userEmails = document.querySelectorAll('.user-email');
const userPhone = document.querySelectorAll('.user-phone');


let i=0;

setInterval(()=>{
    i++;
    let index = i*2;
    // women
    userCards[0].setAttribute('name',`${db[index-1].lastname} ${db[index-1].surname}`);
    userCards[0].setAttribute('avatar',`${imgUrl}/women/${i}.jpg`);
    userEmails[0].textContent=db[index-1].email_address;
    userPhone[0].textContent="+993"+db[index-1].mobil_number;

    // men
    userCards[1].setAttribute('name',`${db[index].lastname} ${db[index].surname}`);
    userCards[1].setAttribute('avatar',`${imgUrl}/men/${i}.jpg`);
    userEmails[1].textContent=db[index].email_address;
    userPhone[1].textContent="+993"+db[index].mobil_number;

    if(i==10){
        i=0;
    }
},10000)

