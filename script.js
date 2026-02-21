const RULES = [
  "No skipping morning GATE slot for 2 days in a row.",
  "During 9 AM-3 PM trading: max 2% capital risk per day.",
  "Always set stop loss before entering any trade.",
  "Write daily trading journal (win/loss + reason).",
  "Solve minimum 20 GATE questions daily (mixed easy + medium).",
  "Every Sunday: review mistakes and plan next week.",
  "Sleep at least 7 hours. No compromise in Jan 2027."
];

const PHASE_POOLS = {
  foundation: [
    "Engineering Mathematics: Sets, relations, functions",
    "Engineering Mathematics: Propositional and predicate logic basics",
    "Engineering Mathematics: Mathematical induction",
    "Engineering Mathematics: Combinatorics and counting",
    "Engineering Mathematics: Recurrence relations basics",
    "Engineering Mathematics: Graph basics and trees",
    "Engineering Mathematics: Matrices and matrix properties",
    "Engineering Mathematics: Eigenvalues and eigenvectors",
    "Engineering Mathematics: Probability fundamentals",
    "Engineering Mathematics: Random variables and distributions",
    "Programming and Data Structures: C basics and syntax",
    "Programming and Data Structures: Conditions, loops, functions",
    "Programming and Data Structures: Arrays and strings",
    "Programming and Data Structures: Pointers and memory",
    "Programming and Data Structures: Structures and recursion",
    "Programming and Data Structures: Linked list basics",
    "Programming and Data Structures: Stack and queue basics",
    "General Aptitude: Verbal analogies and grammar",
    "General Aptitude: Reading comprehension practice",
    "General Aptitude: Quant basics (ratio, percentages, averages)"
  ],
  core: [
    "Programming and Data Structures: Trees and BST",
    "Programming and Data Structures: Heaps and hash tables",
    "Algorithms: Asymptotic notation and complexity",
    "Algorithms: Recurrence solving and divide-and-conquer",
    "Algorithms: Greedy algorithms",
    "Algorithms: Dynamic programming",
    "Algorithms: Graph algorithms (BFS, DFS, shortest path)",
    "Operating Systems: Processes, threads, CPU scheduling",
    "Operating Systems: Deadlock and synchronization",
    "Operating Systems: Memory management and paging",
    "Operating Systems: Virtual memory and file systems",
    "DBMS: ER model and relational model",
    "DBMS: Relational algebra and calculus",
    "DBMS: SQL queries and joins",
    "DBMS: Normalization and functional dependency",
    "DBMS: Transactions, serializability, recovery",
    "Computer Networks: OSI/TCP-IP and layering",
    "Computer Networks: Routing basics",
    "Computer Networks: Transport layer (TCP/UDP)",
    "Computer Networks: Application layer and DNS/HTTP"
  ],
  depth: [
    "Theory of Computation: Regular languages and DFA/NFA",
    "Theory of Computation: Context-free grammar and PDA",
    "Theory of Computation: Turing machines and decidability",
    "Theory of Computation: Complexity classes P, NP, NP-complete",
    "Compiler Design: Lexical analysis",
    "Compiler Design: Parsing techniques",
    "Compiler Design: Syntax-directed translation",
    "Compiler Design: Intermediate code generation",
    "Compiler Design: Code optimization basics",
    "Computer Organization: Number representation",
    "Computer Organization: ALU and datapath",
    "Computer Organization: Pipeline and hazards",
    "Computer Organization: Cache and memory hierarchy",
    "Digital Logic: Boolean algebra and minimization",
    "Digital Logic: Combinational circuit design",
    "Digital Logic: Sequential circuits and flip-flops",
    "Digital Logic: Counters and finite state machines",
    "Engineering Mathematics: Number theory basics",
    "General Aptitude: Mixed higher difficulty sets",
    "PYQ Focus: Topic-wise previous year questions"
  ],
  revision: [
    "Revision Block: Engineering Mathematics mixed",
    "Revision Block: Programming and Data Structures mixed",
    "Revision Block: Algorithms mixed",
    "Revision Block: Operating Systems mixed",
    "Revision Block: DBMS mixed",
    "Revision Block: Computer Networks mixed",
    "Revision Block: Theory of Computation mixed",
    "Revision Block: Compiler Design mixed",
    "Revision Block: Computer Organization mixed",
    "Revision Block: Digital Logic mixed",
    "Revision Block: General Aptitude mixed",
    "Mock Test: Full-length GATE test + analysis",
    "Error Notebook: Fix top 10 recurring mistakes"
  ],
  sprint: [
    "Full Mock Test + deep analysis",
    "Weak Topic Drill: TOC and Compiler",
    "Weak Topic Drill: OS and DBMS",
    "Weak Topic Drill: Algorithms and DS",
    "Weak Topic Drill: Networks and COA",
    "Formula/Concept revision: Engineering Mathematics",
    "General Aptitude speed drill",
    "PYQ rapid revision: selected difficult questions"
  ]
};

