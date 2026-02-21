const RULES = [
  "No skipping morning GATE slot for 2 days in a row.",
  "During 9 AM-3 PM trading: max 2% capital risk per day.",
  "Always set stop loss before entering any trade.",
  "Write daily trading journal (win/loss + reason).",
  "Solve minimum 20 GATE questions daily (mixed easy + medium).",
  "Every Sunday: review mistakes and plan next week.",
  "Sleep at least 7 hours. No compromise in Jan 2027."
];

const startDate = new Date("2026-02-21");
const endDate = new Date("2027-01-31");
const rulesContainer = document.getElementById("rules");
const weeksContainer = document.getElementById("weeks");

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
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (year === 2026 && month <= 3) return "Foundation";
  if (year === 2026 && month <= 7) return "Core Build";
  if (year === 2026 && month <= 10) return "Problem Depth";
  if (year === 2026 && month <= 12) return "Revision + Tests";
  return "Final Sprint";
}

function weekTasks(phase) {
  const common = [
    "Complete 6 morning study sessions",
    "Complete 6 evening practice sessions",
    "Write trading journal for all market days",
    "Do Sunday review + next-week plan"
  ];

  const phaseTasks = {
    Foundation: "Finish 2 beginner topics + 120 practice questions",
    "Core Build": "Finish 2 core subjects + 2 PYQ sets",
    "Problem Depth": "Solve 3 PYQ papers topic-wise",
    "Revision + Tests": "Take 1 mock + make error list",
    "Final Sprint": "Take 2 mocks + revise weak notes"
  };

  return [...common, phaseTasks[phase]];
}

let current = new Date(startDate);
let weekNumber = 1;

while (current <= endDate) {
  const weekStart = new Date(current);
  const weekEnd = new Date(current);
  weekEnd.setDate(weekEnd.getDate() + 6);
  if (weekEnd > endDate) weekEnd.setTime(endDate.getTime());

  const phase = phaseFor(weekStart);
  const card = document.createElement("article");
  card.className = "week-card";

  const title = document.createElement("h3");
  title.textContent = `Week ${weekNumber}: ${weekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()} (${phase})`;
  card.appendChild(title);

  weekTasks(phase).forEach((task, taskIdx) => {
    card.appendChild(makeCheckbox(idFor(`w${weekNumber}`, taskIdx), task));
  });

  weeksContainer.appendChild(card);

  current.setDate(current.getDate() + 7);
  weekNumber += 1;
}
