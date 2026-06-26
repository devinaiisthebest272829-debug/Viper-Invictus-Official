import { useState } from "react";
import { useLocation, Link } from "wouter";
import { BookOpen, ChevronRight, CheckCircle, Circle, Play, Clock, Star, ArrowRight, Lightbulb, Lock, RotateCcw } from "lucide-react";

interface Step {
  title: string;
  content: string;
  code: string;
  hint: string;
}

interface Tutorial {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  tags: string[];
  steps: Step[];
}

const TUTORIALS: Tutorial[] = [
  {
    id: "first-program",
    title: "Your First Program",
    description: "Learn the basics of Viper Invictus by building a simple greeting program",
    difficulty: "Beginner",
    duration: "5 min",
    tags: ["variables", "print", "strings"],
    steps: [
      {
        title: "Say Hello",
        content: "The simplest program uses print() to show text. Try changing the message to say your own name!",
        code: `print("Hello, World!")
print("I am learning Viper Invictus!")`,
        hint: "Text inside quotes is called a string. You can change it to anything you want.",
      },
      {
        title: "Use Variables",
        content: "Variables store values so you can reuse them. Use let to create a variable.",
        code: `let name = "Alex"
let age = 12

print("My name is " + name)
print("I am " + age + " years old")`,
        hint: "The + operator joins strings together. Try changing the name and age values.",
      },
      {
        title: "Template Strings",
        content: "Template literals (backticks) make combining text and variables easier with ${}.",
        code: `let name = "Alex"
let hobby = "coding"

print(\`Hello, my name is \${name}!\`)
print(\`I love \${hobby}!\`)`,
        hint: "Use backticks (`) instead of quotes. Put any variable inside ${}.",
      },
    ],
  },
  {
    id: "drawing-shapes",
    title: "Drawing with Canvas",
    description: "Create colorful shapes on the canvas and learn the graphics API",
    difficulty: "Beginner",
    duration: "10 min",
    tags: ["canvas", "graphics", "shapes"],
    steps: [
      {
        title: "Set Up Canvas",
        content: "First, set the canvas size and clear it with a background color.",
        code: `canvas.setSize(400, 300)
canvas.clear("#0f172a")

// Draw a rectangle
canvas.rect(50, 50, 100, 80, "#7c6af7")

// Draw a circle
canvas.circle(250, 150, 60, "#e94560")

// Draw text
canvas.text(200, 280, "My First Drawing", 16, "#fff", "center")`,
        hint: "Coordinates start at (0,0) in the top-left corner. x goes right, y goes down.",
      },
      {
        title: "Add More Shapes",
        content: "Combine rectangles, circles, and lines to create a simple scene.",
        code: `canvas.setSize(400, 300)
canvas.clear("#87ceeb")

// Ground
canvas.rect(0, 250, 400, 50, "#22c55e")

// Sun
canvas.circle(350, 50, 30, "#fbbf24")

// House body
canvas.rect(100, 150, 120, 100, "#8b5cf6")
// House roof
canvas.triangle(90, 150, 230, 150, 160, 100, "#ef4444")
// Door
canvas.rect(140, 190, 40, 60, "#5b21b6")
// Window
canvas.circle(180, 170, 15, "#fbbf24")

// Text
canvas.text(200, 280, "My House", 14, "#fff", "center")`,
        hint: "Think in layers: background first, then big shapes, then details.",
      },
      {
        title: "Colors and Styles",
        content: "Experiment with different colors. You can use hex codes, rgb(), or color names.",
        code: `canvas.setSize(400, 300)
canvas.clear("#1a1a2e")

// Gradient-like effect with circles
for (let i = 0; i < 20; i++) {
  let x = math.random() * 400
  let y = math.random() * 300
  let r = math.random() * 30 + 10
  let colors = ["#e94560", "#7c6af7", "#fbbf24", "#34d399", "#60a5fa"]
  let color = colors[math.floor(math.random() * colors.length)]
  canvas.circle(x, y, r, color)
}

canvas.text(200, 20, "Random Art", 14, "#fff", "center")`,
        hint: "math.random() gives a number between 0 and 1. math.floor() rounds down.",
      },
    ],
  },
  {
    id: "interactive-game",
    title: "Build a Click Game",
    description: "Make an interactive game where you click targets to score points",
    difficulty: "Intermediate",
    duration: "15 min",
    tags: ["canvas", "events", "game", "animation"],
    steps: [
      {
        title: "Game Setup",
        content: "Set up the canvas, game state, and a click handler.",
        code: `canvas.setSize(400, 300)

let score = 0
let target = { x: 200, y: 150, r: 25 }
let colors = ["#ef4444", "#fbbf24", "#22c55e", "#3b82f6", "#8b5cf6"]

fn moveTarget() {
  target.x = math.random() * 350 + 25
  target.y = math.random() * 250 + 25
  target.color = colors[math.floor(math.random() * colors.length)]
}

moveTarget()

canvas.onClick(fn(x, y) {
  let dx = x - target.x
  let dy = y - target.y
  let dist = math.sqrt(dx * dx + dy * dy)

  if (dist < target.r) {
    score = score + 10
    moveTarget()
  }
})

fn draw() {
  canvas.clear("#0f172a")
  canvas.circle(target.x, target.y, target.r, target.color)
  canvas.text(10, 20, "Score: " + score, 16, "#fff")
}

timer.loop(draw)`,
        hint: "The distance formula tells you if the click is inside the circle.",
      },
      {
        title: "Add Timer",
        content: "Add a countdown timer to make the game more exciting.",
        code: `canvas.setSize(400, 300)

let score = 0
let timeLeft = 30
let target = { x: 200, y: 150, r: 25, color: "#ef4444" }
let gameOver = false
let lastTime = timer.now()

fn moveTarget() {
  target.x = math.random() * 350 + 25
  target.y = math.random() * 250 + 25
  let colors = ["#ef4444", "#fbbf24", "#22c55e", "#3b82f6", "#8b5cf6"]
  target.color = colors[math.floor(math.random() * colors.length)]
}

moveTarget()

canvas.onClick(fn(x, y) {
  if (gameOver) { return }
  let dx = x - target.x
  let dy = y - target.y
  let dist = math.sqrt(dx * dx + dy * dy)
  if (dist < target.r) {
    score = score + 10
    moveTarget()
  }
})

fn draw() {
  if (!gameOver) {
    let now = timer.now()
    if (now - lastTime > 1000) {
      timeLeft = timeLeft - 1
      lastTime = now
    }
    if (timeLeft <= 0) {
      gameOver = true
    }
  }

  canvas.clear("#0f172a")
  if (!gameOver) {
    canvas.circle(target.x, target.y, target.r, target.color)
  }
  canvas.text(10, 20, "Score: " + score, 16, "#fff")
  canvas.text(10, 40, "Time: " + timeLeft, 14, "#fbbf24")

  if (gameOver) {
    canvas.text(200, 150, "GAME OVER!", 28, "#ef4444", "center")
    canvas.text(200, 180, "Score: " + score, 18, "#fff", "center")
  }
}

timer.loop(draw)`,
        hint: "timer.now() gives milliseconds. Check if 1000ms (1 second) have passed.",
      },
      {
        title: "Add Difficulty",
        content: "Make the target shrink over time and increase speed as the score grows.",
        code: `canvas.setSize(400, 300)

let score = 0
let timeLeft = 30
let target = { x: 200, y: 150, r: 30, color: "#ef4444" }
let gameOver = false
let lastTime = timer.now()
let lastMove = timer.now()

fn moveTarget() {
  target.x = math.random() * 350 + 25
  target.y = math.random() * 250 + 25
  let colors = ["#ef4444", "#fbbf24", "#22c55e", "#3b82f6", "#8b5cf6"]
  target.color = colors[math.floor(math.random() * colors.length)]
  target.r = math.max(10, 30 - math.floor(score / 50) * 3)
}

moveTarget()

canvas.onClick(fn(x, y) {
  if (gameOver) { return }
  let dx = x - target.x
  let dy = y - target.y
  let dist = math.sqrt(dx * dx + dy * dy)
  if (dist < target.r) {
    score = score + 10
    moveTarget()
    lastMove = timer.now()
  }
})

fn draw() {
  let now = timer.now()
  if (!gameOver) {
    if (now - lastTime > 1000) {
      timeLeft = timeLeft - 1
      lastTime = now
    }
    if (now - lastMove > 2000) {
      moveTarget()
      lastMove = now
    }
    if (timeLeft <= 0) {
      gameOver = true
    }
  }

  canvas.clear("#0f172a")
  if (!gameOver) {
    canvas.circle(target.x, target.y, target.r, target.color)
  }
  canvas.text(10, 20, "Score: " + score, 16, "#fff")
  canvas.text(10, 40, "Time: " + timeLeft, 14, "#fbbf24")
  canvas.text(10, 60, "Size: " + target.r, 12, "#94a3b8")

  if (gameOver) {
    canvas.text(200, 140, "GAME OVER!", 28, "#ef4444", "center")
    canvas.text(200, 175, "Score: " + score, 18, "#fff", "center")
    let msg = score > 200 ? "Amazing!" : (score > 100 ? "Great job!" : "Keep practicing!")
    canvas.text(200, 200, msg, 14, "#fbbf24", "center")
  }
}

timer.loop(draw)`,
        hint: "The target shrinks every 50 points. It also auto-moves if you don't click it for 2 seconds.",
      },
    ],
  },
  {
    id: "data-processing",
    title: "Working with Data",
    description: "Learn to filter, sort, and transform data using array methods",
    difficulty: "Intermediate",
    duration: "12 min",
    tags: ["arrays", "filter", "map", "reduce"],
    steps: [
      {
        title: "Create a Dataset",
        content: "Start with an array of objects representing real data.",
        code: `let students = [
  { name: "Alice", grade: 85, subject: "Math" },
  { name: "Bob", grade: 72, subject: "Math" },
  { name: "Carol", grade: 95, subject: "Science" },
  { name: "David", grade: 68, subject: "Science" },
  { name: "Eve", grade: 91, subject: "Math" },
]

// Print all students
for (let s of students) {
  print(\`\${s.name}: \${s.grade} in \${s.subject}\`)
}`,
        hint: "Arrays of objects are very common in real programs. Each object is one record.",
      },
      {
        title: "Filter and Sort",
        content: "Find students with high grades and sort them.",
        code: `let students = [
  { name: "Alice", grade: 85, subject: "Math" },
  { name: "Bob", grade: 72, subject: "Math" },
  { name: "Carol", grade: 95, subject: "Science" },
  { name: "David", grade: 68, subject: "Science" },
  { name: "Eve", grade: 91, subject: "Math" },
]

// Students with grade >= 80
let passing = students.filter(fn(s) { return s.grade >= 80 })
print("Passing students:")
for (let s of passing) {
  print("  " + s.name)
}

// Math students only
let mathStudents = students.filter(fn(s) { return s.subject == "Math" })
print("Math students: " + mathStudents.length)

// Average grade
let avg = students.reduce(fn(sum, s) { return sum + s.grade }, 0) / students.length
print("Average grade: " + avg)`,
        hint: "filter() returns a new array with only matching items. reduce() combines everything.",
      },
      {
        title: "Transform Data",
        content: "Use map() to transform the data into a new format.",
        code: `let students = [
  { name: "Alice", grade: 85, subject: "Math" },
  { name: "Bob", grade: 72, subject: "Math" },
  { name: "Carol", grade: 95, subject: "Science" },
  { name: "David", grade: 68, subject: "Science" },
  { name: "Eve", grade: 91, subject: "Math" },
]

// Add letter grades
let withLetters = students.map(fn(s) {
  let letter = "F"
  if (s.grade >= 90) { letter = "A" }
  else if (s.grade >= 80) { letter = "B" }
  else if (s.grade >= 70) { letter = "C" }
  else if (s.grade >= 60) { letter = "D" }

  return {
    name: s.name,
    grade: s.grade,
    letter: letter,
    subject: s.subject
  }
})

print("Grade Report:")
for (let s of withLetters) {
  print(\`  \${s.name}: \${s.grade} (\${s.letter})\`)
}

// Best student
let best = students.reduce(fn(a, b) {
  return a.grade > b.grade ? a : b
})
print("Top student: " + best.name + " with " + best.grade)`,
        hint: "map() returns a new array where each element is transformed by your function.",
      },
    ],
  },
  {
    id: "animation-patterns",
    title: "Animation Patterns",
    description: "Learn common animation techniques used in games and visual art",
    difficulty: "Advanced",
    duration: "20 min",
    tags: ["animation", "canvas", "math", "loop"],
    steps: [
      {
        title: "Smooth Movement",
        content: "Use linear interpolation (lerp) to make objects move smoothly.",
        code: `canvas.setSize(400, 300)

let pos = { x: 50, y: 150 }
let target = { x: 350, y: 150 }
let t = 0
let speed = 0.02

fn draw() {
  canvas.clear("#0f172a")

  // lerp between current position and target
  pos.x = math.lerp(pos.x, target.x, speed)
  pos.y = math.lerp(pos.y, target.y, speed)

  // Draw ball
  canvas.circle(pos.x, pos.y, 15, "#7c6af7")
  // Draw target
  canvas.circle(target.x, target.y, 8, "#e94560")
  // Draw line
  canvas.line(pos.x, pos.y, target.x, target.y, 1, "#ffffff20")

  // Draw text
  canvas.text(10, 20, "Click to set target", 14, "#fff")
}

canvas.onClick(fn(x, y) {
  target.x = x
  target.y = y
})

timer.loop(draw)`,
        hint: "lerp(a, b, t) moves a closer to b by fraction t. Smaller t = smoother, slower.",
      },
      {
        title: "Particle System",
        content: "Create multiple moving particles with physics.",
        code: `canvas.setSize(400, 300)

let particles = []

for (let i = 0; i < 50; i++) {
  particles.push({
    x: math.random() * 400,
    y: math.random() * 300,
    vx: (math.random() - 0.5) * 2,
    vy: (math.random() - 0.5) * 2,
    r: math.random() * 3 + 1,
    color: math.random() > 0.5 ? "#7c6af7" : "#e94560"
  })
}

fn draw() {
  canvas.clear("#050510")

  for (let p of particles) {
    p.x = p.x + p.vx
    p.y = p.y + p.vy

    if (p.x < 0) { p.x = 400 }
    if (p.x > 400) { p.x = 0 }
    if (p.y < 0) { p.y = 300 }
    if (p.y > 300) { p.y = 0 }

    canvas.circle(p.x, p.y, p.r, p.color)
  }

  canvas.text(10, 20, "Particles: " + particles.length, 14, "#fff")
}

timer.loop(draw)`,
        hint: "Each particle has its own position and velocity. Update them every frame.",
      },
      {
        title: "Wave Animation",
        content: "Use sine waves to create flowing motion.",
        code: `canvas.setSize(500, 300)

let t = 0
let waveCount = 3

fn draw() {
  canvas.clear("#0f172a")

  for (let w = 0; w < waveCount; w++) {
    let baseY = 80 + w * 70
    let colors = ["#7c6af7", "#e94560", "#34d399"]

    for (let x = 0; x < 500; x = x + 5) {
      let y = baseY + math.sin(x * 0.02 + t + w) * 30
      let r = 3 + math.sin(x * 0.05 + t) * 2
      canvas.circle(x, y, r, colors[w])
    }
  }

  t = t + 0.05
  canvas.text(10, 20, "Sine Wave Animation", 14, "#fff")
}

timer.loop(draw)`,
        hint: "math.sin() gives a wave between -1 and 1. Add time (t) to make it move.",
      },
    ],
  },
];

