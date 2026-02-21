const RULES = [
  "No skipping morning GATE slot for 2 days in a row.",
  "During 9 AM-3 PM trading: max 2% capital risk per day.",
  "Always set stop loss before entering any trade.",
  "Write daily trading journal (win/loss + reason).",
  "Attempt minimum 20 topic questions on study days.",
  "Every Sunday: review mistakes and plan next week.",
  "Sleep at least 7 hours, especially Jan 2027."
];

const WEIGHTAGE_DATA = [
  { subject: "General Aptitude", weightage: 15.73, difficulty: "medium" },
  { subject: "Engineering Mathematics", weightage: 13.48, difficulty: "medium" },
  { subject: "Programming and Data Structures", weightage: 16.4, difficulty: "hard" },
  { subject: "Algorithms", weightage: 9.89, difficulty: "hard" },
  { subject: "Operating Systems", weightage: 9.89, difficulty: "hard" },
  { subject: "DBMS", weightage: 9.44, difficulty: "hard" },
  { subject: "Computer Networks", weightage: 8.54, difficulty: "hard" },
  { subject: "Theory of Computation", weightage: 8.76, difficulty: "hard" },
  { subject: "Computer Organization and Digital Logic", weightage: 7.19, difficulty: "hard" },
  { subject: "Compiler Design", weightage: 4.94, difficulty: "hard" }
];

const SYLLABUS_UNITS = [
  { subject: "Engineering Mathematics", topic: "Discrete structures: sets, relations, functions", sessions: 3 },
  { subject: "Engineering Mathematics", topic: "Propositional and first-order logic", sessions: 3 },
  { subject: "Engineering Mathematics", topic: "Mathematical induction and recurrences", sessions: 3 },
  { subject: "Engineering Mathematics", topic: "Counting, combinatorics, graph basics", sessions: 4 },
  { subject: "Engineering Mathematics", topic: "Linear algebra: matrices, rank, inverse", sessions: 4 },
  { subject: "Engineering Mathematics", topic: "Eigenvalues, eigenvectors, linear equations", sessions: 3 },
  { subject: "Engineering Mathematics", topic: "Probability basics and conditional probability", sessions: 3 },
  { subject: "Engineering Mathematics", topic: "Random variables and standard distributions", sessions: 3 },

  { subject: "Programming and Data Structures", topic: "C basics, control flow, functions", sessions: 3 },
  { subject: "Programming and Data Structures", topic: "Pointers, arrays, strings", sessions: 4 },
  { subject: "Programming and Data Structures", topic: "Recursion and complexity intuition", sessions: 3 },
  { subject: "Programming and Data Structures", topic: "Linked lists, stacks, queues", sessions: 4 },
  { subject: "Programming and Data Structures", topic: "Trees, BST, heap", sessions: 4 },
  { subject: "Programming and Data Structures", topic: "Hashing and union-find basics", sessions: 3 },

  { subject: "Algorithms", topic: "Asymptotic notation and recurrences", sessions: 4 },
  { subject: "Algorithms", topic: "Divide and conquer", sessions: 3 },
  { subject: "Algorithms", topic: "Greedy methods", sessions: 3 },
  { subject: "Algorithms", topic: "Dynamic programming", sessions: 5 },
  { subject: "Algorithms", topic: "Graph algorithms (BFS/DFS/shortest path)", sessions: 5 },

  { subject: "Operating Systems", topic: "Processes, threads, scheduling", sessions: 4 },
  { subject: "Operating Systems", topic: "Synchronization and deadlocks", sessions: 4 },
  { subject: "Operating Systems", topic: "Memory management, virtual memory", sessions: 4 },
  { subject: "Operating Systems", topic: "File systems and I/O", sessions: 3 },

  { subject: "DBMS", topic: "ER model and relational model", sessions: 3 },
  { subject: "DBMS", topic: "Relational algebra and SQL", sessions: 5 },
  { subject: "DBMS", topic: "Dependencies and normalization", sessions: 4 },
  { subject: "DBMS", topic: "Transactions, serializability, recovery", sessions: 4 },

  { subject: "Computer Networks", topic: "Layered architecture and protocols", sessions: 3 },
  { subject: "Computer Networks", topic: "Data link, switching, routing", sessions: 4 },
  { subject: "Computer Networks", topic: "Transport layer (TCP/UDP)", sessions: 4 },
  { subject: "Computer Networks", topic: "Application layer (DNS/HTTP/email)", sessions: 3 },

  { subject: "Theory of Computation", topic: "Regular languages and finite automata", sessions: 4 },
  { subject: "Theory of Computation", topic: "CFG and pushdown automata", sessions: 4 },
  { subject: "Theory of Computation", topic: "Turing machines and undecidability", sessions: 4 },
  { subject: "Theory of Computation", topic: "Complexity classes P/NP/NP-complete", sessions: 4 },

  { subject: "Computer Organization", topic: "Number systems and arithmetic", sessions: 3 },
  { subject: "Computer Organization", topic: "Datapath, control unit", sessions: 4 },
  { subject: "Computer Organization", topic: "Pipelining and hazards", sessions: 4 },
  { subject: "Computer Organization", topic: "Cache, memory hierarchy, I/O", sessions: 4 },

  { subject: "Compiler Design", topic: "Lexical analysis and finite automata", sessions: 3 },
  { subject: "Compiler Design", topic: "Parsing techniques", sessions: 4 },
  { subject: "Compiler Design", topic: "Syntax-directed translation", sessions: 3 },
  { subject: "Compiler Design", topic: "Intermediate code and optimization", sessions: 4 },

  { subject: "Digital Logic", topic: "Boolean algebra and minimization", sessions: 3 },
  { subject: "Digital Logic", topic: "Combinational circuits", sessions: 3 },
  { subject: "Digital Logic", topic: "Sequential circuits and FSM", sessions: 4 },

  { subject: "General Aptitude", topic: "Grammar, reading comprehension", sessions: 4 },
  { subject: "General Aptitude", topic: "Percentages, ratio, averages", sessions: 4 },
  { subject: "General Aptitude", topic: "Data interpretation and logic", sessions: 4 }
];

