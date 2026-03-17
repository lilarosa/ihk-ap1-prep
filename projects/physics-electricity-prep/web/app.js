const conceptQuestions = [
  {
    q: 'Elektrischer Strom ist ...',
    a: 'bewegte Ladungstraeger',
    c: ['bewegte Ladungstraeger', 'gespeicherte Energie', 'nur Spannung']
  },
  {
    q: 'Technische Stromrichtung zeigt von ...',
    a: '+ nach -',
    c: ['+ nach -', '- nach +', 'von unten nach oben']
  },
  {
    q: 'Elektronenfluss ist von ...',
    a: '- nach +',
    c: ['+ nach -', '- nach +', 'von rechts nach links']
  },
  {
    q: 'Einheit der Spannung ist ...',
    a: 'Volt (V)',
    c: ['Volt (V)', 'Ampere (A)', 'Ohm (Ω)']
  },
  {
    q: 'Einheit der Stromstaerke ist ...',
    a: 'Ampere (A)',
    c: ['Ampere (A)', 'Watt (W)', 'Coulomb (C)']
  },
  {
    q: 'Einheit des Widerstands ist ...',
    a: 'Ohm (Ω)',
    c: ['Ohm (Ω)', 'Volt (V)', 'Joule (J)']
  },
  {
    q: 'Leistung ist ...',
    a: 'Energie pro Zeit',
    c: ['Energie pro Zeit', 'Strom pro Zeit', 'Spannung pro Zeit']
  },
  {
    q: 'Energie ist ...',
    a: 'Leistung mal Zeit',
    c: ['Leistung mal Zeit', 'Strom mal Zeit', 'Spannung mal Zeit']
  },
  {
    q: 'Ladung berechnet man mit ...',
    a: 'Q = I * t',
    c: ['Q = I * t', 'Q = U * I', 'Q = R * I']
  },
  {
    q: 'Ohmsches Gesetz lautet ...',
    a: 'U = R * I',
    c: ['U = R * I', 'P = U * I', 'E = P * t']
  },
  {
    q: 'Ein Leiter ist ...',
    a: 'ein Material mit frei beweglichen Elektronen',
    c: ['ein Material mit frei beweglichen Elektronen', 'ein Material ohne Elektronen', 'ein Isolator']
  },
  {
    q: 'Kupfer ist ein ...',
    a: 'guter Leiter',
    c: ['guter Leiter', 'Isolator', 'Halbleiter']
  },
  {
    q: 'Aluminium wird oft verwendet wegen ...',
    a: 'geringem Gewicht und guter Leitfaehigkeit',
    c: ['geringem Gewicht und guter Leitfaehigkeit', 'sehr hohem Widerstand', 'nicht magnetisch']
  },
  {
    q: 'Widerstand bedeutet ...',
    a: 'Hemmung des Stromflusses',
    c: ['Hemmung des Stromflusses', 'Erhoehung der Spannung', 'Speicherung von Ladung']
  },
  {
    q: 'Spannung ist ...',
    a: 'Potentialdifferenz',
    c: ['Potentialdifferenz', 'Ladung pro Zeit', 'Leistung pro Zeit']
  },
  {
    q: 'Stromstaerke ist ...',
    a: 'Ladung pro Zeit',
    c: ['Ladung pro Zeit', 'Energie pro Zeit', 'Spannung pro Weg']
  },
  {
    q: '1 A entspricht ...',
    a: '1 C/s',
    c: ['1 C/s', '1 V', '1 Ω']
  },
  {
    q: '1 W entspricht ...',
    a: '1 J/s',
    c: ['1 J/s', '1 V/A', '1 C/s']
  },
  {
    q: '1 Ω entspricht ...',
    a: '1 V/A',
    c: ['1 V/A', '1 A/V', '1 J/s']
  },
  {
    q: 'kWh ist eine Einheit fuer ...',
    a: 'Energie',
    c: ['Energie', 'Leistung', 'Stromstaerke']
  },
  {
    q: 'Frequenz beschreibt ...',
    a: 'Schwingungen pro Sekunde',
    c: ['Schwingungen pro Sekunde', 'Spannung pro Sekunde', 'Energie pro Sekunde']
  },
  {
    q: 'Eine Batterie liefert ...',
    a: 'Gleichspannung',
    c: ['Gleichspannung', 'Wechselspannung', 'Frequenz']
  },
  {
    q: 'Das Minuspol-Symbol zeigt ...',
    a: 'Elektronenquelle',
    c: ['Elektronenquelle', 'Elektronenfang', 'Energieverbraucher']
  },
  {
    q: 'Ein Isolator hat ...',
    a: 'sehr wenige freie Elektronen',
    c: ['sehr wenige freie Elektronen', 'sehr viele freie Elektronen', 'keine Atome']
  },
  {
    q: 'Leistung berechnet man mit ...',
    a: 'P = U * I',
    c: ['P = U * I', 'P = U / R', 'P = R * I']
  },
  {
    q: 'Energie berechnet man mit ...',
    a: 'E = P * t',
    c: ['E = P * t', 'E = U * I', 'E = R * I']
  },
  {
    q: 'Spannung berechnet man aus ...',
    a: 'U = R * I',
    c: ['U = R * I', 'U = P * t', 'U = Q / t']
  },
  {
    q: 'Strom berechnet man aus ...',
    a: 'I = U / R',
    c: ['I = U / R', 'I = P * t', 'I = R / U']
  },
  {
    q: 'Elektrische Arbeit ist ...',
    a: 'Energie',
    c: ['Energie', 'Strom', 'Spannung']
  },
  {
    q: 'Ein Widerstand in Reihe ...',
    a: 'erhoeht den Gesamtwiderstand',
    c: ['erhoeht den Gesamtwiderstand', 'verringert die Spannung', 'erhoeht die Frequenz']
  }
];

