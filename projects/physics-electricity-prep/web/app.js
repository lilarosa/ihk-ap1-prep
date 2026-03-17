const choices = document.querySelectorAll('.choices');
choices.forEach((group) => {
  group.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') return;
    const answer = group.dataset.answer;
    const picked = event.target.dataset.choice;
    const feedback = group.parentElement.querySelector('[data-feedback]');
    if (picked === answer) {
      feedback.textContent = 'Richtig.';
    } else {
      feedback.textContent = 'Falsch. Tipp: Strom ist bewegte Ladung.';
    }
  });
});

const converters = {
  mA: (value) => value / 1000,
  kOhm: (value) => value * 1000,
  kWh: (value) => value * 3.6e6
};

document.querySelectorAll('[data-convert]').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.convert;
    const input = document.getElementById(key);
    const result = document.getElementById(key + 'Result');
    const value = parseFloat(input.value);
    if (Number.isNaN(value)) {
      result.textContent = 'Bitte Zahl eingeben.';
      return;
    }
    const output = converters[key](value);
    result.textContent = `${key} => ${output}`;
  });
});

document.querySelector('[data-calc="ohm"]').addEventListener('click', () => {
  const U = parseFloat(document.getElementById('U').value);
  const R = parseFloat(document.getElementById('R').value);
  const result = document.getElementById('ohmResult');
  if (Number.isNaN(U) || Number.isNaN(R) || R === 0) {
    result.textContent = 'U und R korrekt eingeben.';
    return;
  }
  result.textContent = `I = ${(U / R).toFixed(3)} A`;
});

document.querySelector('[data-calc="power"]').addEventListener('click', () => {
  const U = parseFloat(document.getElementById('U2').value);
  const I = parseFloat(document.getElementById('I2').value);
  const result = document.getElementById('powerResult');
  if (Number.isNaN(U) || Number.isNaN(I)) {
    result.textContent = 'U und I korrekt eingeben.';
    return;
  }
  result.textContent = `P = ${(U * I).toFixed(3)} W`;
});

document.querySelector('[data-calc="energy"]').addEventListener('click', () => {
  const P = parseFloat(document.getElementById('P').value);
  const t = parseFloat(document.getElementById('t').value);
  const result = document.getElementById('energyResult');
  if (Number.isNaN(P) || Number.isNaN(t)) {
    result.textContent = 'P und t korrekt eingeben.';
    return;
  }
  result.textContent = `E = ${(P * t).toFixed(2)} J`;
});

const quizItems = [
  { q: '1 A entspricht ...', a: '1 C/s', choices: ['1 C/s', '1 V', '1 Ohm'] },
  { q: 'U = R · I ist ...', a: 'Ohmsches Gesetz', choices: ['Leistung', 'Ohmsches Gesetz', 'Energie'] },
  { q: 'Einheit der Leistung?', a: 'W', choices: ['W', 'J', 'C'] },
  { q: '1 kΩ = ... Ω', a: '1000', choices: ['100', '1000', '10'] },
  { q: 'P = U · I liefert ...', a: 'W', choices: ['W', 'V', 'A'] },
  { q: 'Elektronen fliessen von ... nach ...', a: '- nach +', choices: ['+ nach -', '- nach +', 'nur +'] },
  { q: '1 kWh = ... J', a: '3.6e6', choices: ['3.6e6', '3600', '1000'] },
  { q: 'I = U / R berechnet ...', a: 'Strom', choices: ['Spannung', 'Strom', 'Widerstand'] },
  { q: 'Einheit der Spannung?', a: 'V', choices: ['V', 'A', 'Ω'] },
  { q: 'Q = I · t ist ...', a: 'Ladung', choices: ['Leistung', 'Ladung', 'Energie'] }
];

const quiz = document.getElementById('quiz');
quizItems.forEach((item, index) => {
  const li = document.createElement('li');
  li.innerHTML = `<p>${item.q}</p>` + item.choices.map((c) =>
    `<label><input type="radio" name="q${index}" value="${c}"> ${c}</label>`
  ).join('<br>');
  quiz.appendChild(li);
});

document.getElementById('grade').addEventListener('click', () => {
  let score = 0;
  quizItems.forEach((item, index) => {
    const checked = document.querySelector(`input[name="q${index}"]:checked`);
    if (checked && checked.value === item.a) score += 1;
  });
  document.getElementById('score').textContent = `Score: ${score} / ${quizItems.length}`;
});

let slideData = [];

function flattenSlides(sourceFiles) {
  const items = [];
  sourceFiles.forEach((file) => {
    file.slides.forEach((slide) => {
      const text = (slide.text || []).join(' ');
      if (text.trim().length === 0) return;
      items.push({
        source: file.path.split('/').pop(),
        index: slide.index,
        text
      });
    });
  });
  return items;
}

function renderSlides(filter = '') {
  const list = document.getElementById('slideList');
  const count = document.getElementById('slideCount');
  const keyword = filter.trim().toLowerCase();
  const filtered = keyword
    ? slideData.filter((item) => item.text.toLowerCase().includes(keyword))
    : slideData;

  const limit = 80;
  list.innerHTML = '';
  filtered.slice(0, limit).forEach((item) => {
    const div = document.createElement('div');
    div.className = 'slide-item';
    div.innerHTML = `<div class=\"slide-meta\">${item.source} · Slide ${item.index}</div><div>${item.text}</div>`;
    list.appendChild(div);
  });
  count.textContent = `匹配: ${filtered.length} 条（显示前 ${Math.min(filtered.length, limit)} 条）`;
}

function pickRandomSlide() {
  const spot = document.getElementById('slideSpotlight');
  if (!slideData.length) {
    spot.textContent = '暂无课件内容。';
    return;
  }
  const item = slideData[Math.floor(Math.random() * slideData.length)];
  spot.innerHTML = `<strong>${item.source} · Slide ${item.index}</strong><br>${item.text}`;
}

fetch('data.json')
  .then((resp) => resp.json())
  .then((data) => {
    slideData = flattenSlides(data.source_files || []);
    renderSlides();
  })
  .catch(() => {
    const count = document.getElementById('slideCount');
    if (count) count.textContent = '课件数据加载失败。';
  });

const searchInput = document.getElementById('slideSearch');
if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    renderSlides(event.target.value);
  });
}

const randomBtn = document.getElementById('slideRandom');
if (randomBtn) {
  randomBtn.addEventListener('click', pickRandomSlide);
}