const startDate = new Date("2026-02-21");
const endDate = new Date("2027-01-31");
const rulesContainer = document.getElementById("rules");
const dailyPlanContainer = document.getElementById("daily-plan");

const phaseState = {
  foundation: 0,
  core: 0,
  depth: 0,
  revision: 0,
  sprint: 0
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
  });

  label.appendChild(input);
  label.append(` ${text}`);
  return label;
}

RULES.forEach((rule, idx) => {
  rulesContainer.appendChild(makeCheckbox(idFor("rule", idx), rule));
});

function phaseFor(date) {
  if (date <= new Date("2026-03-31")) return "foundation";
  if (date <= new Date("2026-07-31")) return "core";
  if (date <= new Date("2026-10-31")) return "depth";
  if (date <= new Date("2026-12-31")) return "revision";
  return "sprint";
}

function phaseLabel(phase) {
  return {
    foundation: "Foundation",
    core: "Core Build",
    depth: "Problem Depth",
    revision: "Revision + Tests",
    sprint: "Final Sprint"
  }[phase];
}

function nextTopic(phase) {
  const pool = PHASE_POOLS[phase];
  const idx = phaseState[phase];
  const topic = pool[idx % pool.length];
  const round = Math.floor(idx / pool.length) + 1;
  phaseState[phase] += 1;
  return `${topic} (Round ${round})`;
}

function taskListForDate(date, dayIndex) {
  const phase = phaseFor(date);
  const dayOfWeek = date.getDay();

  if (dayOfWeek === 0) {
    return {
      phase,
      tasks: [
        "Weekly review: revise all topics studied this week",
        "Solve 40 mixed PYQs from this week topics",
        "Analyze trading journal and list 3 mistakes + 3 improvements",
        "Plan exact topics for next 6 days"
      ]
    };
  }

  const topic = nextTopic(phase);
  const practiceCount = phase === "sprint" ? 50 : phase === "revision" ? 40 : 25;

  return {
    phase,
    tasks: [
      `Morning GATE study: ${topic}`,
      `Evening GATE practice: solve ${practiceCount} questions from same topic`,
      "Trading block (9:00 AM-3:00 PM): follow risk rules + stop loss",
      "Post-market (4:00 PM-5:00 PM): update journal with screenshots and reason"
    ]
  };
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

function buildDailyPlan() {
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

    const { phase, tasks } = taskListForDate(currentDate, dayIndex);
    const content = monthBlocks.get(key);

    const dayCard = document.createElement("article");
    dayCard.className = "day-card";

    const title = document.createElement("h3");
    title.textContent = `Day ${dayIndex}: ${currentDate.toLocaleDateString(undefined, {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric"
    })}`;

    const meta = document.createElement("p");
    meta.className = "day-meta";
    meta.textContent = `Phase: ${phaseLabel(phase)}`;

    dayCard.appendChild(title);
    dayCard.appendChild(meta);

    tasks.forEach((task, taskIdx) => {
      dayCard.appendChild(makeCheckbox(idFor(`d${dayIndex}`, taskIdx), task));
    });

    content.appendChild(dayCard);

    cursor.setDate(cursor.getDate() + 1);
    dayIndex += 1;
  }
}

buildDailyPlan();
