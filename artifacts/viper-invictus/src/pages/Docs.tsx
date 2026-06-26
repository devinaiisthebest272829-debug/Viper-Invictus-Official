import { useState } from "react";
import { useRoute, Link } from "wouter";
import { ChevronRight, ChevronDown, Search, Copy, Check, Terminal } from "lucide-react";

interface DocSection {
  id: string;
  title: string;
  category: string;
  content: string;
  code?: string;
  apiReference?: { name: string; signature: string; desc: string }[];
}

const DOC_SECTIONS: DocSection[] = [
  {
    id: "intro",
    title: "Getting Started",
    category: "Basics",
    content: "Viper Invictus is a browser-based programming language. Everything runs in the IDE, no installation needed. The language is designed to be familiar: it looks like JavaScript but with cleaner syntax and built-in features for graphics and animation.",
    code: `// Your first program
print("Hello, World!")

let name = "Developer"
print(\`Welcome, \${name}!\`)`,
  },
  {
    id: "variables",
    title: "Variables & Types",
    category: "Basics",
    content: "Three ways to declare variables: `let` (mutable), `const` (immutable), and `var` (function-scoped). Six built-in types: number, string, boolean, null, array, and object.",
    code: `let count = 0          // mutable
const MAX = 100        // immutable
var name = "Viper"     // function-scoped

// Types
let n = 42             // number
let s = "hello"        // string
let b = true           // boolean
let nothing = null     // null
let arr = [1, 2, 3]    // array
let obj = { x: 10 }    // object`,
    apiReference: [
      { name: "typeof", signature: "typeof(value)", desc: "Returns the type as a string: 'number', 'string', 'boolean', 'null', 'array', 'object', or 'function'" },
    ],
  },
  {
    id: "operators",
    title: "Operators",
    category: "Basics",
    content: "Standard arithmetic, comparison, and logical operators. All the ones you expect from JavaScript work here too.",
    code: `// Arithmetic
let a = 10 + 5   // 15
let b = 10 - 5   // 5
let c = 10 * 5   // 50
let d = 10 / 5   // 2
let e = 10 % 3   // 1
let f = 2 ** 3   // 8 (power)

// Comparison
a == b    // equal
a != b    // not equal
a > b     // greater than
a < b     // less than
a >= b    // greater or equal
a <= b    // less or equal

// Logical
true && false   // false
true || false   // true
!true           // false

// Compound assignment
a += 5
a -= 5
a *= 2
a /= 2
a++
a--`,
  },
  {
    id: "functions",
    title: "Functions",
    category: "Basics",
    content: "Functions are first-class values. Define them with `fn`, pass them around, return them from other functions, and store them in variables.",
    code: `// Named function
fn add(a, b) {
  return a + b
}

// Anonymous / stored
let square = fn(x) { return x * x }

// Higher-order
fn applyTwice(f, x) {
  return f(f(x))
}

// Closure
fn makeCounter(start) {
  let count = start
  return fn() {
    count = count + 1
    return count
  }
}`,
    apiReference: [
      { name: "fn", signature: "fn name(params) { ... }", desc: "Define a function. The `fn` keyword starts the declaration." },
      { name: "return", signature: "return value", desc: "Exit the function and return a value." },
    ],
  },
  {
    id: "control",
    title: "Control Flow",
    category: "Basics",
    content: "If/else for decisions, while/for for loops, for..of for arrays, for..in for objects. Standard ternary operator too.",
    code: `// if / else
if (x > 20) {
  print("big")
} else if (x > 10) {
  print("medium")
} else {
  print("small")
}

// while loop
let i = 0
while (i < 5) {
  print(i)
  i++
}

// for loop
for (let j = 0; j < 5; j++) {
  print(j)
}

// for..of (array)
let arr = ["a", "b", "c"]
for (let item of arr) {
  print(item)
}

// for..in (object keys)
let obj = { x: 1, y: 2 }
for (let key in obj) {
  print(key + ": " + obj[key])
}

// Ternary
let result = x > 10 ? "big" : "small"`,
  },
  {
    id: "classes",
    title: "Classes & OOP",
    category: "Basics",
    content: "Object-oriented programming with classes, constructors (init), and inheritance using `<`. Use `self` to refer to the current instance.",
    code: `class Shape {
  init(color) {
    self.color = color
  }
  describe() {
    return \`A \${self.color} shape\`
  }
}

// Inheritance
class Circle < Shape {
  init(color, radius) {
    self.color = color
    self.radius = radius
  }
  area() {
    return math.PI * self.radius ** 2
  }
}

let c = new Circle("red", 5)
print(c.describe())
print(c.area())`,
    apiReference: [
      { name: "class", signature: "class Name { ... }", desc: "Define a class." },
      { name: "init", signature: "init(params) { ... }", desc: "Constructor called when using `new`." },
      { name: "new", signature: "new ClassName(args)", desc: "Create an instance of a class." },
      { name: "self", signature: "self.property", desc: "Reference to the current instance." },
      { name: "<", signature: "class Child < Parent { ... }", desc: "Inheritance operator." },
    ],
  },
  {
    id: "arrays",
    title: "Arrays",
    category: "Collections",
    content: "Dynamic arrays with a rich set of methods for transformation, searching, and iteration.",
    code: `let arr = [1, 2, 3, 4, 5]

// Mutation
arr.push(6)       // add to end
arr.pop()         // remove from end
arr.unshift(0)    // add to front
arr.shift()       // remove from front
arr.reverse()

// Transformation
arr.map(fn(x) { return x * 2 })      // transform each
arr.filter(fn(x) { return x > 2 })   // keep matching
arr.reduce(fn(a, b) { return a + b }, 0)  // combine to one
arr.find(fn(x) { return x > 3 })   // first match
arr.sort()                           // sort ascending
arr.slice(1, 4)                      // extract subarray

// Query
arr.indexOf(3)       // first index
arr.includes(3)      // true/false
arr.some(fn(x) { return x > 4 })   // any match?
arr.every(fn(x) { return x > 0 })  // all match?
arr.length           // number of elements`,
    apiReference: [
      { name: "push", signature: "array.push(value)", desc: "Add value to the end." },
      { name: "pop", signature: "array.pop()", desc: "Remove and return the last element." },
      { name: "shift", signature: "array.shift()", desc: "Remove and return the first element." },
      { name: "unshift", signature: "array.unshift(value)", desc: "Add value to the beginning." },
      { name: "map", signature: "array.map(fn)", desc: "Transform each element, return new array." },
      { name: "filter", signature: "array.filter(fn)", desc: "Keep only elements where fn returns true." },
      { name: "reduce", signature: "array.reduce(fn, initial)", desc: "Combine all elements into a single value." },
      { name: "find", signature: "array.find(fn)", desc: "Return first element where fn returns true." },
      { name: "sort", signature: "array.sort()", desc: "Sort in ascending order." },
      { name: "slice", signature: "array.slice(start, end)", desc: "Extract a portion of the array." },
      { name: "splice", signature: "array.splice(start, count)", desc: "Remove or replace elements at index." },
      { name: "concat", signature: "array.concat(other)", desc: "Join two arrays." },
      { name: "flat", signature: "array.flat()", desc: "Flatten nested arrays by one level." },
      { name: "forEach", signature: "array.forEach(fn)", desc: "Execute fn for each element." },
      { name: "findIndex", signature: "array.findIndex(fn)", desc: "Return first index where fn returns true." },
      { name: "reverse", signature: "array.reverse()", desc: "Reverse the array in place." },
      { name: "join", signature: "array.join(separator)", desc: "Join elements into a string." },
      { name: "indexOf", signature: "array.indexOf(value)", desc: "Return first index of value, or -1." },
      { name: "includes", signature: "array.includes(value)", desc: "Return true if value exists." },
      { name: "some", signature: "array.some(fn)", desc: "Return true if any element passes." },
      { name: "every", signature: "array.every(fn)", desc: "Return true if all elements pass." },
      { name: "length", signature: "array.length", desc: "Number of elements." },
    ],
  },
  {
    id: "strings",
    title: "Strings",
    category: "Collections",
    content: "String manipulation with methods for transformation, searching, and extraction. Template literals with backticks.",
    code: `let s = "Hello, Viper!"

// Properties
s.length              // 15

// Methods
s.upper()             // "HELLO, VIPER!"
s.lower()             // "hello, viper!"
s.trim()              // removes whitespace
s.contains("Viper")   // true
s.startsWith("Hello")   // true
s.endsWith("!")        // true
s.replace("Hello", "Hi")  // "Hi, Viper!"
s.split(", ")          // ["Hello", "Viper!"]
s.slice(7, 12)        // "Viper"
s.indexOf("V")         // 0

// Template literals
let name = "World"
let msg = \`Hello, \${name}! 2 + 2 = \${2 + 2}\``,
    apiReference: [
      { name: "length", signature: "string.length", desc: "Number of characters." },
      { name: "upper", signature: "string.upper()", desc: "Convert to uppercase." },
      { name: "lower", signature: "string.lower()", desc: "Convert to lowercase." },
      { name: "trim", signature: "string.trim()", desc: "Remove leading/trailing whitespace." },
      { name: "trimStart", signature: "string.trimStart()", desc: "Remove leading whitespace." },
      { name: "trimEnd", signature: "string.trimEnd()", desc: "Remove trailing whitespace." },
      { name: "contains", signature: "string.contains(substring)", desc: "Return true if substring is found." },
      { name: "startsWith", signature: "string.startsWith(substring)", desc: "Return true if string starts with substring." },
      { name: "endsWith", signature: "string.endsWith(substring)", desc: "Return true if string ends with substring." },
      { name: "replace", signature: "string.replace(old, new)", desc: "Replace first occurrence of old with new." },
      { name: "split", signature: "string.split(separator)", desc: "Split into array by separator." },
      { name: "slice", signature: "string.slice(start, end)", desc: "Extract substring from start to end." },
      { name: "substring", signature: "string.substring(start, end)", desc: "Extract substring from start to end." },
      { name: "repeat", signature: "string.repeat(count)", desc: "Repeat string count times." },
      { name: "padStart", signature: "string.padStart(len, pad)", desc: "Pad string to length from start." },
      { name: "padEnd", signature: "string.padEnd(len, pad)", desc: "Pad string to length from end." },
      { name: "char", signature: "string.char(index)", desc: "Return character at index." },
      { name: "charCode", signature: "string.charCode(index)", desc: "Return character code at index." },
      { name: "toNumber", signature: "string.toNumber()", desc: "Convert string to number." },
      { name: "toBool", signature: "string.toBool()", desc: "Convert string to boolean." },
      { name: "indexOf", signature: "string.indexOf(substring)", desc: "Return first index of substring, or -1." },
    ],
  },
  {
    id: "math",
    title: "Math Library",
    category: "Standard Library",
    content: "The `math` object provides constants and functions for mathematical operations.",
    code: `math.PI              // 3.14159...
math.E               // 2.71828...
math.sqrt(16)        // 4
math.abs(-5)         // 5
math.floor(3.7)      // 3
math.ceil(3.2)       // 4
math.round(3.5)      // 4
math.pow(2, 10)      // 1024
math.log(2.718)      // ~1
math.sin(math.PI/2)  // 1
math.cos(0)          // 1
math.tan(0)          // 0
math.random()        // 0.0 to 1.0
math.randInt(1, 6)   // 1 to 6 (inclusive)
math.max(1, 5, 3)    // 5
math.min(1, 5, 3)    // 1
math.clamp(15, 0, 10) // 10 (constrain to range)
math.lerp(0, 100, 0.5) // 50 (linear interpolation)
math.floor(math.random() * 10)  // 0 to 9`,
    apiReference: [
      { name: "PI", signature: "math.PI", desc: "The ratio of a circle's circumference to its diameter." },
      { name: "E", signature: "math.E", desc: "Euler's number, the base of natural logarithms." },
      { name: "sqrt", signature: "math.sqrt(x)", desc: "Square root of x." },
      { name: "abs", signature: "math.abs(x)", desc: "Absolute value of x." },
      { name: "floor", signature: "math.floor(x)", desc: "Round down to nearest integer." },
      { name: "ceil", signature: "math.ceil(x)", desc: "Round up to nearest integer." },
      { name: "round", signature: "math.round(x)", desc: "Round to nearest integer." },
      { name: "pow", signature: "math.pow(base, exp)", desc: "Raise base to the power of exp." },
      { name: "log", signature: "math.log(x)", desc: "Natural logarithm of x." },
      { name: "log2", signature: "math.log2(x)", desc: "Base-2 logarithm of x." },
      { name: "log10", signature: "math.log10(x)", desc: "Base-10 logarithm of x." },
      { name: "sin", signature: "math.sin(x)", desc: "Sine of x (radians)." },
      { name: "cos", signature: "math.cos(x)", desc: "Cosine of x (radians)." },
      { name: "tan", signature: "math.tan(x)", desc: "Tangent of x (radians)." },
      { name: "asin", signature: "math.asin(x)", desc: "Arc sine of x." },
      { name: "acos", signature: "math.acos(x)", desc: "Arc cosine of x." },
      { name: "atan", signature: "math.atan(x)", desc: "Arc tangent of x." },
      { name: "atan2", signature: "math.atan2(y, x)", desc: "Arc tangent of y/x, returns angle in radians." },
      { name: "random", signature: "math.random()", desc: "Random number between 0 and 1." },
      { name: "randInt", signature: "math.randInt(min, max)", desc: "Random integer between min and max (inclusive)." },
      { name: "max", signature: "math.max(a, b, ...)", desc: "Maximum of given values." },
      { name: "min", signature: "math.min(a, b, ...)", desc: "Minimum of given values." },
      { name: "hypot", signature: "math.hypot(a, b)", desc: "Hypotenuse sqrt(a^2 + b^2)." },
      { name: "sign", signature: "math.sign(x)", desc: "Sign of x (-1, 0, or 1)." },
      { name: "trunc", signature: "math.trunc(x)", desc: "Remove decimal part." },
      { name: "clamp", signature: "math.clamp(val, min, max)", desc: "Constrain val to [min, max]." },
      { name: "lerp", signature: "math.lerp(a, b, t)", desc: "Linear interpolation from a to b at t (0..1)." },
    ],
  },
  {
    id: "canvas",
    title: "Canvas API",
    category: "Graphics",
    content: "Draw directly to the canvas. All drawing commands are buffered and rendered to the output panel.",
    code: `canvas.setSize(400, 300)
canvas.clear("#1a1a2e")

// Shapes
canvas.rect(x, y, w, h, color)
canvas.roundRect(x, y, w, h, radius, color)
canvas.circle(x, y, radius, color)
canvas.ellipse(x, y, rx, ry, color)
canvas.line(x1, y1, x2, y2, width, color)

// Text
canvas.text(x, y, text, size, color, align)

// Transforms
canvas.save()
canvas.restore()
canvas.translate(x, y)
canvas.rotate(angle)
canvas.scale(sx, sy)

// Events
canvas.onClick(fn(x, y) { ... })
canvas.onKey(fn(key) { ... })`,
    apiReference: [
      { name: "setSize", signature: "canvas.setSize(w, h)", desc: "Set canvas dimensions." },
      { name: "clear", signature: "canvas.clear(color)", desc: "Fill the entire canvas with color." },
      { name: "rect", signature: "canvas.rect(x, y, w, h, color)", desc: "Draw a filled rectangle." },
      { name: "roundRect", signature: "canvas.roundRect(x, y, w, h, r, color)", desc: "Draw a filled rectangle with rounded corners." },
      { name: "circle", signature: "canvas.circle(x, y, r, color)", desc: "Draw a filled circle." },
      { name: "ellipse", signature: "canvas.ellipse(x, y, rx, ry, color)", desc: "Draw a filled ellipse." },
      { name: "arc", signature: "canvas.arc(x, y, r, start, end, color)", desc: "Draw a circular arc from start to end angle (radians)." },
      { name: "ringArc", signature: "canvas.ringArc(x, y, r, start, end, w, color)", desc: "Draw a ring arc (arc with stroke width)." },
      { name: "polygon", signature: "canvas.polygon(x, y, r, sides, color)", desc: "Draw a regular polygon centered at (x, y) with radius r." },
      { name: "line", signature: "canvas.line(x1, y1, x2, y2, w, color)", desc: "Draw a line segment." },
      { name: "text", signature: "canvas.text(x, y, text, size, color, align)", desc: "Draw text. align: 'left', 'center', or 'right'." },
      { name: "image", signature: "canvas.image(url, x, y, w, h)", desc: "Draw an image from URL." },
      { name: "alpha", signature: "canvas.alpha(value)", desc: "Set global alpha (0-1)." },
      { name: "getWidth", signature: "canvas.getWidth()", desc: "Get canvas width." },
      { name: "getHeight", signature: "canvas.getHeight()", desc: "Get canvas height." },
      { name: "save", signature: "canvas.save()", desc: "Push the current transform state." },
      { name: "restore", signature: "canvas.restore()", desc: "Pop the last saved transform state." },
      { name: "translate", signature: "canvas.translate(x, y)", desc: "Move the origin." },
      { name: "rotate", signature: "canvas.rotate(angle)", desc: "Rotate by angle in radians." },
      { name: "scale", signature: "canvas.scale(sx, sy)", desc: "Scale by sx and sy." },
      { name: "onClick", signature: "canvas.onClick(fn(x, y) { ... })", desc: "Register a click handler." },
      { name: "onKey", signature: "canvas.onKey(fn(key) { ... })", desc: "Register a key press handler." },
    ],
  },
  {
    id: "timer",
    title: "Timer & Animation",
    category: "Graphics",
    content: "Animation is driven by `timer.loop()`, which calls your function at ~60 frames per second.",
    code: `canvas.setSize(400, 300)
let angle = 0

timer.loop(fn() {
  canvas.clear("#0a0a1a")
  canvas.rect(150, 150, 100, 100, "#7c6af7")
  angle += 0.02
})

// Time utilities
let t = timer.now()          // current time in ms
let d = timer.date()         // { year, month, day, hours, minutes, seconds }`,
    apiReference: [
      { name: "loop", signature: "timer.loop(fn)", desc: "Call fn every animation frame (~60fps)." },
      { name: "now", signature: "timer.now()", desc: "Return current time in milliseconds." },
      { name: "date", signature: "timer.date()", desc: "Return current date object with year, month, day, hours, minutes, seconds." },
    ],
  },
  {
    id: "print",
    title: "print()",
    category: "I/O",
    content: "The main output function. Sends text to the console panel.",
    code: `print("Hello")
print("Multiple", "values", 42)
print(\`Result: \${2 + 2}\`)`,
    apiReference: [
      { name: "print", signature: "print(value, ...)", desc: "Output values to the console. Multiple values are separated by spaces." },
    ],
  },
  {
    id: "input",
    title: "input()",
    category: "I/O",
    content: "Prompt the user for input. Returns a string.",
    code: `let name = input("What is your name?")
print("Hello, " + name)`,
    apiReference: [
      { name: "input", signature: "input(prompt)", desc: "Show a prompt dialog and return the user's input as a string." },
    ],
  },
  {
    id: "objects",
    title: "Objects",
    category: "Collections",
    content: "Objects are collections of key-value pairs. Create them with literal syntax or add properties dynamically.",
    code: `let person = {
  name: "Ada",
  age: 36,
  skills: ["coding", "math", "art"]
}

// Access
print(person.name)
print(person["age"])

// Add / modify
person.job = "Developer"
person["city"] = "London"

// Delete
delete person.city

// Check
print(person.hasOwnProperty("name"))`,
    apiReference: [
      { name: "hasOwnProperty", signature: "obj.hasOwnProperty(key)", desc: "Return true if key exists on the object." },
    ],
  },
  {
    id: "errors",
    title: "Error Handling",
    category: "Basics",
    content: "Viper Invictus reports all syntax errors at once during parsing. Runtime errors are thrown immediately with a clear message. Use try/catch for error recovery and throw for custom errors.",
    code: `// Syntax errors (all reported at once)
let x =        // missing value
fn() { print("hi" }  // missing closing paren

// Runtime errors
let arr = [1, 2, 3]
print(arr[10])  // index out of bounds

let obj = {}
print(obj.nonexistent)  // undefined property

// Try / Catch
fn divide(a, b) {
  if (b == 0) { throw "Cannot divide by zero" }
  return a / b
}

try {
  let result = divide(10, 0)
  print("Result: " + result)
} catch (err) {
  print("Error: " + err)
}

// Do-while loop
let i = 0
do {
  print("At least once: " + i)
  i = i + 1
} while (i < 0)

// Switch statement
let score = 85
switch (score) {
  case 100: print("Perfect!"); break
  case 90:  print("Excellent"); break
  case 80:  print("Great"); break
  case 70:  print("Good"); break
  default:  print("Keep trying")
}`,
  },
];

