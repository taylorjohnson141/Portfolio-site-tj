let portfolioLink = document.querySelector('.portfolioLink')
let resumeLink = document.querySelector('.resumeLink')
let aboutLink = document.querySelector('.aboutLink')
let connectLink = document.querySelector('.connectLink')

let portfolioPage = document.querySelector('.portfolio')
let resumePage = document.querySelector('.resume')
let aboutPage = document.querySelector('.about')
let connectPage = document.querySelector('.connect')

let displayPage = (element) =>{
  element.classList.remove('hidden')
}

portfolioLink.addEventListener('click', ()=>{
  displayPage(portfolioPage)
});
resumeLink.addEventListener('click', () =>{
  displayPage(resumePage)
});
aboutLink.addEventListener('click', () =>{
  displayPage(aboutPage)
});
connectLink.addEventListener('click', () =>{
  displayPage(connectPage)
});

