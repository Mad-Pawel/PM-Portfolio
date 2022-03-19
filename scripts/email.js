const email = document.getElementById('email');
const git = document.getElementById('git');
const header = document.querySelector('header');

const infoEmail = document.getElementById('pop-email');
const infoGit = document.getElementById('pop-git');




const myEmail = 'pawel.mlo@op.pl';



const runCode = () =>{

    const whitchPop = (Node,e) =>{
        Node.style.visibility = 'visible'
        Node.style.left =  (e.clientX - Node.clientWidth/2 )+ 'px';
        Node.style.top =  (e.clientY - Node.offsetHeight - 10 + window.scrollY)  + 'px';
    }
    const checkPosition = (Node,e) =>{
        return e.clientX >= Node.getBoundingClientRect().x && e.clientX <= Node.getBoundingClientRect().x + Node.clientWidth && e.clientY >= Node.getBoundingClientRect().y &&  e.clientY <= Node.getBoundingClientRect().y + Node.clientHeight;
    }



    header.addEventListener('mousemove', e=>{
        if(checkPosition(email,e))
        whitchPop(infoEmail,e)
        else
        infoEmail.style.visibility = 'hidden';

    });
    header.addEventListener('mousemove', e=>{
        if(checkPosition(git,e))
        whitchPop(infoGit,e)
        else
        infoGit.style.visibility = 'hidden';
    });


    email.addEventListener('mouseleave', e=>{
        infoEmail.firstChild.textContent = "Email";
    });
    email.onclick = () =>{
        navigator.clipboard.writeText(myEmail)
        infoEmail.firstChild.textContent = "Copied!";
    }

}

setTimeout(runCode,2600)