const SUBJECT_ROTATION = [
  "Engineering Mathematics",
  "Programming and Data Structures",
  "Algorithms",
  "Operating Systems",
  "DBMS",
  "Computer Networks",
  "Theory of Computation",
  "Computer Organization",
  "Compiler Design",
  "Digital Logic",
  "General Aptitude"
];

const BOOK_REFERENCES = {
  "Engineering Mathematics": "Discrete Mathematics and Its Applications (Rosen) + Higher Engineering Mathematics (B.S. Grewal)",
  "Programming and Data Structures": "Classic Data Structures (D. Samanta) + Let Us C (Yashavant Kanetkar)",
  Algorithms: "Introduction to Algorithms (CLRS)",
  "Operating Systems": "Operating System Concepts (Silberschatz)",
  DBMS: "Database System Concepts (Korth) + DBMS (Ramakrishnan)",
  "Computer Networks": "Computer Networking: A Top-Down Approach (Kurose & Ross)",
  "Theory of Computation": "Introduction to Automata Theory (Hopcroft, Motwani, Ullman)",
  "Computer Organization": "Computer Organization and Architecture (William Stallings)",
  "Compiler Design": "Compilers: Principles, Techniques, and Tools (Aho, Lam, Sethi, Ullman)",
  "Digital Logic": "Digital Design (M. Morris Mano)",
  "General Aptitude": "Quantitative Aptitude (R.S. Aggarwal) + Word Power Made Easy (Norman Lewis)"
};

