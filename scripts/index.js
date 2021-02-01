let portfolioLink = document.querySelector('.portfolioLink')
let portfolioPage = document.querySelector('.portfolio')
let displayPortfolio = () =>{
  console.log('o')
  portfolioPage.classList.remove('hidden')
}

portfolioLink.addEventListener('click', displayPortfolio);

