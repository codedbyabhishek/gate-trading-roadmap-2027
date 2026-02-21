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

const startDate = new Date("2026-02-21");
const endDate = new Date("2027-01-31");

const rulesContainer = document.getElementById("rules");
const dailyPlanContainer = document.getElementById("daily-plan");
const statsContainer = document.getElementById("stats");
const weightageTable = document.getElementById("weightage-table");
const weeklyHoursInput = document.getElementById("weekly-hours");

const scheduleState = {
  conceptQueueIndex: 0,
  studied: []
};

function idFor(prefix, index) {
  return `${prefix}-${index}`;
}

function makeCheckbox(id, text) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = id;
  input.checked = localStorage.getItem(id) === "1";
  input.addEventListener("change", () => {
    localStorage.setItem(id, input.checked ? "1" : "0");
    renderStats();
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
      `Morning concept: ${concept.label}`,
      `Evening practice: solve ${practiceCount} questions on ${concept.subject}`,
      `Spaced revision 1: ${revA}`,
      `Spaced revision 2: ${revB}`,
      "General Aptitude drill: 20-minute timed set",
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
      `Revision focus: ${subject} (concept summary + formula sheet)`,
      "PYQ drill: solve 35 questions and classify errors",
      "Error notebook update: write top 5 avoidable mistakes",
      "General Aptitude speed set: 15 questions timed",
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
      : `Weak-area repair: ${sprintSubject} focused drill + short notes polishing`,
    "PYQ rapid set: 30 selected medium/hard questions",
    "Error notebook closure: convert mistakes into one-line rules",
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
  const allBoxes = Array.from(document.querySelectorAll("input[type='checkbox']"));
  const total = allBoxes.length;
  const done = allBoxes.filter((box) => box.checked).length;
  const pct = total > 0 ? ((done / total) * 100).toFixed(1) : "0.0";

  const today = new Date();
  const todayKey = today.toLocaleDateString();
  const todayBoxes = allBoxes.filter((box) => box.dataset.dateKey === todayKey);
  const todayDone = todayBoxes.filter((box) => box.checked).length;

  statsContainer.innerHTML = "";
  [
    { label: "Total Tasks Done", value: `${done}/${total}` },
    { label: "Overall Completion", value: `${pct}%` },
    { label: "Today's Tasks Done", value: `${todayDone}/${todayBoxes.length || 0}` },
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

    tasks.forEach((task, taskIdx) => {
      const checkboxLabel = makeCheckbox(idFor(`d${dayIndex}`, taskIdx), task);
      const input = checkboxLabel.querySelector("input");
      if (input) {
        input.dataset.dateKey = currentDate.toLocaleDateString();
      }
      dayCard.appendChild(checkboxLabel);
    });

    const monthContent = monthBlocks.get(key);
    monthContent.appendChild(dayCard);

    cursor.setDate(cursor.getDate() + 1);
    dayIndex += 1;
  }

  weeklyHoursInput.addEventListener("input", renderAllocator);
  renderAllocator();
  renderStats();
}

buildDailyPlan();