const startDate = new Date("2026-02-21");
const endDate = new Date("2027-01-31");
const MOCK_STORAGE_KEY = "gate-mock-tests-v1";
const PYQ_LINKS = [
  {
    label: "2025 (Session 1)",
    paper: "https://drive.google.com/file/d/1uQ2SEZ5M3JfQ4NO66-oJQjhOdR44n2ef/view",
    key: "https://drive.google.com/file/d/1odxGurA8dfxNl4xhAoJvSLWG4VJQfwsK/view"
  },
  {
    label: "2025 (Session 2)",
    paper: "https://drive.google.com/file/d/1Wi4M8yYISQ9YUw-nj9F6x2zLqrL31wM7/view",
    key: "https://drive.google.com/file/d/1-n9RDw9wN_T7xVGSdNdv1Ythz7MggWaE/view"
  },
  {
    label: "2024 (Session 1)",
    paper: "https://drive.google.com/file/d/1M6UVLkg4mNpqxaQjRCc6JsqkQkQb0Dqd/view",
    key: "https://drive.google.com/file/d/1tIRoXv8l3qtaQY03wzSXSIvIkf4DUiaX/view"
  },
  {
    label: "2024 (Session 2)",
    paper: "https://drive.google.com/file/d/13Sqi67RKSG2Ofrz_Bd39ylh6fMqkrIWB/view",
    key: "https://drive.google.com/file/d/1WAAALB_6XZ7nYxxw4pWh_Dw8f7D2PLa2/view"
  },
  {
    label: "2023",
    paper: "https://drive.google.com/file/d/1PpNK5Et_5xKO8xLIkz42Wg9kqKGxNzwn/view",
    key: "https://drive.google.com/file/d/1wKtpKA8O14UMmJRUrQ7Y2PQBWYJ0tDFg/view"
  },
  {
    label: "2022",
    paper: "https://drive.google.com/file/d/1vxVQ1Ic61FkOiS0lk95w7tt9nmyqUiNJ/view",
    key: "https://drive.google.com/file/d/1aokfXwZB8c7LHIWXt7O9DgpRSJ2dPOXQ/view"
  },
  {
    label: "2021 (Set 1)",
    paper: "https://drive.google.com/file/d/17FN0k5v3z4SwWm4FfQji8mlTGX2yFbV-/view",
    key: "https://drive.google.com/file/d/1u-V4Ar8KtZXbgtG6M8eNXN9MkFJij5Yk/view"
  },
  {
    label: "2021 (Set 2)",
    paper: "https://drive.google.com/file/d/1xYw6M5_xLalEKf1JiWgzDlD_iwGvmaQj/view",
    key: "https://drive.google.com/file/d/1fttrQ9L4BAf6Zf8Ew2vVW-C44Wcdbxya/view"
  }
];

const rulesContainer = document.getElementById("rules");
const dailyPlanContainer = document.getElementById("daily-plan");
const statsContainer = document.getElementById("stats");
const weightageTable = document.getElementById("weightage-table");
const weeklyHoursInput = document.getElementById("weekly-hours");
const todayFocusContainer = document.getElementById("today-focus");
const todayFocusDate = document.getElementById("today-focus-date");
const heatmapGrid = document.getElementById("heatmap-grid");
const streakSummary = document.getElementById("streak-summary");
const mockDateInput = document.getElementById("mock-date");
const mockScoreInput = document.getElementById("mock-score");
const mockNotesInput = document.getElementById("mock-notes");
const mockAddBtn = document.getElementById("mock-add");
const mockSummary = document.getElementById("mock-summary");
const mockList = document.getElementById("mock-list");
const pyqLinks = document.getElementById("pyq-links");

const scheduleState = {
  conceptQueueIndex: 0,
  studied: []
};

const allDayPlans = [];
let mockTests = [];

function idFor(prefix, index) {
  return `${prefix}-${index}`;
}

