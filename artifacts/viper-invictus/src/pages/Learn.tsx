// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { useState } from "react";
import { useLocation, Link } from "wouter";
import { ChevronRight, CheckCircle, Circle, Play, BookOpen, Lightbulb, ArrowRight, RotateCcw } from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  content: string;
  code: string;
  expectedOutput: string;
  tips: string[];
  nextLesson: string | null;
}

const LESSONS: Lesson[] = [
  {
    id: "hello",
    title: "Hello, World!",
    description: "Your very first Viper Invictus program",
    difficulty: "Beginner",
    content: "Every programming journey starts with a simple greeting. In Viper Invictus, we use `print()` to display text. The text goes inside double quotes. Try changing the message to say your name!",
    code: `print("Hello, World!")
print("Welcome to Viper Invictus!")

let name = "Learner"
print("Hello, " + name + "!")`,
    expectedOutput: "Hello, World!\nWelcome to Viper Invictus!\nHello, Learner!",
    tips: [
      "Text inside quotes is called a \u2018string\u2019",
      "You can combine strings with the + operator",
      "Try changing the name variable to your own name"
    ],
    nextLesson: "variables",
  },
  {
    id: "variables",
    title: "Variables & Types",
    description: "Storing and using data",
    difficulty: "Beginner",
    content: "Variables are like labeled boxes that store information. Use `let` for values that change, `const` for values that never change, and `var` for function-scoped variables. Viper Invictus has six types: numbers, strings, booleans, null, arrays, and objects.",
    code: `let age = 25
const NAME = "Viper"
let isFun = true
let scores = [85, 92, 78]
let person = { name: "Ada", role: "Developer" }

print("Name: " + NAME)
print("Age: " + age)
print("Scores: " + scores)
print("Role: " + person.role)`,
    expectedOutput: "Name: Viper\nAge: 25\nScores: [85,92,78]\nRole: Developer",
    tips: [
      "const means the value cannot be reassigned",
      "Arrays are ordered lists of values",
      "Objects store data as key-value pairs"
    ],
    nextLesson: "math",
  },
  {
    id: "math",
    title: "Math Operations",
    description: "Numbers, calculations, and the math library",
    difficulty: "Beginner",
    content: "Viper Invictus supports all standard math: +, -, *, /, and % (modulo). The `math` object gives you access to constants like PI and E, plus functions like sqrt, sin, cos, and random. Try generating a random number!",
    code: `let a = 10
let b = 3

print("Addition: " + (a + b))
print("Subtraction: " + (a - b))
print("Multiplication: " + (a * b))
print("Division: " + (a / b))
print("Modulo: " + (a % b))

print("Square root: " + math.sqrt(16))
print("Random: " + math.random())
print("PI: " + math.PI)`,
    expectedOutput: "Addition: 13\nSubtraction: 7\nMultiplication: 30\nDivision: 3.333...\nModulo: 1\nSquare root: 4\nRandom: (random number)\nPI: 3.14159...",
    tips: [
      "Use parentheses around math inside string concatenation",
      "math.random() gives a number between 0 and 1",
      "math.floor() rounds down to the nearest integer"
    ],
    nextLesson: "strings",
  },
  {
    id: "strings",
    title: "String Magic",
    description: "Working with text",
    difficulty: "Beginner",
    content: "Strings are more than just text. You can transform them, search inside them, split them apart, and combine them with template literals. Template literals use backticks and can embed variables with ${}.",
    code: `let greeting = "Hello, Viper Invictus!"

print("Length: " + greeting.length)
print("Upper: " + greeting.upper())
print("Lower: " + greeting.lower())
print("Contains 'Viper': " + greeting.contains("Viper"))
print("Slice: " + greeting.slice(7, 12))

let name = "World"
let fancy = \u0060Hello, ${name}! 2 + 2 = ${2 + 2}\u0060
print(fancy)`,
    expectedOutput: "Length: 22\nUpper: HELLO, VIPER INVICTUS!\nLower: hello, viper invictus!\nContains 'Viper': true\nSlice: Viper\nHello, World! 2 + 2 = 4",
    tips: [
      "Template literals use backticks (`) not quotes",
      "${expression} inside templates evaluates the expression",
      "slice(start, end) extracts a portion of the string"
    ],
    nextLesson: "functions",
  },
  {
    id: "functions",
    title: "Functions",
    description: "Reusable blocks of code",
    difficulty: "Beginner",
    content: "Functions let you package code into reusable blocks. Define them with `fn`, give them parameters, and return values. Functions are first-class: you can store them in variables, pass them to other functions, and return them from functions.",
    code: `fn greet(name) {
  return "Hello, " + name + "!"
}

print(greet("Alice"))
print(greet("Bob"))

fn double(x) { return x * 2 }
fn triple(x) { return x * 3 }

fn apply(fn, value) {
  return fn(value)
}

print(apply(double, 5))
print(apply(triple, 5))

fn makeAdder(n) {
  return fn(x) { return x + n }
}
let add10 = makeAdder(10)
print(add10(7))`,
    expectedOutput: "Hello, Alice!\nHello, Bob!\n10\n15\n17",
    tips: [
      "Functions are values - you can pass them around",
      "A function that returns another function is called a factory",
      "Keep functions small and focused on one task"
    ],
    nextLesson: "control",
  },
  {
    id: "control",
    title: "Control Flow",
    description: "Making decisions and repeating actions",
    difficulty: "Beginner",
    content: "Programs need to make decisions. Use `if` for conditions, `while` for loops that keep going while a condition is true, and `for` for counting loops. `for..of` iterates arrays, and `for..in` iterates object keys.",
    code: `let score = 85

if (score >= 90) {
  print("Grade: A")
} else if (score >= 80) {
  print("Grade: B")
} else {
  print("Keep practicing!")
}

let i = 0
while (i < 3) {
  print("While: " + i)
  i++
}

for (let j = 0; j < 3; j++) {
  print("For: " + j)
}

let fruits = ["apple", "banana", "cherry"]
for (let fruit of fruits) {
  print("Fruit: " + fruit)
}`,
    expectedOutput: "Grade: B\nWhile: 0\nWhile: 1\nWhile: 2\nFor: 0\nFor: 1\nFor: 2\nFruit: apple\nFruit: banana\nFruit: cherry",
    tips: [
      "i++ is shorthand for i = i + 1",
      "for..of is the easiest way to loop through arrays",
      "for..in loops through the keys of an object"
    ],
    nextLesson: "arrays",
  },
  {
    id: "arrays",
    title: "Arrays & Methods",
    description: "Lists of data and transformations",
    difficulty: "Intermediate",
    content: "Arrays are ordered lists. You can add/remove items, transform them with `map`, filter with `filter`, reduce to a single value with `reduce`, and more. These methods are powerful tools for data processing.",
    code: `let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let doubled = nums.map(fn(x) { return x * 2 })
print("Doubled: " + doubled)

let evens = nums.filter(fn(x) { return x % 2 == 0 })
print("Evens: " + evens)

let sum = nums.reduce(fn(acc, x) { return acc + x }, 0)
print("Sum: " + sum)

let firstBig = nums.find(fn(x) { return x > 5 })
print("First > 5: " + firstBig)

let sorted = [3, 1, 4, 1, 5].sort()
print("Sorted: " + sorted)

nums.push(11)
print("After push: " + nums.length + " items")`,
    expectedOutput: "Doubled: [2,4,6,8,10,12,14,16,18,20]\nEvens: [2,4,6,8,10]\nSum: 55\nFirst > 5: 6\nSorted: [1,1,3,4,5]\nAfter push: 11 items",
    tips: [
      "map transforms each element and returns a new array",
      "filter returns only elements that pass the test",
      "reduce combines all elements into a single value"
    ],
    nextLesson: "classes",
  },
  {
    id: "classes",
    title: "Classes & Objects",
    description: "Object-oriented programming",
    difficulty: "Intermediate",
    content: "Classes are blueprints for objects. Use `class` to define one, `init` as the constructor, and `self` to refer to the current object. Inheritance with `<` lets you create specialized versions of existing classes.",
    code: `class Animal {
  init(name) {
    self.name = name
    self.energy = 100
  }
  speak() {
    return self.name + " makes a sound"
  }
}

class Dog < Animal {
  init(name) {
    self.name = name
    self.energy = 100
    self.tricks = []
  }
  speak() {
    return self.name + " says Woof!"
  }
  learn(trick) {
    self.tricks.push(trick)
  }
}

let buddy = new Dog("Buddy")
print(buddy.speak())
buddy.learn("sit")
buddy.learn("fetch")
print("Tricks: " + buddy.tricks)`,
    expectedOutput: "Buddy says Woof!\nTricks: [sit,fetch]",
    tips: [
      "Use < for inheritance: class Child < Parent",
      "self always refers to the current object instance",
      "override parent methods by defining them again"
    ],
    nextLesson: "canvas",
  },
  {
    id: "canvas",
    title: "Canvas Graphics",
    description: "Drawing and visual output",
    difficulty: "Intermediate",
    content: "The canvas is your visual playground. Set its size, draw shapes, add text, and handle clicks. Combine canvas with timer.loop() to create animations and games.",
    code: `canvas.setSize(400, 300)
canvas.clear("#0f172a")

// Draw a house
canvas.rect(100, 150, 200, 120, "#8b5cf6")
canvas.triangle(100, 150, 300, 150, 200, 80, "#ef4444")
canvas.rect(180, 200, 40, 70, "#1e293b")
canvas.circle(120, 180, 15, "#fbbf24")
canvas.circle(280, 180, 15, "#fbbf24")

// Text
canvas.text(200, 260, "My First Drawing", 16, "#fff", "center")

// Handle clicks
canvas.onClick(fn(x, y) {
  print("Clicked at: " + x + ", " + y)
})`,
    expectedOutput: "(canvas drawing)\nClicked at: (coordinates)",
    tips: [
      "canvas.clear() fills the entire canvas with a color",
      "Coordinates start at (0,0) in the top-left corner",
      "onClick gives you the (x,y) position of the click"
    ],
    nextLesson: "animation",
  },
  {
    id: "animation",
    title: "Animation & Games",
    description: "Bringing things to life",
    difficulty: "Advanced",
    content: "Use `timer.loop()` to run a function every frame (~60 times per second). This is the heart of animation and game development. Update state, then draw it. The canvas handles the rest.",
    code: `canvas.setSize(400, 300)
let x = 0
let speed = 3

fn draw() {
  canvas.clear("#0f172a")
  canvas.circle(x, 150, 20, "#7c6af7")
  canvas.text(10, 20, "Bouncing Ball", 14, "#fff")

  x = x + speed
  if (x > 380 || x < 20) {
    speed = -speed
  }
}

timer.loop(draw)`,
    expectedOutput: "(animated bouncing ball)",
    tips: [
      "timer.loop runs your function about 60 times per second",
      "Always clear the canvas before drawing each frame",
      "Use math.sin() and math.cos() for circular motion"
    ],
    nextLesson: null,
  },
];