function getDifficultyColor(diff: string) {
  switch (diff) {
    case "Beginner": return "bg-emerald-500/15 text-emerald-400 border-emerald-500/20";
    case "Intermediate": return "bg-yellow-500/15 text-yellow-400 border-yellow-500/20";
    case "Advanced": return "bg-red-500/15 text-red-400 border-red-500/20";
    default: return "bg-white/10 text-white/60 border-white/20";
  }
}

export default function Tutorials() {
  const [location, setLocation] = useLocation();
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [selectedTutorial, setSelectedTutorial] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const tutorialId = selectedTutorial || location.split("/tutorials/")[1];
  const tutorial = TUTORIALS.find(t => t.id === tutorialId);

  const startTutorial = (id: string) => {
    setSelectedTutorial(id);
    setCurrentStep(0);
    setShowHint(false);
    setLocation(`/tutorials/${id}`);
  };

  const resetTutorial = () => {
    setCurrentStep(0);
    setShowHint(false);
  };

  const markStepComplete = () => {
    if (tutorial && currentStep < tutorial.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setShowHint(false);
    } else if (tutorial) {
      setCompleted(prev => new Set([...prev, tutorial.id]));
      setSelectedTutorial(null);
      setLocation("/tutorials");
    }
  };

  // Show list view
  if (!tutorial) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Tutorials</h1>
          <p className="text-sm text-white/50">Step-by-step guided projects to master Viper Invictus</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TUTORIALS.map(t => (
            <div
              key={t.id}
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`text-[10px] px-2 py-0.5 rounded border ${getDifficultyColor(t.difficulty)}`}>
                  {t.difficulty}
                </span>
                <div className="flex items-center gap-1 text-[10px] text-white/30">
                  <Clock className="w-3 h-3" />
                  {t.duration}
                </div>
              </div>

              <h3 className="font-semibold text-sm text-white/90 mb-1">{t.title}</h3>
              <p className="text-xs text-white/40 mb-3">{t.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {t.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/40">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => startTutorial(t.id)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#7c6af7] to-[#6b5de4] hover:from-[#8d7ff8] hover:to-[#7c6af7] text-white text-xs font-medium transition-all"
                >
                  <Play className="w-3 h-3" /> Start
                </button>
                {completed.has(t.id) && (
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                    <CheckCircle className="w-3 h-3" /> Completed
                  </span>
                )}
                <div className="ml-auto flex items-center gap-0.5">
                  {t.steps.map((_, i) => (
                    <Circle key={i} className="w-2 h-2 text-white/10" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Show tutorial view
  const step = tutorial.steps[currentStep];
  const progress = ((currentStep + 1) / tutorial.steps.length) * 100;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={() => { setSelectedTutorial(null); setLocation("/tutorials"); }}
            className="text-xs text-white/40 hover:text-white/60 transition-colors"
          >
            Tutorials
          </button>
          <ChevronRight className="w-3 h-3 text-white/20" />
          <span className="text-xs text-white/60">{tutorial.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">{tutorial.title}</h1>
          <span className={`text-[10px] px-2 py-0.5 rounded border ${getDifficultyColor(tutorial.difficulty)}`}>
            {tutorial.difficulty}
          </span>
        </div>
        <p className="text-sm text-white/50 mt-1">{tutorial.description}</p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2 text-xs text-white/40">
          <span>Step {currentStep + 1} of {tutorial.steps.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#7c6af7] to-[#e94560] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex gap-1 mt-2">
          {tutorial.steps.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentStep(i); setShowHint(false); }}
              className={`w-6 h-6 rounded flex items-center justify-center text-[10px] transition-all ${
                i === currentStep
                  ? "bg-[#7c6af7]/20 text-[#b8b0fc] border border-[#7c6af7]/30"
                  : i < currentStep
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-white/5 text-white/20"
              }`}
            >
              {i < currentStep ? <CheckCircle className="w-3 h-3" /> : i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-6">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-[#7c6af7]" />
            <h2 className="text-sm font-semibold text-white/80">{step.title}</h2>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">{step.content}</p>
        </div>

        <div className="p-4 bg-[#0a0a15]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-white/30 uppercase tracking-wider">Code</span>
            <Link
              href="/"
              className="text-[10px] text-[#b8b0fc] hover:underline flex items-center gap-1"
            >
              <Play className="w-3 h-3" /> Try in IDE
            </Link>
          </div>
          <pre className="text-sm font-mono text-emerald-300 leading-relaxed overflow-x-auto">
            {step.code}
          </pre>
        </div>
      </div>

      {/* Hint */}
      <div className="mb-6">
        <button
          onClick={() => setShowHint(!showHint)}
          className="flex items-center gap-2 text-xs text-white/40 hover:text-white/60 transition-colors"
        >
          <Lightbulb className="w-3.5 h-3.5" />
          {showHint ? "Hide hint" : "Need a hint?"}
        </button>
        {showHint && (
          <div className="mt-2 p-3 bg-yellow-500/5 border border-yellow-500/10 rounded-lg text-sm text-white/50">
            {step.hint}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={markStepComplete}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#7c6af7] to-[#6b5de4] hover:from-[#8d7ff8] hover:to-[#7c6af7] text-white text-sm font-medium transition-all shadow-lg shadow-[#7c6af7]/20"
        >
          <CheckCircle className="w-4 h-4" />
          {currentStep < tutorial.steps.length - 1 ? "Next Step" : "Complete Tutorial"}
        </button>

        <button
          onClick={resetTutorial}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 text-sm transition-all"
        >
          <RotateCcw className="w-4 h-4" /> Restart
        </button>

        <Link
          href="/"
          className="ml-auto flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 text-sm transition-all border border-white/10"
        >
          <Play className="w-4 h-4" /> Try in IDE
        </Link>
      </div>
    </div>
  );
}
