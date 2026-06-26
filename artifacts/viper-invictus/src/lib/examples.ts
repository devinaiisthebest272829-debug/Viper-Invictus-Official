export interface Example {
  id: string;
  category: string;
  name: string;
  description: string;
  code: string;
}

export const EXAMPLES: Example[] = [
  {
    id: "hello",
    category: "Basics",
    name: "Hello, World!",
    description: "Your first Viper Invictus program",
    code: `// Welcome to Viper Invictus!
// A language for everything: games, apps, art, and more.

print("Hello, World!")
print("Welcome to Viper Invictus!")

let name = "Developer"
print(\`Hey there, \${name}! Let's build something amazing.\`)
`,
  },
  {
    id: "variables",
    category: "Basics",
    name: "Variables & Types",
    description: "Working with different data types",
    code: `// Variables
let age = 25
var name = "Viper"
const PI = 3.14159

// Types: number, string, bool, null, array, object
let isAwesome = true
let nothing = null
let scores = [95, 87, 92, 78, 100]
let person = { name: "Ada", age: 36, job: "Programmer" }

print(\`Name: \${name}, Age: \${age}\`)
print(\`Pi is approximately \${PI}\`)
print(\`Is awesome: \${isAwesome}\`)
print(\`Scores: \${scores}\`)
print(\`Person: \${person.name}, job: \${person.job}\`)

// String operations
let greeting = "Hello"
print(greeting.length)
print(greeting.upper())
print(greeting.lower())
print(greeting.contains("ell"))
`,
  },
  {
    id: "functions",
    category: "Basics",
    name: "Functions & Closures",
    description: "Functions as first-class values",
    code: `// Basic function
fn greet(name) {
  return \`Hello, \${name}!\`
}

print(greet("World"))

// Functions are first-class
fn apply(func, value) {
  return func(value)
}

fn double(x) { return x * 2 }
fn square(x) { return x * x }

print(apply(double, 5))   // 10
print(apply(square, 4))   // 16

// Closures
fn makeCounter(start) {
  let count = start
  return fn() {
    count = count + 1
    return count
  }
}

let counter = makeCounter(0)
print(counter())  // 1
print(counter())  // 2
print(counter())  // 3

// Recursion
fn fibonacci(n) {
  if (n <= 1) { return n }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

for (let i = 0; i <= 10; i++) {
  print(\`fib(\${i}) = \${fibonacci(i)}\`)
}
`,
  },
  {
    id: "classes",
    category: "Basics",
    name: "Classes & Objects",
    description: "Object-oriented programming in Viper Invictus",
    code: `class Animal {
  init(name, sound) {
    self.name = name
    self.sound = sound
    self.energy = 100
  }

  speak() {
    print(\`\${self.name} says: \${self.sound}!\`)
  }

  eat(amount) {
    self.energy = self.energy + amount
    print(\`\${self.name} ate. Energy: \${self.energy}\`)
  }

  status() {
    return \`\${self.name} (energy: \${self.energy})\`
  }
}

class Dog < Animal {
  init(name) {
    self.name = name
    self.sound = "Woof"
    self.energy = 100
    self.tricks = []
  }

  learnTrick(trick) {
    self.tricks.push(trick)
    print(\`\${self.name} learned: \${trick}!\`)
  }

  perform() {
    if (self.tricks.length == 0) {
      print(\`\${self.name} doesn't know any tricks yet.\`)
      return
    }
    for (let trick of self.tricks) {
      print(\`\${self.name} performs: \${trick}!\`)
    }
  }
}

let rex = new Dog("Rex")
rex.speak()
rex.eat(20)
rex.learnTrick("sit")
rex.learnTrick("shake")
rex.learnTrick("roll over")
rex.perform()
print(rex.status())
`,
  },
  {
    id: "arrays",
    category: "Basics",
    name: "Arrays & Iteration",
    description: "Working with lists of data",
    code: `// Arrays
let fruits = ["apple", "banana", "cherry", "date", "elderberry"]

// Iteration
for (let fruit of fruits) {
  print(\`  - \${fruit}\`)
}

// Array methods
fruits.push("fig")
print(\`After push: \${fruits.length} items\`)

let first = fruits.shift()
print(\`Shifted: \${first}\`)

// find, filter, map, reduce
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evens = numbers.filter(fn(n) { return n % 2 == 0 })
print(\`Evens: \${evens}\`)

let doubled = numbers.map(fn(n) { return n * 2 })
print(\`Doubled: \${doubled}\`)

let sum = numbers.reduce(fn(acc, n) { return acc + n }, 0)
print(\`Sum: \${sum}\`)

// Sorting
let unsorted = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
let sorted = unsorted.sort()
print(\`Sorted: \${sorted}\`)

// Slicing
print(\`First 3: \${sorted.slice(0, 3)}\`)
`,
  },
  {
    id: "snake",
    category: "Games",
    name: "Snake Game",
    description: "Classic snake game on the canvas",
    code: `// SNAKE GAME
// Use arrow keys to control the snake!

let W = 400
let H = 400
let CELL = 20
let COLS = W / CELL
let ROWS = H / CELL

let snake = [{ x: 10, y: 10 }]
let dir = { x: 1, y: 0 }
let nextDir = { x: 1, y: 0 }
let food = { x: 15, y: 15 }
let score = 0
let gameOver = false
let speed = 150

canvas.setSize(W, H)
canvas.onKey(fn(key) {
  if (key == "ArrowUp" && dir.y == 0)    { nextDir = { x: 0, y: -1 } }
  if (key == "ArrowDown" && dir.y == 0)  { nextDir = { x: 0, y: 1 } }
  if (key == "ArrowLeft" && dir.x == 0)  { nextDir = { x: -1, y: 0 } }
  if (key == "ArrowRight" && dir.x == 0) { nextDir = { x: 1, y: 0 } }
  if (key == "r" || key == "R") { restart() }
})

fn placeFood() {
  food.x = math.floor(math.random() * COLS)
  food.y = math.floor(math.random() * ROWS)
}

fn restart() {
  snake = [{ x: 10, y: 10 }]
  dir = { x: 1, y: 0 }
  nextDir = { x: 1, y: 0 }
  placeFood()
  score = 0
  gameOver = false
}

fn update() {
  if (gameOver) { return }

  dir = nextDir
  let head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y }

  // Wrap around walls
  if (head.x < 0) { head.x = COLS - 1 }
  if (head.x >= COLS) { head.x = 0 }
  if (head.y < 0) { head.y = ROWS - 1 }
  if (head.y >= ROWS) { head.y = 0 }

  // Self collision
  for (let seg of snake) {
    if (head.x == seg.x && head.y == seg.y) {
      gameOver = true
      return
    }
  }

  snake.unshift(head)

  if (head.x == food.x && head.y == food.y) {
    score = score + 10
    speed = math.max(60, speed - 2)
    placeFood()
  } else {
    snake.pop()
  }
}

fn draw() {
  canvas.clear("#0f172a")

  // Grid dots
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      canvas.circle(x * CELL + CELL/2, y * CELL + CELL/2, 1, "#1e293b")
    }
  }

  // Food
  canvas.circle(food.x * CELL + CELL/2, food.y * CELL + CELL/2, CELL/2 - 2, "#ef4444")
  canvas.circle(food.x * CELL + CELL/2 - 2, food.y * CELL + 3, 3, "#86efac")

  // Snake
  for (let i = 0; i < snake.length; i++) {
    let seg = snake[i]
    let color = i == 0 ? "#22c55e" : "#16a34a"
    canvas.roundRect(seg.x * CELL + 1, seg.y * CELL + 1, CELL - 2, CELL - 2, 4, color)
  }

  // Score
  canvas.text(8, 20, \`Score: \${score}\`, 14, "#f1f5f9")

  if (gameOver) {
    canvas.rect(80, 150, 240, 100, "rgba(0,0,0,0.8)")
    canvas.text(W/2, 190, "GAME OVER", 28, "#ef4444", "center")
    canvas.text(W/2, 220, \`Score: \${score}\`, 18, "#f1f5f9", "center")
    canvas.text(W/2, 245, "Press R to restart", 14, "#94a3b8", "center")
  }
}

let lastTime = 0
fn gameLoop() {
  let now = timer.now()
  if (now - lastTime > speed) {
    update()
    lastTime = now
  }
  draw()
}

timer.loop(gameLoop)
`,
  },
  {
    id: "bouncing",
    category: "Games",
    name: "Bouncing Balls",
    description: "Physics simulation with bouncing balls",
    code: `// Bouncing Balls Physics Demo
let W = 500
let H = 400
canvas.setSize(W, H)

let balls = []
let gravity = 0.4
let friction = 0.98
let COLORS = ["#f87171", "#fb923c", "#fbbf24", "#34d399", "#60a5fa", "#a78bfa", "#f472b6"]

fn makeBall() {
  return {
    x: math.random() * (W - 40) + 20,
    y: math.random() * (H / 2),
    r: math.random() * 15 + 8,
    vx: (math.random() - 0.5) * 6,
    vy: math.random() * 3,
    color: COLORS[math.floor(math.random() * COLORS.length)]
  }
}

for (let i = 0; i < 12; i++) {
  balls.push(makeBall())
}

canvas.onClick(fn(x, y) {
  balls.push({
    x: x, y: y, r: math.random() * 20 + 10,
    vx: (math.random() - 0.5) * 8,
    vy: -math.random() * 5,
    color: COLORS[math.floor(math.random() * COLORS.length)]
  })
})

fn update() {
  for (let b of balls) {
    b.vy = b.vy + gravity
    b.vx = b.vx * friction
    b.x = b.x + b.vx
    b.y = b.y + b.vy

    if (b.y + b.r > H) {
      b.y = H - b.r
      b.vy = -b.vy * 0.75
    }
    if (b.y - b.r < 0) { b.y = b.r; b.vy = -b.vy * 0.6 }
    if (b.x + b.r > W) { b.x = W - b.r; b.vx = -b.vx * 0.8 }
    if (b.x - b.r < 0) { b.x = b.r; b.vx = -b.vx * 0.8 }
  }
}

fn draw() {
  canvas.clear("#0f172a")
  canvas.rect(0, H - 4, W, 4, "#334155")

  for (let b of balls) {
    // Shadow
    canvas.ellipse(b.x, H - 4, b.r * 0.8, 4, "rgba(0,0,0,0.3)")
    // Ball
    canvas.circle(b.x, b.y, b.r, b.color)
    // Shine
    canvas.circle(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.25, "rgba(255,255,255,0.4)")
  }

  canvas.text(8, 20, \`Balls: \${balls.length}  (click to add more)\`, 13, "#94a3b8")
}

timer.loop(fn() { update(); draw() })
`,
  },
  {
    id: "art",
    category: "Art",
    name: "Generative Art",
    description: "Beautiful procedural art",
    code: `// Generative Spiral Art
let W = 500
let H = 500
canvas.setSize(W, H)
canvas.clear("#050510")

let cx = W / 2
let cy = H / 2
let t = 0

fn hsl(h, s, l) {
  return \`hsl(\${h}, \${s}%, \${l}%)\`
}

fn drawSpiral() {
  canvas.clear("#050510")

  for (let i = 0; i < 800; i++) {
    let angle = i * 0.15 + t
    let radius = i * 0.28
    let x = cx + math.cos(angle) * radius
    let y = cy + math.sin(angle) * radius
    let hue = (i * 0.45 + t * 30) % 360
    let size = 2 + math.sin(i * 0.1 + t) * 1.5
    canvas.circle(x, y, size, hsl(hue, 90, 65))
  }

  // Center glow
  for (let r = 30; r > 0; r = r - 2) {
    let alpha = (30 - r) / 30
    canvas.circle(cx, cy, r, \`rgba(150, 100, 255, \${alpha * 0.15})\`)
  }

  t = t + 0.015
}

timer.loop(drawSpiral)
`,
  },
  {
    id: "clock",
    category: "Art",
    name: "Analog Clock",
    description: "A live analog clock",
    code: `// Analog Clock
let W = 400
let H = 400
canvas.setSize(W, H)
let cx = W / 2
let cy = H / 2
let R = 160

fn drawClock() {
  canvas.clear("#0f172a")

  // Face
  canvas.circle(cx, cy, R, "#1e293b")
  canvas.ringArc(cx, cy, R - 2, R, 0, math.PI * 2, "#334155")

  // Hour markers
  for (let i = 0; i < 12; i++) {
    let angle = (i / 12) * math.PI * 2 - math.PI / 2
    let outer = R - 8
    let inner = i % 3 == 0 ? R - 24 : R - 16
    let x1 = cx + math.cos(angle) * inner
    let y1 = cy + math.sin(angle) * inner
    let x2 = cx + math.cos(angle) * outer
    let y2 = cy + math.sin(angle) * outer
    let w = i % 3 == 0 ? 3 : 1.5
    canvas.line(x1, y1, x2, y2, w, i % 3 == 0 ? "#f1f5f9" : "#64748b")
  }

  // Numbers
  for (let i = 1; i <= 12; i++) {
    let angle = (i / 12) * math.PI * 2 - math.PI / 2
    let nx = cx + math.cos(angle) * (R - 40)
    let ny = cy + math.sin(angle) * (R - 40) + 5
    canvas.text(nx, ny, \`\${i}\`, 14, "#94a3b8", "center")
  }

  // Get time
  let now = timer.date()
  let hours = now.hours % 12
  let minutes = now.minutes
  let seconds = now.seconds

  // Hour hand
  let hAngle = ((hours + minutes / 60) / 12) * math.PI * 2 - math.PI / 2
  canvas.line(cx, cy,
    cx + math.cos(hAngle) * (R * 0.5),
    cy + math.sin(hAngle) * (R * 0.5), 5, "#f1f5f9")

  // Minute hand
  let mAngle = ((minutes + seconds / 60) / 60) * math.PI * 2 - math.PI / 2
  canvas.line(cx, cy,
    cx + math.cos(mAngle) * (R * 0.72),
    cy + math.sin(mAngle) * (R * 0.72), 3, "#94a3b8")

  // Second hand
  let sAngle = (seconds / 60) * math.PI * 2 - math.PI / 2
  canvas.line(cx, cy,
    cx + math.cos(sAngle) * (R * 0.82),
    cy + math.sin(sAngle) * (R * 0.82), 1.5, "#ef4444")

  // Center dot
  canvas.circle(cx, cy, 5, "#f1f5f9")
  canvas.circle(cx, cy, 3, "#0f172a")

  // Digital time
  let h = now.hours
  let m = minutes < 10 ? \`0\${minutes}\` : \`\${minutes}\`
  let s = seconds < 10 ? \`0\${seconds}\` : \`\${seconds}\`
  canvas.text(cx, cy + R - 50, \`\${h}:\${m}:\${s}\`, 16, "#64748b", "center")
}

timer.loop(drawClock)
`,
  },
  {
    id: "portfolio",
    category: "Art",
    name: "Portfolio Website",
    description: "A full multi-page website rendered entirely on canvas",
    code: `// PORTFOLIO WEBSITE
// A complete website rendered entirely on the Viper Invictus canvas
// Click the nav tabs to switch pages!

let W = 900
let H = 650
canvas.setSize(W, H)

// ============== COLORS ==============
let C = {
  bg: "#0f172a",
  card: "#1e293b",
  accent: "#7c6af7",
  accent2: "#e94560",
  text: "#f1f5f9",
  textDim: "#94a3b8",
  textDark: "#64748b",
  border: "#334155",
  hover: "#334155",
  white: "#ffffff",
}

// ============== STATE ==============
let currentPage = "home"
let navHover = ""
let btnHover = ""
let cardHover = -1
let scrollY = 0
let particles = []
let t = 0

// ============== PARTICLES ==============
for (let i = 0; i < 40; i++) {
  particles.push({
    x: math.random() * W,
    y: math.random() * H,
    r: math.random() * 2 + 1,
    vx: (math.random() - 0.5) * 0.5,
    vy: (math.random() - 0.5) * 0.5,
    alpha: math.random() * 0.5 + 0.2,
  })
}

// ============== NAV TABS ==============
let tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

let tabWidth = 100
let tabHeight = 44
let tabStartX = W / 2 - (tabs.length * tabWidth) / 2
let tabY = 10

// ============== CLICK HANDLER ==============
canvas.onClick(fn(mx, my) {
  // Nav tabs
  for (let i = 0; i < tabs.length; i++) {
    let tx = tabStartX + i * tabWidth
    if (mx > tx && mx < tx + tabWidth && my > tabY && my < tabY + tabHeight) {
      currentPage = tabs[i].id
      scrollY = 0
      return
    }
  }
  
  // Home CTA button
  if (currentPage == "home") {
    let bx = W / 2 - 80
    let by = 320
    if (mx > bx && mx < bx + 160 && my > by && my < by + 44) {
      currentPage = "projects"
      scrollY = 0
      return
    }
  }
  
  // Contact send button
  if (currentPage == "contact") {
    let bx = W / 2 - 60
    let by = 500
    if (mx > bx && mx < bx + 120 && my > by && my < by + 40) {
      return
    }
  }
})

// ============== HELPERS ==============
fn drawTextCentered(x, y, text, size, color) {
  canvas.text(x, y, text, size, color, "center")
}

fn drawCard(x, y, w, h, r, color, borderColor) {
  canvas.roundRect(x, y, w, h, r, color)
  if (borderColor) {
    canvas.roundRect(x, y, w, h, r, borderColor)
    canvas.roundRect(x + 1, y + 1, w - 2, h - 2, r - 1, color)
  }
}

fn drawButton(x, y, w, h, text, isHover, isActive) {
  let bg = isActive ? C.accent : (isHover ? C.hover : C.card)
  let r = 8
  canvas.roundRect(x, y, w, h, r, bg)
  if (isActive) {
    canvas.roundRect(x, y, w, h, r, C.accent)
  } else if (isHover) {
    canvas.roundRect(x, y, w, h, r, C.border)
  }
  canvas.text(x + w / 2, y + h / 2 + 5, text, 14, isActive ? C.white : C.textDim, "center")
}

fn drawNavTab(i, tab, isActive, isHover) {
  let x = tabStartX + i * tabWidth
  let y = tabY
  let bg = isActive ? C.accent : (isHover ? C.hover : "")
  if (bg) {
    canvas.roundRect(x + 2, y + 2, tabWidth - 4, tabHeight - 4, 6, bg)
  }
  canvas.text(x + tabWidth / 2, y + tabHeight / 2 + 5, tab.label, 14, isActive ? C.white : C.textDim, "center")
}

fn drawNavBar() {
  canvas.rect(0, 0, W, 64, C.bg)
  canvas.roundRect(20, 12, 36, 36, 8, C.accent)
  canvas.text(38, 36, "V", 18, C.white, "center")
  canvas.text(66, 36, "Viper", 16, C.text, "left")
  
  for (let i = 0; i < tabs.length; i++) {
    let isActive = tabs[i].id == currentPage
    let isHover = tabs[i].id == navHover
    drawNavTab(i, tabs[i], isActive, isHover)
  }
  
  canvas.line(0, 64, W, 64, 1, C.border)
}

// ============== PARTICLES ==============
fn updateParticles() {
  for (let p of particles) {
    p.x = p.x + p.vx
    p.y = p.y + p.vy
    if (p.x < 0) { p.x = W }
    if (p.x > W) { p.x = 0 }
    if (p.y < 0) { p.y = H }
    if (p.y > H) { p.y = 0 }
  }
}

fn drawParticles() {
  for (let p of particles) {
    let a = p.alpha + math.sin(t * 2 + p.x) * 0.1
    let color = \`rgba(124, 106, 247, \${math.max(0.1, a)})\`
    canvas.circle(p.x, p.y, p.r, color)
  }
}

// ============== HOME PAGE ==============
fn drawHome() {
  canvas.clear(C.bg)
  drawParticles()
  
  let orb1x = W / 2 + math.sin(t * 0.5) * 100
  let orb1y = 200 + math.cos(t * 0.3) * 50
  for (let r = 80; r > 0; r = r - 5) {
    let a = (80 - r) / 80 * 0.15
    canvas.circle(orb1x, orb1y, r, \`rgba(124, 106, 247, \${a})\`)
  }
  
  let orb2x = W / 2 + math.cos(t * 0.4) * 120
  let orb2y = 300 + math.sin(t * 0.6) * 60
  for (let r = 60; r > 0; r = r - 5) {
    let a = (60 - r) / 60 * 0.1
    canvas.circle(orb2x, orb2y, r, \`rgba(233, 69, 96, \${a})\`)
  }
  
  let titleY = 180
  canvas.text(W / 2, titleY, "Welcome to My Portfolio", 32, C.text, "center")
  canvas.text(W / 2, titleY + 35, "Built entirely with Viper Invictus", 16, C.textDim, "center")
  canvas.text(W / 2, titleY + 70, "A complete website rendered on the canvas", 14, C.textDark, "center")
  canvas.text(W / 2, titleY + 90, "No HTML. No CSS. Just code.", 14, C.textDark, "center")
  
  let btnW = 160
  let btnH = 44
  let btnX = W / 2 - btnW / 2
  let btnY = 320
  let isHover = btnHover == "cta"
  
  canvas.roundRect(btnX + 2, btnY + 2, btnW, btnH, 8, "rgba(124,106,247,0.3)")
  canvas.roundRect(btnX, btnY, btnW, btnH, 8, C.accent)
  if (isHover) {
    canvas.roundRect(btnX, btnY, btnW, btnH, 8, "rgba(255,255,255,0.1)")
  }
  canvas.text(btnX + btnW / 2, btnY + btnH / 2 + 5, "View Projects", 15, C.white, "center")
  
  let stats = [
    { num: "10+", label: "Projects" },
    { num: "5+", label: "Years Exp" },
    { num: "100%", label: "Canvas" },
  ]
  let cardW = 140
  let cardH = 80
  let startX = W / 2 - (stats.length * cardW + (stats.length - 1) * 20) / 2
  
  for (let i = 0; i < stats.length; i++) {
    let cx = startX + i * (cardW + 20)
    let cy = 420
    canvas.roundRect(cx, cy, cardW, cardH, 10, C.card)
    canvas.roundRect(cx, cy, cardW, cardH, 10, C.border)
    canvas.roundRect(cx + 1, cy + 1, cardW - 2, cardH - 2, 9, C.card)
    canvas.text(cx + cardW / 2, cy + 30, stats[i].num, 22, C.accent, "center")
    canvas.text(cx + cardW / 2, cy + 55, stats[i].label, 12, C.textDim, "center")
  }
}

// ============== ABOUT PAGE ==============
fn drawAbout() {
  canvas.clear(C.bg)
  drawParticles()
  
  canvas.text(W / 2, 100, "About Me", 28, C.text, "center")
  canvas.line(W / 2 - 40, 120, W / 2 + 40, 120, 2, C.accent)
  
  let cardX = W / 2 - 300
  let cardY = 160
  let cardW = 600
  let cardH = 360
  
  canvas.roundRect(cardX, cardY, cardW, cardH, 12, C.card)
  canvas.roundRect(cardX, cardY, cardW, cardH, 12, C.border)
  canvas.roundRect(cardX + 1, cardY + 1, cardW - 2, cardH - 2, 11, C.card)
  
  canvas.circle(cardX + 70, cardY + 70, 40, C.accent)
  canvas.text(cardX + 70, cardY + 75, "JD", 18, C.white, "center")
  
  canvas.text(cardX + 130, cardY + 55, "John Doe", 20, C.text, "left")
  canvas.text(cardX + 130, cardY + 80, "Full-Stack Developer", 14, C.textDim, "left")
  canvas.text(cardX + 130, cardY + 100, "Creative Coder & Designer", 12, C.textDark, "left")
  
  let bioLines = [
    "I build things that live on the web.",
    "Passionate about creative coding, game development,",
    "and pushing the boundaries of what browsers can do.",
    "This entire website is rendered on a canvas using",
    "Viper Invictus - a language built from scratch.",
  ]
  for (let i = 0; i < bioLines.length; i++) {
    canvas.text(cardX + 40, cardY + 160 + i * 22, bioLines[i], 13, C.textDim, "left")
  }
  
  let badges = ["GitHub", "Twitter", "LinkedIn", "Dribbble"]
  let badgeX = cardX + 40
  let badgeY = cardY + 300
  for (let i = 0; i < badges.length; i++) {
    let bw = 80
    let bh = 28
    canvas.roundRect(badgeX + i * 90, badgeY, bw, bh, 6, C.border)
    canvas.text(badgeX + i * 90 + bw / 2, badgeY + bh / 2 + 4, badges[i], 11, C.textDim, "center")
  }
}

// ============== PROJECTS PAGE ==============
fn drawProjects() {
  canvas.clear(C.bg)
  drawParticles()
  
  canvas.text(W / 2, 100, "My Projects", 28, C.text, "center")
  canvas.line(W / 2 - 50, 120, W / 2 + 50, 120, 2, C.accent)
  
  let projects = [
    { title: "Snake Game", desc: "Classic snake with canvas rendering", color: "#22c55e" },
    { title: "Generative Art", desc: "Procedural spiral patterns", color: "#8b5cf6" },
    { title: "Physics Sim", desc: "Bouncing balls with gravity", color: "#3b82f6" },
    { title: "Analog Clock", desc: "Live time with canvas drawing", color: "#ef4444" },
    { title: "Sorting Visualizer", desc: "Bubble sort animation", color: "#f59e0b" },
    { title: "Portfolio Site", desc: "This website you're viewing", color: "#7c6af7" },
  ]
  
  let cols = 3
  let cardW = 260
  let cardH = 140
  let gapX = 20
  let gapY = 20
  let startX = W / 2 - (cols * cardW + (cols - 1) * gapX) / 2
  let startY = 160
  
  for (let i = 0; i < projects.length; i++) {
    let col = i % cols
    let row = math.floor(i / cols)
    let cx = startX + col * (cardW + gapX)
    let cy = startY + row * (cardH + gapY) - scrollY
    
    if (cy < 60 || cy > H) { continue }
    
    let isHover = cardHover == i
    let bg = isHover ? C.hover : C.card
    
    canvas.roundRect(cx, cy, cardW, cardH, 10, bg)
    canvas.roundRect(cx, cy, cardW, cardH, 10, C.border)
    canvas.roundRect(cx + 1, cy + 1, cardW - 2, cardH - 2, 9, bg)
    
    canvas.rect(cx + 10, cy + 10, cardW - 20, 4, projects[i].color)
    canvas.text(cx + 15, cy + 40, projects[i].title, 16, C.text, "left")
    canvas.text(cx + 15, cy + 65, projects[i].desc, 12, C.textDim, "left")
    
    canvas.roundRect(cx + 15, cy + cardH - 30, 60, 20, 4, projects[i].color + "30")
    canvas.text(cx + 45, cy + cardH - 19, "Viper", 10, projects[i].color, "center")
  }
}

// ============== SKILLS PAGE ==============
fn drawSkills() {
  canvas.clear(C.bg)
  drawParticles()
  
  canvas.text(W / 2, 100, "Skills", 28, C.text, "center")
  canvas.line(W / 2 - 30, 120, W / 2 + 30, 120, 2, C.accent)
  
  let skills = [
    { name: "Viper Invictus", level: 95, color: "#7c6af7" },
    { name: "JavaScript", level: 90, color: "#f7df1e" },
    { name: "Python", level: 85, color: "#3b82f6" },
    { name: "Canvas API", level: 88, color: "#22c55e" },
    { name: "Game Dev", level: 80, color: "#ef4444" },
    { name: "Generative Art", level: 75, color: "#8b5cf6" },
    { name: "Algorithms", level: 82, color: "#f59e0b" },
    { name: "UI Design", level: 78, color: "#ec4899" },
  ]
  
  let barW = 400
  let barH = 16
  let startX = W / 2 - barW / 2
  let startY = 170
  let gap = 40
  
  for (let i = 0; i < skills.length; i++) {
    let y = startY + i * gap
    let skill = skills[i]
    
    canvas.text(startX, y - 8, skill.name, 13, C.text, "left")
    canvas.text(startX + barW, y - 8, \`\${skill.level}%\`, 12, C.textDim, "right")
    
    canvas.roundRect(startX, y + 5, barW, barH, 8, C.border)
    
    let fillW = skill.level / 100 * barW
    let animW = fillW * math.min(1, t * 0.5 + 0.1)
    canvas.roundRect(startX + 2, y + 7, animW - 4, barH - 4, 6, skill.color)
  }
  
  let cx = W / 2
  let cy = 520
  let r = 60
  
  canvas.circle(cx, cy, r, C.border)
  canvas.circle(cx, cy, r - 2, C.card)
  canvas.text(cx, cy - 8, "Viper", 14, C.text, "center")
  canvas.text(cx, cy + 10, "Expert", 12, C.accent, "center")
}

// ============== CONTACT PAGE ==============
fn drawContact() {
  canvas.clear(C.bg)
  drawParticles()
  
  canvas.text(W / 2, 100, "Get In Touch", 28, C.text, "center")
  canvas.line(W / 2 - 55, 120, W / 2 + 55, 120, 2, C.accent)
  
  let cardX = W / 2 - 250
  let cardY = 160
  let cardW = 500
  let cardH = 340
  
  canvas.roundRect(cardX, cardY, cardW, cardH, 12, C.card)
  canvas.roundRect(cardX, cardY, cardW, cardH, 12, C.border)
  canvas.roundRect(cardX + 1, cardY + 1, cardW - 2, cardH - 2, 11, C.card)
  
  let fields = [
    { label: "Name", y: 210, value: "John Doe" },
    { label: "Email", y: 270, value: "john@example.com" },
    { label: "Message", y: 330, value: "Hello, I love your work!" },
  ]
  
  for (let field of fields) {
    canvas.text(cardX + 40, field.y, field.label, 12, C.textDark, "left")
    canvas.roundRect(cardX + 40, field.y + 8, cardW - 80, 36, 6, C.border)
    canvas.roundRect(cardX + 41, field.y + 9, cardW - 82, 34, 5, C.card)
    canvas.text(cardX + 55, field.y + 28, field.value, 13, C.textDim, "left")
  }
  
  let btnX = W / 2 - 60
  let btnY = 500
  let btnW = 120
  let btnH = 40
  let isHover = btnHover == "send"
  
  canvas.roundRect(btnX, btnY, btnW, btnH, 8, isHover ? C.accent2 : C.accent)
  canvas.text(btnX + btnW / 2, btnY + btnH / 2 + 5, "Send Message", 13, C.white, "center")
  
  let socials = [
    { name: "github.com/johndoe", y: 560 },
    { name: "twitter.com/johndoe", y: 585 },
    { name: "linkedin.com/in/johndoe", y: 610 },
  ]
  
  for (let s of socials) {
    canvas.text(W / 2, s.y, s.name, 12, C.textDim, "center")
  }
}

// ============== FOOTER ==============
fn drawFooter() {
  canvas.rect(0, H - 36, W, 36, C.card)
  canvas.line(0, H - 36, W, H - 36, 1, C.border)
  canvas.text(W / 2, H - 16, \`2026 Portfolio - Built with Viper Invictus - Page: \${currentPage}\`, 11, C.textDark, "center")
}

// ============== MAIN DRAW ==============
fn draw() {
  t = t + 0.016
  
  drawNavBar()
  
  if (currentPage == "home") { drawHome() }
  else if (currentPage == "about") { drawAbout() }
  else if (currentPage == "projects") { drawProjects() }
  else if (currentPage == "skills") { drawSkills() }
  else if (currentPage == "contact") { drawContact() }
  
  drawFooter()
  
  updateParticles()
}

// Start the loop
timer.loop(draw)
`,
  },
  {
    id: "fibonacci",
    category: "Algorithms",
    name: "Sorting Algorithms",
    description: "Visualize sorting in action",
    code: `// Sorting Algorithm Visualizer
let W = 500
let H = 350
canvas.setSize(W, H)

let N = 60
let arr = []
let sorting = false
let comparisons = 0
let swaps = 0
let highlight = []

fn reset() {
  arr = []
  for (let i = 0; i < N; i++) {
    arr.push(math.floor(math.random() * (H - 40) + 10))
  }
  comparisons = 0
  swaps = 0
  highlight = []
  sorting = false
}

reset()

fn drawBars() {
  canvas.clear("#0f172a")
  let bw = W / N

  for (let i = 0; i < arr.length; i++) {
    let color = "#3b82f6"
    if (highlight.length > 0) {
      if (i == highlight[0]) { color = "#ef4444" }
      else if (i == highlight[1]) { color = "#22c55e" }
    }
    let x = i * bw
    let h = arr[i]
    canvas.rect(x + 1, H - 30 - h, bw - 2, h, color)
  }

  canvas.rect(0, H - 28, W, 28, "#1e293b")
  canvas.text(8, H - 10, \`Comparisons: \${comparisons}  Swaps: \${swaps}\`, 12, "#94a3b8")
  canvas.text(W - 8, H - 10, sorting ? "Sorting..." : "Press S to sort, R to reset", 12, "#64748b", "right")
}

fn bubbleSort() {
  sorting = true
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      comparisons = comparisons + 1
      highlight = [j, j + 1]
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        swaps = swaps + 1
      }
    }
  }
  highlight = []
  sorting = false
}

canvas.onKey(fn(key) {
  if (key == "s" || key == "S") { bubbleSort() }
  if (key == "r" || key == "R") { reset() }
})

timer.loop(drawBars)
`,
  },
  {
    id: "math-demo",
    category: "Algorithms",
    name: "Math & Algorithms",
    description: "Mathematical functions and algorithms",
    code: `// Math & Algorithms

// Prime checker
fn isPrime(n) {
  if (n < 2) { return false }
  if (n == 2) { return true }
  if (n % 2 == 0) { return false }
  let i = 3
  while (i * i <= n) {
    if (n % i == 0) { return false }
    i = i + 2
  }
  return true
}

print("Primes up to 50:")
let primes = []
for (let i = 2; i <= 50; i++) {
  if (isPrime(i)) { primes.push(i) }
}
print(primes)

// Binary search
fn binarySearch(arr, target) {
  let lo = 0
  let hi = arr.length - 1
  while (lo <= hi) {
    let mid = math.floor((lo + hi) / 2)
    if (arr[mid] == target) { return mid }
    if (arr[mid] < target) { lo = mid + 1 }
    else { hi = mid - 1 }
  }
  return -1
}

let sorted = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
print(\`\nBinary search for 23: index \${binarySearch(sorted, 23)}\`)
print(\`Binary search for 99: index \${binarySearch(sorted, 99)}\`)

// Factorial
fn factorial(n) {
  if (n <= 1) { return 1 }
  return n * factorial(n - 1)
}

print("\nFactorials:")
for (let i = 0; i <= 10; i++) {
  print(\`  \${i}! = \${factorial(i)}\`)
}

// Math functions
print(\`\nmath.sqrt(144) = \${math.sqrt(144)}\`)
print(\`math.abs(-42) = \${math.abs(-42)}\`)
print(\`math.pow(2, 10) = \${math.pow(2, 10)}\`)
print(\`math.round(3.7) = \${math.round(3.7)}\`)
print(\`math.PI = \${math.PI}\`)
print(\`math.E = \${math.E}\`)
`,
  },
  {
    id: "wireframe",
    category: "Advanced",
    name: "3D Wireframe Cube",
    description: "Real-time 3D cube projection with rotation, rendered entirely on canvas",
    code: `// 3D WIREFRAME CUBE
// Rotating 3D cube with perspective projection using only math

let W = 500
let H = 400
canvas.setSize(W, H)

let angleX = 0
let angleY = 0
let angleZ = 0

let cube = [
  { x: -60, y: -60, z: -60 },
  { x:  60, y: -60, z: -60 },
  { x:  60, y:  60, z: -60 },
  { x: -60, y:  60, z: -60 },
  { x: -60, y: -60, z:  60 },
  { x:  60, y: -60, z:  60 },
  { x:  60, y:  60, z:  60 },
  { x: -60, y:  60, z:  60 },
]

let edges = [
  [0, 1], [1, 2], [2, 3], [3, 0],
  [4, 5], [5, 6], [6, 7], [7, 4],
  [0, 4], [1, 5], [2, 6], [3, 7],
]

fn rotateX(p, a) {
  let y = p.y * math.cos(a) - p.z * math.sin(a)
  let z = p.y * math.sin(a) + p.z * math.cos(a)
  return { x: p.x, y: y, z: z }
}

fn rotateY(p, a) {
  let x = p.x * math.cos(a) + p.z * math.sin(a)
  let z = -p.x * math.sin(a) + p.z * math.cos(a)
  return { x: x, y: p.y, z: z }
}

fn rotateZ(p, a) {
  let x = p.x * math.cos(a) - p.y * math.sin(a)
  let y = p.x * math.sin(a) + p.y * math.cos(a)
  return { x: x, y: y, z: p.z }
}

fn project(p) {
  let fov = 300
  let dist = 200
  let scale = fov / (p.z + dist)
  return {
    x: p.x * scale + W / 2,
    y: p.y * scale + H / 2,
  }
}

fn draw() {
  canvas.clear("#050510")

  let rotated = []
  for (let p of cube) {
    let r = rotateX(p, angleX)
    r = rotateY(r, angleY)
    r = rotateZ(r, angleZ)
    rotated.push(r)
  }

  let projected = []
  for (let p of rotated) {
    projected.push(project(p))
  }

  // Draw edges
  for (let e of edges) {
    let a = projected[e[0]]
    let b = projected[e[1]]
    let depth = (rotated[e[0]].z + rotated[e[1]].z) / 2
    let brightness = math.max(0.3, (depth + 60) / 120)
    let r = math.floor(124 * brightness)
    let g = math.floor(106 * brightness)
    let bVal = math.floor(247 * brightness)
    let color = \`rgb(\${r}, \${g}, \${bVal})\`
    canvas.line(a.x, a.y, b.x, b.y, 2, color)
  }

  // Draw vertices
  for (let p of projected) {
    canvas.circle(p.x, p.y, 3, "#e94560")
  }

  // Info
  canvas.text(W / 2, 20, "3D Wireframe Cube", 16, "#f1f5f9", "center")
  canvas.text(10, H - 10, "Pure math projection + 60fps rotation", 12, "#64748b")

  angleX = angleX + 0.012
  angleY = angleY + 0.018
  angleZ = angleZ + 0.006
}

timer.loop(draw)
`,
  },
  {
    id: "game-of-life",
    category: "Advanced",
    name: "Conway's Game of Life",
    description: "Cellular automaton with randomized seed, step counter, and live cell count",
    code: `// CONWAY'S GAME OF LIFE
// Cellular automaton on the canvas

let W = 500
let H = 400
let CELL = 8
let COLS = math.floor(W / CELL)
let ROWS = math.floor(H / CELL)
canvas.setSize(W, H)

let grid = []
let next = []
let steps = 0
let running = true

fn initGrid() {
  grid = []
  next = []
  for (let y = 0; y < ROWS; y++) {
    let row = []
    let nRow = []
    for (let x = 0; x < COLS; x++) {
      row.push(math.random() > 0.85 ? 1 : 0)
      nRow.push(0)
    }
    grid.push(row)
    next.push(nRow)
  }
  steps = 0
}

initGrid()

fn countNeighbors(x, y) {
  let sum = 0
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dx == 0 && dy == 0) { continue }
      let nx = (x + dx + COLS) % COLS
      let ny = (y + dy + ROWS) % ROWS
      sum = sum + grid[ny][nx]
    }
  }
  return sum
}

fn update() {
  if (!running) { return }
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      let state = grid[y][x]
      let neighbors = countNeighbors(x, y)
      if (state == 0 && neighbors == 3) {
        next[y][x] = 1
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[y][x] = 0
      } else {
        next[y][x] = state
      }
    }
  }
  let tmp = grid
  grid = next
  next = tmp
  steps = steps + 1
}

fn draw() {
  canvas.clear("#0a0a15")
  let alive = 0
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] == 1) {
        alive = alive + 1
        let cx = x * CELL + CELL / 2
        let cy = y * CELL + CELL / 2
        canvas.circle(cx, cy, CELL / 2 - 1, "#34d399")
      }
    }
  }
  canvas.rect(0, H - 28, W, 28, "#1e293b")
  canvas.text(8, H - 8, \`Step: \${steps}  Alive: \${alive}\`, 12, "#94a3b8")
  canvas.text(W - 8, H - 8, "Click to pause, R to reset", 11, "#64748b", "right")
  if (steps % 5 == 0) { update() }
}

canvas.onClick(fn() {
  running = !running
})

canvas.onKey(fn(key) {
  if (key == "r" || key == "R") { initGrid() }
})

timer.loop(draw)
`,
  },
  {
    id: "fractal-tree",
    category: "Advanced",
    name: "Fractal Tree",
    description: "Recursive fractal tree with wind animation and color gradients",
    code: `// FRACTAL TREE
// Recursive tree with animated wind sway

let W = 500
let H = 450
canvas.setSize(W, H)

let t = 0
let wind = 0

fn drawBranch(x, y, len, angle, depth, maxDepth) {
  if (depth > maxDepth) { return }

  let x2 = x + math.cos(angle) * len
  let y2 = y + math.sin(angle) * len

  let thickness = math.max(1, (maxDepth - depth) * 1.5)
  let green = math.floor(100 + (depth / maxDepth) * 100)
  let red = math.floor(139 + (depth / maxDepth) * 60)
  let color = \`rgb(\${red}, \${green}, 50)\`

  canvas.line(x, y, x2, y2, thickness, color)

  let sway = wind * (depth * 0.02)
  let branchLen = len * 0.7
  let angleSpread = math.PI / 5

  if (depth < maxDepth) {
    drawBranch(x2, y2, branchLen, angle - angleSpread + sway, depth + 1, maxDepth)
    drawBranch(x2, y2, branchLen, angle + angleSpread + sway, depth + 1, maxDepth)
  } else {
    // Leaves
    canvas.circle(x2, y2, 4 + math.sin(t + x) * 1.5, "#22c55e")
    canvas.circle(x2 + 3, y2 - 2, 3, "#34d399")
  }
}

fn draw() {
  canvas.clear("#0a0a15")

  wind = math.sin(t) * 0.15

  // Ground
  canvas.rect(0, H - 20, W, 20, "#1e293b")

  // Tree
  drawBranch(W / 2, H - 20, 80, -math.PI / 2, 0, 9)

  // Info
  canvas.text(10, 20, "Fractal Tree", 16, "#f1f5f9")
  canvas.text(10, 40, "Recursive drawing + animated wind", 12, "#64748b")

  t = t + 0.02
}

timer.loop(draw)
`,
  },
  {
    id: "fireworks",
    category: "Games",
    name: "Fireworks",
    description: "Particle physics simulation with gravity, trails, explosions, and color cycling",
    code: `// FIREWORKS
// Click anywhere to launch a firework!

let W = 500
let H = 400
canvas.setSize(W, H)

let particles = []
let rockets = []
let t = 0

fn makeRocket(x, y, targetY) {
  return {
    x: x,
    y: y,
    vy: -math.random() * 3 - 5,
    vx: (math.random() - 0.5) * 2,
    targetY: targetY,
    color: \`hsl(\${math.random() * 360}, 90%, 60%)\`,
    dead: false,
  }
}

fn explode(x, y, color) {
  let count = math.floor(math.random() * 30 + 40)
  for (let i = 0; i < count; i++) {
    let angle = math.random() * math.PI * 2
    let speed = math.random() * 4 + 1
    particles.push({
      x: x,
      y: y,
      vx: math.cos(angle) * speed,
      vy: math.sin(angle) * speed,
      life: math.random() * 40 + 30,
      maxLife: math.random() * 40 + 30,
      color: color,
      size: math.random() * 2 + 1,
    })
  }
}

fn update() {
  // Update rockets
  for (let r of rockets) {
    if (r.dead) { continue }
    r.y = r.y + r.vy
    r.x = r.x + r.vx
    r.vy = r.vy + 0.05
    if (r.vy > 0 || r.y < r.targetY) {
      r.dead = true
      explode(r.x, r.y, r.color)
    }
  }

  // Update particles
  for (let p of particles) {
    p.x = p.x + p.vx
    p.y = p.y + p.vy
    p.vy = p.vy + 0.08
    p.vx = p.vx * 0.98
    p.life = p.life - 1
  }

  // Remove dead
  let aliveParticles = []
  for (let p of particles) {
    if (p.life > 0) { aliveParticles.push(p) }
  }
  particles = aliveParticles

  let aliveRockets = []
  for (let r of rockets) {
    if (!r.dead) { aliveRockets.push(r) }
  }
  rockets = aliveRockets

  // Auto launch
  if (math.random() < 0.02 && rockets.length < 3) {
    let rx = math.random() * (W - 100) + 50
    let ry = math.random() * (H * 0.4) + 50
    rockets.push(makeRocket(rx, H, ry))
  }
}

fn draw() {
  canvas.clear("#050510")

  // Draw rockets
  for (let r of rockets) {
    if (!r.dead) {
      canvas.circle(r.x, r.y, 3, r.color)
      canvas.line(r.x, r.y, r.x - r.vx * 3, r.y - r.vy * 3, 1, r.color)
    }
  }

  // Draw particles
  for (let p of particles) {
    let alpha = p.life / p.maxLife
    let color = p.color.replace("hsl", "hsla").replace(")", \`, \${alpha})\`)
    canvas.circle(p.x, p.y, p.size * alpha, color)
  }

  canvas.text(10, 20, "Click to launch fireworks!", 14, "#f1f5f9")
  canvas.text(10, 40, \`Particles: \${particles.length}\`, 11, "#64748b")
}

canvas.onClick(fn(x, y) {
  rockets.push(makeRocket(x, H, y))
})

timer.loop(fn() { update(); draw() })
`,
  },
  {
    id: "pong",
    category: "Games",
    name: "Pong",
    description: "Classic Pong with 2-player controls, ball physics, score tracking, and AI option",
    code: `// PONG
// Classic Pong - W/S for left, Arrow Up/Down for right

let W = 500
let H = 350
canvas.setSize(W, H)

let paddleH = 70
let paddleW = 10
let ballR = 8

let p1 = { y: H / 2 - paddleH / 2, score: 0 }
let p2 = { y: H / 2 - paddleH / 2, score: 0 }
let ball = { x: W / 2, y: H / 2, dx: 4, dy: 3 }
let p1Up = false
let p1Down = false
let p2Up = false
let p2Down = false

let trail = []

fn resetBall() {
  ball.x = W / 2
  ball.y = H / 2
  ball.dx = (math.random() > 0.5 ? 1 : -1) * 4
  ball.dy = (math.random() - 0.5) * 6
  trail = []
}

fn update() {
  // Paddle movement
  if (p1Up && p1.y > 0) { p1.y = p1.y - 5 }
  if (p1Down && p1.y < H - paddleH) { p1.y = p1.y + 5 }
  if (p2Up && p2.y > 0) { p2.y = p2.y - 5 }
  if (p2Down && p2.y < H - paddleH) { p2.y = p2.y + 5 }

  // Ball movement
  ball.x = ball.x + ball.dx
  ball.y = ball.y + ball.dy

  // Trail
  trail.push({ x: ball.x, y: ball.y, alpha: 1.0 })
  if (trail.length > 15) { trail.shift() }
  for (let t of trail) { t.alpha = t.alpha - 0.06 }

  // Wall bounce
  if (ball.y - ballR < 0 || ball.y + ballR > H) { ball.dy = -ball.dy }

  // Paddle collision
  if (ball.x - ballR < 20 + paddleW && ball.y > p1.y && ball.y < p1.y + paddleH) {
    ball.dx = math.abs(ball.dx) + 0.2
    ball.dy = ball.dy + (ball.y - (p1.y + paddleH / 2)) * 0.1
  }
  if (ball.x + ballR > W - 20 - paddleW && ball.y > p2.y && ball.y < p2.y + paddleH) {
    ball.dx = -math.abs(ball.dx) - 0.2
    ball.dy = ball.dy + (ball.y - (p2.y + paddleH / 2)) * 0.1
  }

  // Score
  if (ball.x < 0) { p2.score = p2.score + 1; resetBall() }
  if (ball.x > W) { p1.score = p1.score + 1; resetBall() }
}

fn draw() {
  canvas.clear("#0f172a")

  // Center line
  for (let y = 0; y < H; y = y + 20) {
    canvas.rect(W / 2 - 1, y, 2, 10, "#334155")
  }

  // Trail
  for (let t of trail) {
    if (t.alpha > 0) {
      let a = math.floor(t.alpha * 255)
      canvas.circle(t.x, t.y, ballR * 0.6, \`rgba(124, 106, 247, \${t.alpha})\`)
    }
  }

  // Paddles
  canvas.roundRect(20, p1.y, paddleW, paddleH, 4, "#7c6af7")
  canvas.roundRect(W - 20 - paddleW, p2.y, paddleW, paddleH, 4, "#e94560")

  // Ball
  canvas.circle(ball.x, ball.y, ballR, "#f1f5f9")
  canvas.circle(ball.x - 2, ball.y - 2, ballR * 0.4, "#ffffff")

  // Scores
  canvas.text(W / 2 - 40, 40, p1.score, 28, "#7c6af7", "center")
  canvas.text(W / 2 + 40, 40, p2.score, 28, "#e94560", "center")

  // Instructions
  canvas.text(W / 2, H - 15, "W/S  vs  Up/Down", 11, "#64748b", "center")
}

canvas.onKey(fn(key) {
  if (key == "w" || key == "W") { p1Up = true }
  if (key == "s" || key == "S") { p1Down = true }
  if (key == "ArrowUp") { p2Up = true }
  if (key == "ArrowDown") { p2Down = true }
})

canvas.onKey(fn(key) {
  if (key == "w" || key == "W") { p1Up = false }
  if (key == "s" || key == "S") { p1Down = false }
  if (key == "ArrowUp") { p2Up = false }
  if (key == "ArrowDown") { p2Down = false }
})

resetBall()
timer.loop(fn() { update(); draw() })
`,
  },
  {
    id: "mandelbrot",
    category: "Advanced",
    name: "Mandelbrot Explorer",
    description: "Real-time Mandelbrot set rendering with color mapping and zoom indicator",
    code: `// MANDELBROT SET
// Fractal rendering with smooth color mapping
// Optimized with JS compiler for real-time performance

let W = 400
let H = 320
canvas.setSize(W, H)

let maxIter = 40
let t = 0

fn mandelbrot(cx, cy) {
  let x = 0
  let y = 0
  let iter = 0
  while (x * x + y * y <= 4 && iter < maxIter) {
    let xtemp = x * x - y * y + cx
    y = 2 * x * y + cy
    x = xtemp
    iter = iter + 1
  }
  return iter
}

fn getColor(iter) {
  if (iter == maxIter) { return "#000000" }
  let hue = (iter * 5 + t * 30) % 360
  let sat = 80 + math.sin(iter * 0.1) * 20
  let light = 30 + math.min(1, iter / maxIter) * 40
  return \`hsl(\${hue}, \${sat}%, \${light}%)\`
}

fn draw() {
  let zoom = 1.0
  let cx = -0.7
  let cy = 0.0

  for (let py = 0; py < H; py = py + 2) {
    for (let px = 0; px < W; px = px + 2) {
      let x = (px - W / 2) * 3.5 / (W * zoom) + cx
      let y = (py - H / 2) * 2.0 / (H * zoom) + cy
      let iter = mandelbrot(x, y)
      canvas.rect(px, py, 2, 2, getColor(iter))
    }
  }

  canvas.rect(0, 0, W, 28, "#0f172a")
  canvas.text(10, 18, "Mandelbrot Set", 16, "#f1f5f9")
  canvas.text(W - 10, 18, \`maxIter: \${maxIter}\`, 12, "#64748b", "right")
}

timer.loop(draw)
`,
  },
  {
    id: "particles-advanced",
    category: "Advanced",
    name: "Particle Constellations",
    description: "Interactive particles that connect with lines when close, creating constellation patterns",
    code: `// PARTICLE CONSTELLATIONS
// Particles connect with lines when close, creating organic patterns

let W = 500
let H = 400
canvas.setSize(W, H)

let particles = []
let mouseX = W / 2
let mouseY = H / 2

for (let i = 0; i < 60; i++) {
  particles.push({
    x: math.random() * W,
    y: math.random() * H,
    vx: (math.random() - 0.5) * 1.5,
    vy: (math.random() - 0.5) * 1.5,
    r: math.random() * 2 + 1,
  })
}

fn draw() {
  canvas.clear("#0a0a15")

  // Connect nearby particles
  let dist = 120
  for (let i = 0; i < particles.length; i++) {
    let p1 = particles[i]
    for (let j = i + 1; j < particles.length; j++) {
      let p2 = particles[j]
      let dx = p1.x - p2.x
      let dy = p1.y - p2.y
      let d = math.sqrt(dx * dx + dy * dy)
      if (d < dist) {
        let alpha = (dist - d) / dist
        let a = math.floor(alpha * 100)
        canvas.line(p1.x, p1.y, p2.x, p2.y, 1, \`rgba(124, 106, 247, \${alpha})\`)
      }
    }
  }

  // Connect to mouse
  for (let p of particles) {
    let dx = p.x - mouseX
    let dy = p.y - mouseY
    let d = math.sqrt(dx * dx + dy * dy)
    if (d < 150) {
      let alpha = (150 - d) / 150
      canvas.line(p.x, p.y, mouseX, mouseY, 1, \`rgba(233, 69, 96, \${alpha})\`)
    }
  }

  // Draw particles
  for (let p of particles) {
    p.x = p.x + p.vx
    p.y = p.y + p.vy
    if (p.x < 0) { p.x = W; p.vx = -math.abs(p.vx) }
    if (p.x > W) { p.x = 0; p.vx = math.abs(p.vx) }
    if (p.y < 0) { p.y = H; p.vy = -math.abs(p.vy) }
    if (p.y > H) { p.y = 0; p.vy = math.abs(p.vy) }
    canvas.circle(p.x, p.y, p.r, "#7c6af7")
  }

  canvas.text(10, 20, "Particle Constellations", 14, "#f1f5f9")
  canvas.text(10, 38, "Click to attract particles", 11, "#64748b")
}

canvas.onClick(fn(x, y) {
  mouseX = x
  mouseY = y
  for (let p of particles) {
    let dx = mouseX - p.x
    let dy = mouseY - p.y
    let d = math.sqrt(dx * dx + dy * dy)
    if (d > 0) {
      p.vx = p.vx + (dx / d) * 3
      p.vy = p.vy + (dy / d) * 3
    }
  }
})

timer.loop(draw)
`,
  },
  {
    id: "matrix-rain",
    category: "Advanced",
    name: "Matrix Digital Rain",
    description: "Classic falling character effect with fading trails, inspired by The Matrix",
    code: `// MATRIX DIGITAL RAIN
// Falling characters with fading trails

let W = 500
let H = 400
canvas.setSize(W, H)

let cols = 25
let colW = W / cols
let drops = []
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for (let i = 0; i < cols; i++) {
  drops.push({
    y: math.random() * -H,
    speed: math.random() * 2 + 1,
    length: math.floor(math.random() * 10 + 5),
  })
}

fn draw() {
  // Fade effect
  canvas.rect(0, 0, W, H, "rgba(5, 5, 10, 0.15)")

  for (let i = 0; i < cols; i++) {
    let drop = drops[i]
    let x = i * colW + colW / 2

    for (let j = 0; j < drop.length; j++) {
      let y = drop.y - j * 14
      if (y < 0 || y > H) { continue }
      let alpha = 1 - j / drop.length
      let char = chars[math.floor(math.random() * chars.length)]
      let color = j == 0 ? "#f0fdf4" : \`rgba(34, 197, 94, \${alpha})\`
      canvas.text(x, y, char, 12, color, "center")
    }

    drop.y = drop.y + drop.speed
    if (drop.y > H + drop.length * 14) {
      drop.y = -drop.length * 14
      drop.speed = math.random() * 2 + 1
      drop.length = math.floor(math.random() * 10 + 5)
    }
  }
}

timer.loop(draw)
`,
  },
  {
    id: "synthwave",
    category: "Advanced",
    name: "Synthwave Sunset",
    description: "Procedural retro scene with animated grid, sun, and mountains",
    code: `// SYNTHWAVE SUNSET
// Procedural retro scene with animated grid and sun

let W = 500
let H = 400
canvas.setSize(W, H)

let t = 0
let sunY = 200

fn draw() {
  canvas.clear("#0a0a1a")

  // Sky gradient
  for (let y = 0; y < H / 2; y = y + 2) {
    let r = math.floor(10 + y * 0.3)
    let g = math.floor(10 + y * 0.1)
    let b = math.floor(26 + y * 0.3)
    canvas.rect(0, y, W, 2, \`rgb(\${r}, \${g}, \${b})\`)
  }

  // Sun
  let sunGlow = 120 + math.sin(t * 0.5) * 10
  for (let r = sunGlow; r > 0; r = r - 5) {
    let a = (sunGlow - r) / sunGlow * 0.3
    let color = \`rgba(255, 100, 100, \${a})\`
    canvas.circle(W / 2, sunY, r, color)
  }
  canvas.circle(W / 2, sunY, 50, "#ff6b6b")
  canvas.circle(W / 2, sunY, 45, "#ff8e8e")
  canvas.circle(W / 2, sunY, 30, "#ffb4b4")

  // Mountains
  let mountainColor = "#1a1a3e"
  for (let x = 0; x < W; x = x + 2) {
    let h1 = 60 + math.sin(x * 0.02) * 30 + math.sin(x * 0.05) * 15
    let h2 = 40 + math.sin(x * 0.03 + 1) * 20 + math.sin(x * 0.08) * 10
    let h3 = 20 + math.sin(x * 0.04 + 2) * 15
    canvas.rect(x, H - h1, 2, h1, mountainColor)
    canvas.rect(x, H - h2, 2, h2, "#16213e")
    canvas.rect(x, H - h3, 2, h3, "#0f3460")
  }

  // Grid floor
  let horizon = H / 2
  for (let y = horizon; y < H; y = y + 4) {
    let alpha = (y - horizon) / (H - horizon) * 0.3
    canvas.rect(0, y, W, 1, \`rgba(124, 106, 247, \${alpha})\`)
  }
  for (let i = -5; i <= 5; i++) {
    let x = W / 2 + i * 40 + math.sin(t * 2) * i * 5
    let alpha = 0.2 + math.abs(i) * 0.05
    canvas.line(x, horizon, W / 2 + i * 200, H, 1, \`rgba(124, 106, 247, \${alpha})\`)
  }

  t = t + 0.015
}

timer.loop(draw)
`,
  },
  {
    id: "breathing",
    category: "Art",
    name: "Harmonic Breathing",
    description: "Relaxing animated breathing guide with pulsing circles and color waves",
    code: `// HARMONIC BREATHING
// Animated breathing guide with pulsing circles

let W = 400
let H = 400
canvas.setSize(W, H)

let t = 0

fn draw() {
  canvas.clear("#0a0a1a")

  let cx = W / 2
  let cy = H / 2

  // Outer rings
  for (let i = 5; i > 0; i--) {
    let breath = math.sin(t * 0.5) * 0.5 + 0.5
    let r = 40 + i * 25 + breath * 30
    let alpha = (1 - i / 6) * 0.15 + breath * 0.05
    let hue = (t * 20 + i * 60) % 360
    canvas.circle(cx, cy, r, \`hsla(\${hue}, 80%, 60%, \${alpha})\`)
  }

  // Center orb
  let breath = math.sin(t * 0.5) * 0.5 + 0.5
  let r = 30 + breath * 25
  let hue = (t * 30) % 360

  for (let i = 20; i > 0; i = i - 2) {
    let a = (20 - i) / 20 * 0.2
    canvas.circle(cx, cy, r - i * 0.5, \`hsla(\${hue}, 80%, 60%, \${a})\`)
  }

  canvas.circle(cx, cy, r, \`hsl(\${hue}, 80%, 60%)\`)
  canvas.circle(cx, cy, r * 0.7, \`hsl(\${hue}, 90%, 75%)\`)
  canvas.circle(cx - r * 0.2, cy - r * 0.2, r * 0.15, "#ffffff")

  // Text
  let phase = ""
  let phaseTime = (t * 0.5) % (math.PI * 2)
  if (math.sin(phaseTime) > 0) {
    phase = "Breathe In..."
  } else {
    phase = "Breathe Out..."
  }
  canvas.text(cx, cy + 120, phase, 18, "#f1f5f9", "center")
  canvas.text(cx, cy + 145, "Follow the circle's rhythm", 12, "#64748b", "center")

  t = t + 0.02
}

timer.loop(draw)
`,
  },
  {
    id: "asteroids",
    category: "Games",
    name: "Asteroid Field",
    description: "Flying through an asteroid field with 3D depth effect and parallax scrolling",
    code: `// ASTEROID FIELD
// Fly through a 3D asteroid field with depth effect

let W = 500
let H = 400
canvas.setSize(W, H)

let stars = []
let t = 0

for (let i = 0; i < 100; i++) {
  stars.push({
    x: (math.random() - 0.5) * W * 2,
    y: (math.random() - 0.5) * H * 2,
    z: math.random() * 1000,
    size: math.random() * 3 + 1,
  })
}

fn draw() {
  canvas.clear("#000000")

  // Sort by depth
  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      if (stars[j].z > stars[i].z) {
        let tmp = stars[i]
        stars[i] = stars[j]
        stars[j] = tmp
      }
    }
  }

  for (let s of stars) {
    s.z = s.z - 4
    if (s.z < 1) {
      s.z = 1000
      s.x = (math.random() - 0.5) * W * 2
      s.y = (math.random() - 0.5) * H * 2
    }

    let scale = 200 / s.z
    let sx = s.x * scale + W / 2
    let sy = s.y * scale + H / 2
    let r = s.size * scale
    let alpha = math.min(1, 200 / s.z)

    if (sx > 0 && sx < W && sy > 0 && sy < H) {
      let color = s.size > 3 ? \`rgba(200, 180, 140, \${alpha})\` : \`rgba(200, 200, 255, \${alpha})\`
      if (s.size > 3) {
        canvas.circle(sx, sy, r, color)
        canvas.circle(sx - r * 0.3, sy - r * 0.3, r * 0.4, \`rgba(160, 140, 100, \${alpha})\`)
      } else {
        canvas.circle(sx, sy, r, color)
      }
    }
  }

  // HUD
  canvas.rect(0, 0, W, 30, "#000000")
  canvas.text(10, 20, "ASTEROID FIELD", 14, "#f1f5f9")
  canvas.text(W - 10, 20, \`Speed: \${math.floor(4 + t * 0.01)}\`, 12, "#64748b", "right")

  t = t + 1
}

timer.loop(draw)
`,
  },
];

export const STARTER_CODE = `// Welcome to Viper Invictus!
// A powerful language for games, art, apps, and more.

fn greet(name) {
  return \`Hello, \${name}!\`
}

let languages = ["Python", "JavaScript", "Rust", "Viper Invictus"]

for (let lang of languages) {
  print(greet(lang))
}

// Try exploring the examples in the sidebar!
`;