function dateId(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function syncCheckboxes(storageKey, checked, source) {
  document.querySelectorAll(`input[data-storage-key='${storageKey}']`).forEach((box) => {
    if (box !== source) {
      box.checked = checked;
    }
  });
}

function notifyProgressChanged() {
  renderStats();
  renderHeatmap();
  renderTodayFocusSummary();
}

function makeCheckbox(storageKey, text, domId) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = domId || storageKey;
  input.dataset.storageKey = storageKey;
  input.checked = localStorage.getItem(storageKey) === "1";
  input.addEventListener("change", () => {
    localStorage.setItem(storageKey, input.checked ? "1" : "0");
    syncCheckboxes(storageKey, input.checked, input);
    notifyProgressChanged();
  });

  label.appendChild(input);
  label.append(` ${text}`);
  return label;
}

function phaseFor(date) {
  if (date <= new Date("2026-05-31")) return "foundation";
  if (date <= new Date("2026-10-31")) return "core";
  if (date <= new Date("2026-12-31")) return "revision";
  return "sprint";
}

function phaseLabel(phase) {
  return {
    foundation: "Foundation",
    core: "Core Coverage",
    revision: "Revision Engine",
    sprint: "Final Sprint"
  }[phase];
}

function buildConceptQueue() {
  const expanded = [];
  SYLLABUS_UNITS.forEach((unit) => {
    for (let i = 1; i <= unit.sessions; i += 1) {
      expanded.push({
        ...unit,
        label: `${unit.subject}: ${unit.topic} (Session ${i}/${unit.sessions})`
      });
    }
  });
  return expanded;
}

const conceptQueue = buildConceptQueue();

function nextConceptTask() {
  const item = conceptQueue[scheduleState.conceptQueueIndex % conceptQueue.length];
  scheduleState.conceptQueueIndex += 1;
  scheduleState.studied.push(item.label);
  return item;
}

function recentTopic(offset) {
  const idx = scheduleState.studied.length - offset;
  if (idx < 0) return "Quick revision from your handwritten notes";
  return scheduleState.studied[idx];
}

function revisionSubjectForDay(dayIndex) {
  return SUBJECT_ROTATION[dayIndex % SUBJECT_ROTATION.length];
}

function withReference(task, subject) {
  const book = BOOK_REFERENCES[subject];
  if (!book) return task;
  return `${task} | Ref Book: ${book}`;
}

function tasksForDate(date, dayIndex) {
  const phase = phaseFor(date);
  const dayOfWeek = date.getDay();
  const isSunday = dayOfWeek === 0;
  const isSaturday = dayOfWeek === 6;

  if (isSunday) {
    return {
      phase,
      tasks: [
        "Weekly review: revise all notes from this week",
        "Solve 40 mixed PYQs from this week's subjects",
        "Analyze trading journal: 3 mistakes and 3 process improvements",
        "Plan next week topics and keep books/questions ready"
      ]
    };
  }

  if (phase === "foundation" || phase === "core") {
    const concept = nextConceptTask();
    const revA = recentTopic(3);
    const revB = recentTopic(7);
    const practiceCount = phase === "foundation" ? 25 : 35;

    const tasks = [
      withReference(`Morning concept: ${concept.label}`, concept.subject),
      withReference(`Evening practice: solve ${practiceCount} questions on ${concept.subject}`, concept.subject),
      withReference(`Spaced revision 1: ${revA}`, concept.subject),
      withReference(`Spaced revision 2: ${revB}`, concept.subject),
      withReference("General Aptitude drill: 20-minute timed set", "General Aptitude"),
      "Trading block (9:00 AM-3:00 PM): follow stop-loss and 2% risk cap",
      "Post-market (4:00 PM-5:00 PM): update trading journal with reason tags"
    ];

    if (isSaturday) {
      tasks.unshift("Saturday mini-test: 30 mixed questions + 45-minute review");
    }

    return { phase, tasks };
  }

  if (phase === "revision") {
    const subject = revisionSubjectForDay(dayIndex);
    const tasks = [
      withReference(`Revision focus: ${subject} (concept summary + formula sheet)`, subject),
      withReference("PYQ drill: solve 35 questions and classify errors", subject),
      withReference("Error notebook update: write top 5 avoidable mistakes", subject),
      withReference("General Aptitude speed set: 15 questions timed", "General Aptitude"),
      "Trading block (9:00 AM-3:00 PM): process-first, no revenge trade",
      "Post-market (4:00 PM-5:00 PM): journal and weekly P/L behaviour check"
    ];

    if (isSaturday) {
      tasks.unshift("Full mock test: 3 hours + 2 hours analysis (non-negotiable)");
    }

    return { phase, tasks };
  }

  const sprintMockDay = dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5;
  const sprintSubject = revisionSubjectForDay(dayIndex + 2);
  const sprintTasks = [
    sprintMockDay
      ? "Full mock test day: 3 hours test + deep analysis of all wrong/guessed"
      : withReference(`Weak-area repair: ${sprintSubject} focused drill + short notes polishing`, sprintSubject),
    withReference("PYQ rapid set: 30 selected medium/hard questions", sprintSubject),
    withReference("Error notebook closure: convert mistakes into one-line rules", sprintSubject),
    "Trading block (9:00 AM-3:00 PM): defend capital, avoid overtrading",
    "Post-market (4:00 PM-5:00 PM): journal and next-day risk limits"
  ];

  return { phase, tasks: sprintTasks };
}

function monthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function monthLabel(date) {
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long"
  });
}

function renderStats() {
  const allTaskInputs = Array.from(document.querySelectorAll("input[data-storage-key]"))
    .filter((box) => box.dataset.storageKey.startsWith("d") || box.dataset.storageKey.startsWith("rule"));
  const uniqueKeys = [...new Set(allTaskInputs.map((box) => box.dataset.storageKey))];
  const total = uniqueKeys.length;
  const done = uniqueKeys.filter((key) => localStorage.getItem(key) === "1").length;
  const pct = total > 0 ? ((done / total) * 100).toFixed(1) : "0.0";

  const todayId = dateId(new Date());
  const todayPlan = allDayPlans.find((day) => day.dateId === todayId);
  const todayTotal = todayPlan ? todayPlan.tasks.length : 0;
  const todayDone = todayPlan
    ? todayPlan.tasks.filter((task) => localStorage.getItem(task.storageKey) === "1").length
    : 0;

  statsContainer.innerHTML = "";
  [
    { label: "Total Tasks Done", value: `${done}/${total}` },
    { label: "Overall Completion", value: `${pct}%` },
    { label: "Today's Tasks Done", value: `${todayDone}/${todayTotal}` },
    { label: "Plan Range", value: "Feb 21, 2026 -> Jan 31, 2027" }
  ].forEach((item) => {
    const box = document.createElement("article");
    box.className = "stat-box";

    const label = document.createElement("p");
    label.className = "stat-label";
    label.textContent = item.label;

    const value = document.createElement("p");
    value.className = "stat-value";
    value.textContent = item.value;

    box.appendChild(label);
    box.appendChild(value);
    statsContainer.appendChild(box);
  });
}

function difficultyFactor(level) {
  if (level === "easy") return 0.85;
  if (level === "hard") return 1.3;
  return 1.0;
}

