// javascript

const entryForm = document.getElementById("entryForm")
const entriesSection = document.querySelector('#entries')
const entryTextbox = document.querySelector('.entry-textbox')
const entriesNav = document.querySelector(".entries-nav")
var buttonNumber = 0;
//console.log(entryTextbox[0].value) //since getelebyclassname returns html collection and there is only one element tag named entry-textbox, so [0] gives first element

function addEntryToDom(event){
    event.preventDefault()
    buttonNumber = buttonNumber + 1
    const entryDiv = document.createElement('div')
    entryDiv.classList.add('single-entry')
    entryDiv.textContent = entryTextbox.value  //read note on line 7
    entryDiv.style.display = 'none'
    entriesSection.appendChild(entryDiv)
    entryTextbox.value = ''
    
    const displayEntryButton = document.createElement('button')
    displayEntryButton.classList.add('display-entry-button')
    displayEntryButton.innerText = buttonNumber
    entriesNav.append(displayEntryButton)
    
    displayEntryButton.addEventListener('click', function(){
        const allEntries = document.querySelectorAll('.single-entry')
        for(let i = 0; i < allEntries.length ; i++)
            allEntries[i].style.display = 'none'
        entryDiv.style.display = 'block'
    })
}

entryForm.addEventListener('submit', addEntryToDom)