function shuffle(list) {
  return list
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((entry) => entry.item);
}

function renderConcepts() {
  const list = document.getElementById('conceptList');
  if (!list) return;
  list.innerHTML = '';
  const shuffled = shuffle(conceptQuestions).slice(0, 30);
  shuffled.forEach((q, index) => {
    const li = document.createElement('li');
    li.className = 'concept-item';
    li.innerHTML = `<strong>${index + 1}. ${q.q}</strong>`;
    const choicesDiv = document.createElement('div');
    choicesDiv.className = 'choices';
    const feedback = document.createElement('p');
    feedback.className = 'feedback';
    q.c.forEach((choice) => {
      const btn = document.createElement('button');
      btn.textContent = choice;
      btn.addEventListener('click', () => {
        feedback.textContent = choice === q.a ? 'Richtig.' : `Falsch. Richtig ist: ${q.a}`;
      });
      choicesDiv.appendChild(btn);
    });
    li.appendChild(choicesDiv);
    li.appendChild(feedback);
    list.appendChild(li);
  });
}

const conceptShuffle = document.getElementById('conceptShuffle');
if (conceptShuffle) {
  conceptShuffle.addEventListener('click', renderConcepts);
}

renderConcepts();

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

let questionBank = [];

function loadQuestionBank() {
  return fetch('questions.json')
    .then((resp) => resp.json())
    .then((data) => {
      questionBank = data.questions || [];
    });
}

function filterQuestions(type) {
  if (type === 'all') return questionBank;
  return questionBank.filter((q) => q.type === type);
}

function renderQuestion(question) {
  if (!question) return;
  document.getElementById('questionMeta').textContent = `${question.type.toUpperCase()} · ${question.topic}`;
  document.getElementById('questionPrompt').textContent = question.prompt;
  const choices = document.getElementById('questionChoices');
  const answer = document.getElementById('questionAnswer');
  choices.innerHTML = '';
  answer.textContent = '';

  if (question.type === 'mcq' && question.choices) {
    question.choices.forEach((choice) => {
      const btn = document.createElement('button');
      btn.textContent = choice;
      btn.addEventListener('click', () => {
        if (choice === question.answer) {
          answer.textContent = '正确';
        } else {
          answer.textContent = `错误，正确答案：${question.answer}`;
        }
      });
      choices.appendChild(btn);
    });
  } else {
    const hint = document.createElement('p');
    hint.className = 'muted';
    hint.textContent = '点击“显示答案”查看。';
    choices.appendChild(hint);
  }
}

function pickRandomQuestion() {
  const type = document.getElementById('questionType').value;
  const pool = filterQuestions(type);
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

document.getElementById('newQuestion').addEventListener('click', () => {
  const q = pickRandomQuestion();
  renderQuestion(q);
});

document.getElementById('showAnswer').addEventListener('click', () => {
  const prompt = document.getElementById('questionPrompt').textContent;
  const q = questionBank.find((item) => item.prompt === prompt);
  const answer = document.getElementById('questionAnswer');
  if (q) answer.textContent = `答案：${q.answer}`;
});

loadQuestionBank();

let applicationData = [];
let currentAppIndex = 0;
let showSolution = false;

function renderApplication() {
  if (!applicationData.length) return;
  const item = applicationData[currentAppIndex];
  const title = document.getElementById('appTitle');
  const prompt = document.getElementById('appPrompt');
  const solution = document.getElementById('appSolution');
  if (title) title.textContent = item.title;
  if (prompt) {
    prompt.innerHTML = item.prompt.map((line) => `<div>${line}</div>`).join('');
  }
  if (solution) {
    solution.innerHTML = item.solution.map((line) => `<div>${line}</div>`).join('');
    solution.classList.toggle('hidden', !showSolution);
  }
}

function toggleSolution() {
  showSolution = !showSolution;
  renderApplication();
}

function nextApplication() {
  if (!applicationData.length) return;
  currentAppIndex = (currentAppIndex + 1) % applicationData.length;
  showSolution = false;
  renderApplication();
}

function prevApplication() {
  if (!applicationData.length) return;
  currentAppIndex = (currentAppIndex - 1 + applicationData.length) % applicationData.length;
  showSolution = false;
  renderApplication();
}

fetch('application-questions.json')
  .then((resp) => resp.json())
  .then((data) => {
    applicationData = data.items || [];
    renderApplication();
  });

const appPrev = document.getElementById('appPrev');
if (appPrev) appPrev.addEventListener('click', prevApplication);
const appNext = document.getElementById('appNext');
if (appNext) appNext.addEventListener('click', nextApplication);
const appToggle = document.getElementById('appToggle');
if (appToggle) appToggle.addEventListener('click', toggleSolution);