function renderAllocator() {
  const weeklyHours = Number(weeklyHoursInput.value || 28);
  const items = WEIGHTAGE_DATA.map((entry, idx) => {
    const level = localStorage.getItem(`difficulty-${idx}`) || entry.difficulty;
    return { ...entry, level };
  });

  const weightedTotal = items.reduce(
    (sum, item) => sum + item.weightage * difficultyFactor(item.level),
    0
  );

  weightageTable.innerHTML = "";

  items.forEach((item, idx) => {
    const priorityScore = item.weightage * difficultyFactor(item.level);
    const hours = weightedTotal > 0 ? (weeklyHours * priorityScore) / weightedTotal : 0;

    const row = document.createElement("article");
    row.className = "weightage-row";

    const subject = document.createElement("p");
    subject.className = "subject-name";
    subject.textContent = item.subject;

    const weight = document.createElement("p");
    weight.className = "hours-chip";
    weight.textContent = `${item.weightage.toFixed(2)}%`;

    const select = document.createElement("select");
    ["easy", "medium", "hard"].forEach((level) => {
      const option = document.createElement("option");
      option.value = level;
      option.textContent = `Difficulty: ${level}`;
      option.selected = item.level === level;
      select.appendChild(option);
    });
    select.addEventListener("change", () => {
      localStorage.setItem(`difficulty-${idx}`, select.value);
      renderAllocator();
    });

    const hoursTag = document.createElement("p");
    hoursTag.className = "hours-chip";
    hoursTag.textContent = `${hours.toFixed(1)} hrs/week`;

    row.appendChild(subject);
    row.appendChild(weight);
    row.appendChild(select);
    row.appendChild(hoursTag);
    weightageTable.appendChild(row);
  });
}

function selectTodayPlan() {
  const today = new Date();
  const id = dateId(today);
  const exact = allDayPlans.find((day) => day.dateId === id);
  if (exact) return exact;
  if (today < startDate) return allDayPlans[0];
  return allDayPlans[allDayPlans.length - 1];
}

function renderTodayFocus() {
  const todayPlan = selectTodayPlan();
  if (!todayPlan) return;

  todayFocusContainer.innerHTML = "";
  todayFocusDate.textContent = `Date: ${todayPlan.date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric"
  })} | Phase: ${phaseLabel(todayPlan.phase)}`;

  todayPlan.tasks.forEach((task, idx) => {
    const box = makeCheckbox(task.storageKey, task.text, `${task.storageKey}-today-${idx}`);
    todayFocusContainer.appendChild(box);
  });

  renderTodayFocusSummary();
}

function renderTodayFocusSummary() {
  const todayPlan = selectTodayPlan();
  if (!todayPlan) return;
  const done = todayPlan.tasks.filter((task) => localStorage.getItem(task.storageKey) === "1").length;
  const total = todayPlan.tasks.length;
  todayFocusDate.textContent = `${todayFocusDate.textContent.split(" | Done:")[0]} | Done: ${done}/${total}`;
}

function completionRatioForDay(dayPlan) {
  const done = dayPlan.tasks.filter((task) => localStorage.getItem(task.storageKey) === "1").length;
  return dayPlan.tasks.length > 0 ? done / dayPlan.tasks.length : 0;
}

function heatLevel(ratio) {
  if (ratio >= 0.8) return 4;
  if (ratio >= 0.6) return 3;
  if (ratio >= 0.35) return 2;
  if (ratio > 0) return 1;
  return 0;
}

function renderHeatmap() {
  heatmapGrid.innerHTML = "";

  allDayPlans.forEach((day) => {
    const ratio = completionRatioForDay(day);
    const cell = document.createElement("span");
    cell.className = `heat-cell lvl-${heatLevel(ratio)}`;
    cell.title = `${day.date.toLocaleDateString()} | ${(ratio * 100).toFixed(0)}% complete`;
    heatmapGrid.appendChild(cell);
  });

  const today = new Date();
  let streak = 0;
  for (let i = allDayPlans.length - 1; i >= 0; i -= 1) {
    const day = allDayPlans[i];
    if (day.date > today) continue;
    if (completionRatioForDay(day) >= 0.8) {
      streak += 1;
    } else {
      break;
    }
  }

  const activeDays = allDayPlans.filter((day) => completionRatioForDay(day) > 0).length;
  streakSummary.textContent = `Current streak (>=80% day completion): ${streak} day(s) | Active days: ${activeDays}`;
}

function loadMockTests() {
  try {
    const raw = localStorage.getItem(MOCK_STORAGE_KEY);
    mockTests = raw ? JSON.parse(raw) : [];
  } catch {
    mockTests = [];
  }
}