function getLesson(id: string): Lesson | undefined {
  return LESSONS.find(l => l.id === id);
}

function getDifficultyColor(diff: string) {
  switch (diff) {
    case "Beginner": return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    case "Intermediate": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "Advanced": return "bg-red-500/20 text-red-400 border-red-500/30";
    default: return "bg-white/10 text-white/60 border-white/20";
  }
}

export default function Learn() {
  const [location, setLocation] = useLocation();
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [showOutput, setShowOutput] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "output">("code");

  const currentLessonId = location.split("/learn/")[1] || "hello";
  const lesson = getLesson(currentLessonId);
  const currentIndex = LESSONS.findIndex(l => l.id === currentLessonId);
  const progress = ((completed.size / LESSONS.length) * 100).toFixed(0);

  const markComplete = () => {
    setCompleted(prev => new Set([...prev, currentLessonId]));
    setShowOutput(true);
  };

  const goToLesson = (id: string) => {
    setLocation(`/learn/${id}`);
    setShowOutput(false);
    setActiveTab("code");
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <img src="/viper-logo.png" alt="Viper Invictus" className="w-7 h-7 rounded-lg" />
            Learn Viper Invictus
          </h1>
          <span className="text-sm text-white/40">{completed.size} / {LESSONS.length} lessons completed</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#7c6af7] to-[#e94560] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Lesson sidebar */}
        <div className="lg:col-span-3 space-y-2">
          <div className="text-xs text-white/30 uppercase tracking-wider font-medium mb-2">Lessons</div>
          {LESSONS.map((l, idx) => {
            const isActive = l.id === currentLessonId;
            const isCompleted = completed.has(l.id);
            return (
              <button
                key={l.id}
                onClick={() => goToLesson(l.id)}
                className={`w-full text-left flex items-start gap-3 px-3 py-3 rounded-lg transition-all text-sm ${
                  isActive
                    ? "bg-[#7c6af7]/15 border border-[#7c6af7]/30 text-white"
                    : "bg-white/5 border border-transparent hover:bg-white/8 text-white/60"
                }`}
              >
                <span className="shrink-0 mt-0.5">
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  ) : isActive ? (
                    <Circle className="w-4 h-4 text-[#b8b0fc]" />
                  ) : (
                    <Circle className="w-4 h-4 text-white/20" />
                  )}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-xs">{l.title}</div>
                  <div className="text-[10px] text-white/30 mt-0.5">{l.difficulty}</div>
                </div>
                {isActive && <ChevronRight className="w-3 h-3 shrink-0 mt-0.5" />}
              </button>
            );
          })}
        </div>

        {/* Main lesson area */}
        <div className="lg:col-span-9 space-y-6">
          {lesson ? (
            <>
              {/* Lesson header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded border ${getDifficultyColor(lesson.difficulty)}`}>
                      {lesson.difficulty}
                    </span>
                    <span className="text-xs text-white/30">Lesson {currentIndex + 1} of {LESSONS.length}</span>
                  </div>
                  <h2 className="text-xl font-bold">{lesson.title}</h2>
                  <p className="text-sm text-white/50 mt-1">{lesson.description}</p>
                </div>
                {completed.has(lesson.id) && (
                  <span className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                    <CheckCircle className="w-3 h-3" /> Completed
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-[#7c6af7]" />
                  <span className="text-sm font-medium text-white/80">Explanation</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{lesson.content}</p>
              </div>

              {/* Code / Output tabs */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="flex border-b border-white/10">
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all ${
                      activeTab === "code"
                        ? "text-[#b8b0fc] border-b-2 border-[#7c6af7]"
                        : "text-white/40 hover:text-white/60"
                    }`}
                  >
                    <CodeIcon className="w-4 h-4" /> Code
                  </button>
                  <button
                    onClick={() => setActiveTab("output")}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all ${
                      activeTab === "output"
                        ? "text-[#b8b0fc] border-b-2 border-[#7c6af7]"
                        : "text-white/40 hover:text-white/60"
                    }`}
                  >
                    <Play className="w-4 h-4" /> Expected Output
                  </button>
                </div>
                <div className="p-4">
                  {activeTab === "code" ? (
                    <pre className="text-sm font-mono text-emerald-300 leading-relaxed overflow-x-auto">{lesson.code}</pre>
                  ) : (
                    <div className="text-sm font-mono text-white/60 leading-relaxed whitespace-pre-wrap">
                      {lesson.expectedOutput}
                    </div>
                  )}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-gradient-to-br from-[#7c6af7]/10 to-[#e94560]/10 border border-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium text-white/80">Pro Tips</span>
                </div>
                <ul className="space-y-2">
                  {lesson.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-[#7c6af7] mt-0.5">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                {!completed.has(lesson.id) ? (
                  <button
                    onClick={markComplete}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#7c6af7] to-[#6b5de4] hover:from-[#8d7ff8] hover:to-[#7c6af7] text-white text-sm font-medium transition-all shadow-lg shadow-[#7c6af7]/20"
                  >
                    <CheckCircle className="w-4 h-4" /> Mark Complete
                  </button>
                ) : (
                  <button
                    onClick={() => setCompleted(prev => {
                      const next = new Set(prev);
                      next.delete(lesson.id);
                      return next;
                    })}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 text-sm transition-all"
                  >
                    <RotateCcw className="w-4 h-4" /> Reset
                  </button>
                )}

                <Link
                  href="/"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 text-sm transition-all border border-white/10"
                >
                  <Play className="w-4 h-4" /> Try in IDE
                </Link>

                {lesson.nextLesson && (
                  <button
                    onClick={() => goToLesson(lesson.nextLesson!)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 text-sm transition-all border border-white/10 ml-auto"
                  >
                    Next Lesson <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-white/40">Lesson not found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
