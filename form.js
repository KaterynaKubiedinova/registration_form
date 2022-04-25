let button = document.querySelector('button');
let pass = document.querySelector('.password');
const listNeed = document.querySelector('ol');
let listNeedChildren = listNeed.children;
pass.addEventListener('input', showList);
button.addEventListener('click', checkPass);
function showList(){
    let password = document.querySelector('.password').value;
    const numberIn = /[0-9]/;
    const upperChar = /[A-Z]/;
    const lowerChar = /[a-z]/;
    const symbolIn = /[!@#$%^&*_+=;:<>{}]/
    listNeed.hidden = false;
    if (password.length < 10 || !numberIn.test(password) || !upperChar.test(password) || !lowerChar.test(password) || !symbolIn.test(password) || /[ ]/.test(password)){
        if (password.length < 10){
        listNeedChildren[1].hidden = false;
        }else{listNeedChildren[1].hidden = true;}
        if (!numberIn.test(password)){
            listNeedChildren[3].hidden = false;
        }else{listNeedChildren[3].hidden = true;}
        if(!isNaN(password)){
            listNeedChildren[0].hidden = false;
            listNeedChildren[2].hidden = false
            listNeedChildren[4].hidden = false
            return (false);
        }else{
            listNeedChildren[0].hidden = true;
            listNeedChildren[2].hidden = true;
            listNeedChildren[4].hidden = true;
        }
        if (!symbolIn.test(password)){
            listNeedChildren[4].hidden = false;
        }else{listNeedChildren[4].hidden = true;}
        if (!upperChar.test(password)){
            listNeedChildren[2].hidden = false;
        }else{listNeedChildren[2].hidden = true;}
        if (!lowerChar.test(password)){
            listNeedChildren[0].hidden = false;
        }else{listNeedChildren[0].hidden = true;} 
        if (/[ ]/.test(password)){
            listNeedChildren[5].hidden = false;
        }else{listNeedChildren[5].hidden = true;}
    }else {listNeed.hidden = true}
}
function checkPass(){
    let password = document.querySelector('.password').value;
    let result = [];
    const numberIn = /[0-9]/;
    const upperChar = /[A-Z]/;
    const lowerChar = /[a-z]/;
    const symbolIn = /[!@#$%^&*_+=;:<>{}]/
    if (password.length < 10 || !numberIn.test(password) || !upperChar.test(password) || !lowerChar.test(password) || !symbolIn.test(password) || /[ ]/.test(password)){
        if (password.length < 10){
        result.push(listNeedChildren[1].textContent);
        }
        if (!numberIn.test(password)){
            result.push(listNeedChildren[3].textContent);
        if(!isNaN(password)){
            result.push(listNeedChildren[0].textContent, listNeedChildren[2].textContent, listNeedChildren[4].textContent);
            return (false);
            }
        if (!symbolIn.test(password)){
            result.push(listNeedChildren[4].textContent);
        }
        } 
        if (!upperChar.test(password)){
            result.push(listNeedChildren[2].textContent);
        }
        if (!lowerChar.test(password)){
            result.push(listNeedChildren[0].textContent);
        } 
        if (/[ ]/.test(password)){
            result.push(listNeedChildren[5].textContent);
        }
        alert(result.join('\n'));
    }else return(true)
}