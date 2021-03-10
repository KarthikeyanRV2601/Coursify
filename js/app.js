//Animate on scroll library initialisation

AOS.init({
    easing: 'ease-out-back',
    duration: 400,      
    once: true,   
    disable: 'mobile'
});


const Menu=document.querySelector('.Menu');
const links=document.querySelector('nav>section');
const Dropdown=document.querySelector('.Dropdown');
const Navbar=document.querySelector('#Navbar');

var timesClicked=0;

//For dropdown to appear on click

Menu.addEventListener("click",()=>{
    timesClicked++;
    if(timesClicked%2==1){
        console.log("clicked");
        Dropdown.style.opacity="1";
        Dropdown.style.right="0";
        
    }
    else{
        console.log("unclicked");
        Dropdown.style.opacity="0";
        Dropdown.style.right="-50vh";
        
    }
    
    
});

//Constantly check for responsive redesign

window.onload=Responsive();

function Responsive(){
    
var alreadyin=false;

    if(window.innerWidth<768)
        {
            if(alreadyin==false){

                links.classList.add('Dropdown');
                links.classList.remove('Links');
                alreadyin=true;
                console.log(links.classList);
                return;
            }    
            return;
        }
    alreadyin=false;
    
   
 
    links.classList.add('Links');
    links.style.opacity="1";
    links.classList.remove('Dropdown');
   
    
      
}

//Responsive navigation bar that scroll along us
function scrollFunction()
{   
    let bool=this.oldScroll > this.scrollY; 
    Navbar.style.top=scrollY/8-8+'vh';
    console.log(bool);
    if(bool==true){
        Navbar.style.top=scrollY/8+0+'vh';
        
    }
    else{
        Navbar.style.top=scrollY/8-8+'vh';
    }
    this.oldScroll = this.scrollY;
    
    
}

window.onscroll = function() {scrollFunction()};//calling the scroll function
