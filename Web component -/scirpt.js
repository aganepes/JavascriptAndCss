const template= document.createElement('template');

template.innerHTML=`
        <style>
        h3{
        color:coral
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
            width:100%
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
        <img/>
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
        
        this.attachShadow({'mode':'open'})

        this.shadowRoot.appendChild(template.content.cloneNode(true))
        
        this.shadowRoot.querySelector('h3').textContent=this.getAttribute('name')
        
        this.shadowRoot.querySelector('img').src=this.getAttribute('avatar');
    }

    toggleInfo(){
        const classList =this.shadowRoot.querySelector('.info').classList
        if(classList.contains('hidden')){
            classList.remove('hidden')
            this.shadowRoot.querySelector('#toggle-info').textContent='Hide Info '
        }else{
            classList.add('hidden')
            this.shadowRoot.querySelector('#toggle-info').textContent='Show Info'
        }         
    }

    connectedCallback(){
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click',()=>this.toggleInfo())
    }

    disconnectedCallback(){
        this.shadowRoot.querySelector('#toggle-info').removeEventListener()
    }
}

window.customElements.define('user-card',UserCard)