const CATEGORIES = Array.from(new Set(DOC_SECTIONS.map(d => d.category)));

export default function Docs() {
  const [match, params] = useRoute("/docs/:topic");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<Set<string>>(new Set(["intro"]));
  const [activeCategory, setActiveCategory] = useState("All");
  const [copied, setCopied] = useState<string | null>(null);

  const currentTopic = match ? params?.topic : null;
  const activeSection = DOC_SECTIONS.find(d => d.id === currentTopic) || DOC_SECTIONS[0];

  const filtered = DOC_SECTIONS.filter(d => {
    const matchesSearch = d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.content.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || d.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpand = (id: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code.slice(0, 20));
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Documentation</h1>
        <p className="text-sm text-white/50">Complete reference for the Viper Invictus language</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-3 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search docs..."
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7c6af7]/50"
            />
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-1.5">
            {["All", ...CATEGORIES].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#7c6af7]/15 text-[#b8b0fc] border border-[#7c6af7]/30"
                    : "bg-white/5 text-white/40 hover:text-white/60 border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Section list */}
          <div className="space-y-1">
            {filtered.map(section => {
              const isActive = section.id === activeSection.id;
              return (
                <a
                  key={section.id}
                  href={`/docs/${section.id}`}
                  className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                    isActive
                      ? "bg-[#7c6af7]/15 text-[#b8b0fc] border border-[#7c6af7]/20"
                      : "text-white/50 hover:text-white/70 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{section.title}</span>
                    <span className="text-[10px] text-white/20 shrink-0 ml-2">{section.category}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-9">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/50 uppercase tracking-wider">
                {activeSection.category}
              </span>
              <h2 className="text-xl font-bold">{activeSection.title}</h2>
            </div>

            {/* Content */}
            <p className="text-sm text-white/60 leading-relaxed mb-6">{activeSection.content}</p>

            {/* Code block */}
            {activeSection.code && (
              <div className="relative mb-6">
                <div className="flex items-center justify-between px-4 py-2 bg-white/5 border border-white/10 border-b-0 rounded-t-lg">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#7c6af7]" />
                    <span className="text-xs text-white/30">Example</span>
                  </div>
                  <button
                    onClick={() => copyCode(activeSection.code!)}
                    className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-xs text-white/40 hover:text-white/60 transition-all"
                  >
                    {copied === activeSection.code!.slice(0, 20) ? (
                      <><Check className="w-3 h-3 text-emerald-400" /> Copied</>
                    ) : (
                      <><Copy className="w-3 h-3" /> Copy</>
                    )}
                  </button>
                </div>
                <pre className="p-4 bg-[#0a0a15] border border-white/10 rounded-b-lg text-sm font-mono text-emerald-300 leading-relaxed overflow-x-auto">
                  {activeSection.code}
                </pre>
              </div>
            )}

            {/* API Reference */}
            {activeSection.apiReference && activeSection.apiReference.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-white/80 mb-3">API Reference</h3>
                <div className="space-y-2">
                  {activeSection.apiReference.map(api => (
                    <div
                      key={api.name}
                      className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-white/20 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <code className="text-xs font-mono text-[#b8b0fc] bg-[#7c6af7]/10 px-2 py-0.5 rounded shrink-0">
                          {api.name}
                        </code>
                        <div className="flex-1 min-w-0">
                          <code className="text-xs font-mono text-emerald-300 block mb-1">{api.signature}</code>
                          <p className="text-xs text-white/40">{api.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              {(() => {
                const idx = DOC_SECTIONS.findIndex(d => d.id === activeSection.id);
                const prev = DOC_SECTIONS[idx - 1];
                const next = DOC_SECTIONS[idx + 1];
                return (
                  <>
                    {prev ? (
                      <Link
                        href={`/docs/${prev.id}`}
                        className="flex items-center gap-2 text-sm text-white/40 hover:text-white/60 transition-all"
                      >
                        <ChevronRight className="w-4 h-4 rotate-180" /> {prev.title}
                      </Link>
                    ) : <div />}
                    {next ? (
                      <Link
                        href={`/docs/${next.id}`}
                        className="flex items-center gap-2 text-sm text-[#b8b0fc] hover:text-[#d0c8ff] transition-all"
                      >
                        {next.title} <ChevronRight className="w-4 h-4" />
                      </Link>
                    ) : <div />}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
