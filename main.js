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
 
const speakersSection = document.querySelector('.speakers');
const displayed = 3;

function displaySpeakers(from, to) {
  for (let i = from; i < to; i += 1) {
    speakersSection.innerHTML += `
      <div class="speaker_card">
        <div class="speaker_img">
          <img src="${speakers[i].image}" alt="${speakers[i].alt}">
        </div>
        <div class="speaker_info">
          <p class="speaker_name">${speakers[i].name}</p>
          <p class="speaker_profession">${speakers[i].prof}</p>
          <hr/>
          <p class="speaker_desc">${speakers[i].desc}</p>
        </div>
      </div>
    `;
  }
}

function checkScreenSize() {
  return window.innerWidth <= 767 ? 3 : speakers.length;
}

window.addEventListener('resize', () => {
  speakersSection.innerHTML = '';
  displaySpeakers(0, checkScreenSize());
});

if (document.readyState !== 'loading') {
  speakersSection.innerHTML = '';
  displaySpeakers(0, checkScreenSize());
} else {
  document.addEventListener('DOMContentLoaded', () => {
    speakersSection.innerHTML = '';
    displaySpeakers(0, checkScreenSize());
  });
}