function saveMockTests() {
  localStorage.setItem(MOCK_STORAGE_KEY, JSON.stringify(mockTests));
}

function renderMockTests() {
  mockSummary.innerHTML = "";
  mockList.innerHTML = "";

  if (mockTests.length === 0) {
    const empty = document.createElement("p");
    empty.className = "day-meta";
    empty.textContent = "No mocks added yet.";
    mockList.appendChild(empty);
    return;
  }

  const scores = mockTests.map((m) => Number(m.score));
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  const best = Math.max(...scores);
  const latest = mockTests[mockTests.length - 1];

  [
    `Mocks: ${mockTests.length}`,
    `Average: ${avg.toFixed(2)}`,
    `Best: ${best.toFixed(2)}`,
    `Latest: ${latest.score.toFixed(2)} (${latest.date})`
  ].forEach((text) => {
    const chip = document.createElement("p");
    chip.className = "mock-chip";
    chip.textContent = text;
    mockSummary.appendChild(chip);
  });

  mockTests
    .slice()
    .reverse()
    .forEach((mock) => {
      const row = document.createElement("article");
      row.className = "mock-row";

      const date = document.createElement("p");
      date.textContent = mock.date;
      const score = document.createElement("p");
      score.textContent = `${mock.score.toFixed(2)} / 100`;
      const notes = document.createElement("p");
      notes.textContent = mock.notes || "-";
      const del = document.createElement("button");
      del.type = "button";
      del.textContent = "Delete";
      del.addEventListener("click", () => {
        mockTests = mockTests.filter((m) => m.id !== mock.id);
        saveMockTests();
        renderMockTests();
      });

      row.appendChild(date);
      row.appendChild(score);
      row.appendChild(notes);
      row.appendChild(del);
      mockList.appendChild(row);
    });
}

function setupMockTracker() {
  loadMockTests();
  renderMockTests();

  mockDateInput.value = dateId(new Date());

  mockAddBtn.addEventListener("click", () => {
    const date = mockDateInput.value;
    const score = Number(mockScoreInput.value);
    const notes = mockNotesInput.value.trim();

    if (!date || Number.isNaN(score) || score < 0 || score > 100) {
      return;
    }

    mockTests.push({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      date,
      score,
      notes
    });

    mockTests.sort((a, b) => new Date(a.date) - new Date(b.date));
    saveMockTests();
    renderMockTests();

    mockScoreInput.value = "";
    mockNotesInput.value = "";
  });
}

function renderPYQLinks() {
  pyqLinks.innerHTML = "";
  PYQ_LINKS.forEach((item, idx) => {
    const row = document.createElement("article");
    row.className = "pyq-row";

    const year = document.createElement("p");
    year.className = "subject-name";
    year.textContent = item.label;

    const links = document.createElement("p");
    const paper = document.createElement("a");
    paper.href = item.paper;
    paper.target = "_blank";
    paper.rel = "noopener noreferrer";
    paper.textContent = "Question Paper";

    const key = document.createElement("a");
    key.href = item.key;
    key.target = "_blank";
    key.rel = "noopener noreferrer";
    key.textContent = "Answer Key";

    links.appendChild(paper);
    links.appendChild(key);

    const solved = makeCheckbox(`pyq-${idx}`, "Solved");

    row.appendChild(year);
    row.appendChild(links);
    row.appendChild(solved);
    pyqLinks.appendChild(row);
  });
}

