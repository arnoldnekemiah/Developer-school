// Humburger menu
const openHambuger = document.querySelector('.fa-bars');
const menu = document.querySelector('.newMenu');
const closeButton = document.querySelector('.fa-times');
/* open button */
openHambuger.addEventListener('click', () => {
  menu.style.visibility = 'visible';
  openHambuger.style.display = 'none';
  closeButton.style.display = 'block';
});

/* clossing button ... */
closeButton.addEventListener('click', () => {
  menu.style.display = 'none';
  openHambuger.style.display = 'block';
  closeButton.style.display = 'none';
});

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menu.style.display = 'none';
    openHambuger.style.display = 'block';
    closeButton.style.display = 'none';
  });
});

// speakers section
const speakers = [
    {
      name: 'Ikonde Arnold',
      image: './images/speaker1.png',
      alt: 'Speaker1',
      intro: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      autobio: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
    },
    {
      name: 'Beteise Richmond',
      image: './images/speaker2.png',
      alt: 'Speaker2',
      intro: 'Director of Art Centre Nabi and a board member of CC Korea',
      autobio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.'
    },
    {
        name: 'Josh Erias',
        image: './images/speaker3.png',
        alt: 'Speaker3',
        intro: 'Director of Art Centre Nabi and a board member of CC Korea',
        autobio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.'
    },
    {
        name: 'Mwarisi Arthur',
        image: './images/speaker4.png',
        alt: 'Speaker4',
        intro: 'Director of Art Centre Nabi and a board member of CC Korea',
        autobio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.'
    },
    {
        name: 'Nantale Tracy',
        image: './images/speaker5.png',
        alt: 'Speaker5',
        intro: 'Director of Art Centre Nabi and a board member of CC Korea',
        autobio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.'
      },
    {
        name: 'Masika Jackie',
        image: './images/speaker6.png',
        alt: 'Speaker6',
        intro: 'Director of Art Centre Nabi and a board member of CC Korea',
        autobio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.'
      }    
  ];
  
const speakerGrid = document.querySelector('.speakerGrid');
const speakersMore = document.querySelector('.speakers_more');
const displayed = 2;

function generateSpeakerCard(speaker) {
  return `
    <div class="speaker_card">
      <div class="speaker_img">
        <img src="${speaker.image}" alt="${speaker.alt}">
      </div>
      <div class="speaker_info">
        <p class="speaker_name">${speaker.name}</p>
        <p class="speaker_profession">${speaker.intro}</p>
        <hr/>
        <p class="speaker_desc">${speaker.autobio}</p>
      </div>
    </div>
  `;
}

function displaySpeakers(from, to) {
  let speakersHTML = '';

  for (let i = from; i < to; i += 1) {
    const speaker = speakers[i];
    speakersHTML += generateSpeakerCard(speaker);
  }

  speakerGrid.innerHTML = speakersHTML;
}

function checkScreenSize() {
  return window.innerWidth <= 767 ? 2 : speakers.length;
}

window.addEventListener('resize', () => {
  displaySpeakers(0, checkScreenSize());
});

if (document.readyState !== 'loading') {
  displaySpeakers(0, checkScreenSize());
} else {
  document.addEventListener('DOMContentLoaded', () => {
    displaySpeakers(0, checkScreenSize());
  });
}

function displayMore() {
  const remainingSpeakers = speakers.slice(displayed);
  let speakersMoreHTML = '';

  for (const speaker of remainingSpeakers) {
    speakersMoreHTML += generateSpeakerCard(speaker);
  }

  speakerGrid.innerHTML += speakersMoreHTML;
}

speakersMore.addEventListener('click', (event) => {
  if (speakersMore.innerHTML === 'SEE LESS<i class="fas fa-angle-up" aria-hidden="true"></i>') {
    displaySpeakers(0, displayed);
    speakersMore.innerHTML = 'More<i class="fas fa-angle-down"></i>';
  } else {
    displayMore();
    speakersMore.innerHTML = 'SEE LESS<i class="fas fa-angle-up"></i>';
  }
});