/* ==========================
   Apparition des cartes
========================== */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach((card,index)=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition=`0.6s ease ${index*0.15}s`;

    observer.observe(card);

});

document.querySelectorAll(".show").forEach(card=>{
    card.style.opacity="1";
});

const style=document.createElement("style");

style.innerHTML=`
.show{
opacity:1 !important;
transform:translateY(0px) !important;
}
`;

document.head.appendChild(style);

/* ==========================
   Compteurs animés
========================== */

function animateValue(id,end,duration){

    const element=document.getElementById(id);

    let start=0;

    let startTime=null;

    function update(currentTime){

        if(!startTime) startTime=currentTime;

        const progress=Math.min((currentTime-startTime)/duration,1);

        const value=Math.floor(progress*end);

        if(end>=100000){

            element.innerHTML=(value/1000).toFixed(0)+"K";

        }else if(end>=1000){

            element.innerHTML=(value/1000).toFixed(1)+"K";

        }else{

            element.innerHTML=value;

        }

        if(progress<1){

            requestAnimationFrame(update);

        }

    }

    requestAnimationFrame(update);

}

/* Change les chiffres ici */

animateValue("followers",4000,1800);

animateValue("tiktok",1416,2200);

animateValue("likes",5391,2600);

/* ==========================
   Rotation Avatar
========================== */

const avatar=document.querySelector(".avatar img");

document.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.clientX)/45;

    const y=(window.innerHeight/2-e.clientY)/45;

    avatar.style.transform=`rotateY(${x}deg) rotateX(${-y}deg) scale(1.04)`;

});

document.addEventListener("mouseleave",()=>{

    avatar.style.transform="rotateY(0deg) rotateX(0deg) scale(1)";

});

/* ==========================
   Glow des cartes
========================== */

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 0 35px rgba(138,61,255,.6)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="";

    });

});

/* ==========================
   Heure dynamique
========================== */

console.log("Bienvenue sur le site de 89'zek 🔥");