function buildDailyPlan() {
  RULES.forEach((rule, idx) => {
    rulesContainer.appendChild(makeCheckbox(idFor("rule", idx), rule));
  });

  const monthBlocks = new Map();
  let cursor = new Date(startDate);
  let dayIndex = 1;

  while (cursor <= endDate) {
    const currentDate = new Date(cursor);
    const key = monthKey(currentDate);

    if (!monthBlocks.has(key)) {
      const monthWrapper = document.createElement("section");
      monthWrapper.className = "month-block";

      const monthBtn = document.createElement("button");
      monthBtn.className = "month-title";
      monthBtn.type = "button";
      monthBtn.textContent = monthLabel(currentDate);

      const monthContent = document.createElement("div");
      monthContent.className = "month-content";
      monthContent.hidden = key !== monthKey(startDate);

      monthBtn.addEventListener("click", () => {
        monthContent.hidden = !monthContent.hidden;
      });

      monthWrapper.appendChild(monthBtn);
      monthWrapper.appendChild(monthContent);
      dailyPlanContainer.appendChild(monthWrapper);
      monthBlocks.set(key, monthContent);
    }

    const dayCard = document.createElement("article");
    dayCard.className = "day-card";

    const title = document.createElement("h3");
    title.textContent = `Day ${dayIndex}: ${currentDate.toLocaleDateString(undefined, {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric"
    })}`;

    const { phase, tasks } = tasksForDate(currentDate, dayIndex);
    const meta = document.createElement("p");
    meta.className = "day-meta";
    meta.textContent = `Phase: ${phaseLabel(phase)}`;

    dayCard.appendChild(title);
    dayCard.appendChild(meta);

    const dayPlan = {
      dayIndex,
      date: new Date(currentDate),
      dateId: dateId(currentDate),
      phase,
      tasks: []
    };

    tasks.forEach((task, taskIdx) => {
      const storageKey = idFor(`d${dayIndex}`, taskIdx);
      const checkboxLabel = makeCheckbox(storageKey, task);
      const input = checkboxLabel.querySelector("input");
      if (input) {
        input.dataset.dateId = dayPlan.dateId;
      }
      dayCard.appendChild(checkboxLabel);
      dayPlan.tasks.push({ storageKey, text: task });
    });

    allDayPlans.push(dayPlan);

    const monthContent = monthBlocks.get(key);
    monthContent.appendChild(dayCard);

    cursor.setDate(cursor.getDate() + 1);
    dayIndex += 1;
  }

  weeklyHoursInput.addEventListener("input", renderAllocator);
  renderAllocator();
  renderTodayFocus();
  renderHeatmap();
  renderStats();
}

function initPomodoro() {
  const timeEl = document.getElementById("pomodoro-time");
  const modeEl = document.getElementById("pomodoro-mode");
  const startBtn = document.getElementById("pomodoro-start");
  const pauseBtn = document.getElementById("pomodoro-pause");
  const resetBtn = document.getElementById("pomodoro-reset");
  const presetWorkBtn = document.getElementById("preset-work");
  const presetFocusBtn = document.getElementById("preset-focus");

  let workMinutes = 25;
  let breakMinutes = 5;
  let mode = "work";
  let remainingSeconds = workMinutes * 60;
  let timer = null;

  function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  function refresh() {
    timeEl.textContent = formatTime(remainingSeconds);
    modeEl.textContent = `Mode: ${mode === "work" ? "Work" : "Break"}`;
  }

  function nextMode() {
    mode = mode === "work" ? "break" : "work";
    remainingSeconds = (mode === "work" ? workMinutes : breakMinutes) * 60;
    refresh();
  }

  function startTimer() {
    if (timer) return;
    timer = setInterval(() => {
      if (remainingSeconds > 0) {
        remainingSeconds -= 1;
        refresh();
        return;
      }

      nextMode();
    }, 1000);
  }

  function pauseTimer() {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
  }

  function resetTimer() {
    pauseTimer();
    mode = "work";
    remainingSeconds = workMinutes * 60;
    refresh();
  }

  function applyPreset(newWork, newBreak) {
    workMinutes = newWork;
    breakMinutes = newBreak;
    resetTimer();
  }

  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);
  presetWorkBtn.addEventListener("click", () => applyPreset(25, 5));
  presetFocusBtn.addEventListener("click", () => applyPreset(50, 10));

  refresh();
}

buildDailyPlan();
renderPYQLinks();
setupMockTracker();
initPomodoro();
