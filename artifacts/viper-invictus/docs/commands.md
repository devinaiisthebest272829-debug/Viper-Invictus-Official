# Viper Invictus - Command Reference

A complete guide to every command, function, and method in the Viper Invictus programming language.

---

## Hello World

```viper
// The classic first program
print("Hello, World!")

// Using a variable
let name = "Viper Invictus"
print("Hello, " + name)

// Template string (recommended)
print(`Welcome to ${name}!`)
```

---

## Output & Console

| Command | Description | Example |
|---------|-------------|---------|
| `print(...)` | Print values to the console | `print("Hello", 42, true)` |
| `log(...)` | Same as print (alias) | `log("info message")` |
| `warn(...)` | Print a warning message | `warn("deprecated")` |
| `error(...)` | Print an error message | `error("file not found")` |
| `clear()` | Clear all console output | `clear()` |

---

## Type Conversion

| Command | Description | Example |
|---------|-------------|---------|
| `str(x)` | Convert to string | `str(42) // "42"` |
| `num(x)` | Convert to number | `num("3.14") // 3.14` |
| `bool(x)` | Convert to boolean | `bool(1) // true` |
| `type(x)` | Get type name | `type([]) // "array"` |
| `len(x)` | Get length of array/string/object | `len([1,2,3]) // 3` |
| `keys(obj)` | Get object keys as array | `keys({a:1, b:2})` |
| `values(obj)` | Get object values as array | `values({a:1, b:2})` |
| `range(n)` | Generate [0, 1, ..., n-1] | `range(5) // [0,1,2,3,4]` |
| `range(start, end)` | Generate [start, ..., end-1] | `range(2, 5) // [2,3,4]` |

### JSON
| Command | Description | Example |
|---------|-------------|---------|
| `JSON.stringify(obj)` | Convert object to JSON string | `JSON.stringify({a:1})` |
| `JSON.parse(string)` | Parse JSON string | `JSON.parse('{"a":1}')` |

---

## Math Library (`math.*`)

### Constants
| Name | Value |
|------|-------|
| `math.PI` | 3.141592653589793 |
| `math.E` | 2.718281828459045 |
| `PI` | 3.141592653589793 (global alias) |

### Functions
| Command | Description | Example |
|---------|-------------|---------|
| `math.sqrt(x)` | Square root | `math.sqrt(16) // 4` |
| `math.abs(x)` | Absolute value | `math.abs(-5) // 5` |
| `math.floor(x)` | Round down | `math.floor(3.7) // 3` |
| `math.ceil(x)` | Round up | `math.ceil(3.2) // 4` |
| `math.round(x)` | Round to nearest | `math.round(3.5) // 4` |
| `math.sin(x)` | Sine (radians) | `math.sin(math.PI/2) // 1` |
| `math.cos(x)` | Cosine (radians) | `math.cos(0) // 1` |
| `math.tan(x)` | Tangent (radians) | `math.tan(math.PI/4)` |
| `math.asin(x)` | Arcsine | `math.asin(1)` |
| `math.acos(x)` | Arccosine | `math.acos(1) // 0` |
| `math.atan(x)` | Arctangent | `math.atan(1)` |
| `math.atan2(y, x)` | Arctangent of y/x | `math.atan2(1, 1)` |
| `math.pow(x, y)` | x to power y | `math.pow(2, 10) // 1024` |
| `math.log(x)` | Natural log | `math.log(math.E) // 1` |
| `math.log2(x)` | Log base 2 | `math.log2(8) // 3` |
| `math.log10(x)` | Log base 10 | `math.log10(100) // 2` |
| `math.max(a, b, ...)` | Maximum value | `math.max(1, 5, 3) // 5` |
| `math.min(a, b, ...)` | Minimum value | `math.min(1, 5, 3) // 1` |
| `math.hypot(a, b, ...)` | Hypotenuse | `math.hypot(3, 4) // 5` |
| `math.sign(x)` | Sign of number | `math.sign(-5) // -1` |
| `math.trunc(x)` | Truncate decimal | `math.trunc(3.7) // 3` |
| `math.clamp(val, lo, hi)` | Clamp between lo and hi | `math.clamp(15, 0, 10) // 10` |
| `math.lerp(a, b, t)` | Linear interpolation | `math.lerp(0, 100, 0.5) // 50` |
| `math.random()` | Random float 0-1 | `math.random()` |
| `math.randInt(lo, hi)` | Random integer | `math.randInt(1, 6) // 1-6` |

---

## Timer & Animation (`timer.*`)

| Command | Description | Example |
|---------|-------------|---------|
| `timer.now()` | Current time in milliseconds | `timer.now()` |
| `timer.date()` | Get date object | `let d = timer.date()` |
| `timer.loop(fn)` | Run function every frame (60fps) | `timer.loop(fn() { ... })` |

### Date Object Properties
```
d.hours      // 0-23
d.minutes    // 0-59
d.seconds    // 0-59
d.ms         // 0-999
d.day        // 1-31
d.month      // 1-12
d.year       // 2026
d.weekday    // 0-6 (Sunday=0)
```

---

## Canvas & Graphics (`canvas.*`)

| Command | Description | Example |
|---------|-------------|---------|
| `canvas.setSize(w, h)` | Set canvas dimensions | `canvas.setSize(400, 300)` |
| `canvas.clear(color)` | Clear to color | `canvas.clear("#0a0a1a")` |
| `canvas.rect(x, y, w, h, color)` | Draw rectangle | `canvas.rect(10, 10, 100, 50, "#f00")` |
| `canvas.roundRect(x, y, w, h, r, color)` | Draw rounded rect | `canvas.roundRect(10, 10, 100, 50, 8, "#f00")` |
| `canvas.circle(x, y, r, color)` | Draw circle | `canvas.circle(200, 150, 50, "#f00")` |
| `canvas.ellipse(x, y, rx, ry, color)` | Draw ellipse | `canvas.ellipse(200, 150, 50, 30, "#f00")` |
| `canvas.line(x1, y1, x2, y2, width, color)` | Draw line | `canvas.line(0, 0, 100, 100, 2, "#fff")` |
| `canvas.text(x, y, text, size, color, align)` | Draw text | `canvas.text(10, 20, "Hello", 16, "#fff")` |
| `canvas.arc(x, y, r, start, end, color)` | Draw arc | `canvas.arc(100, 100, 50, 0, math.PI, "#f00")` |
| `canvas.ringArc(x, y, inner, outer, start, end, color)` | Ring arc | `canvas.ringArc(100, 100, 30, 40, 0, math.PI, "#f00")` |
| `canvas.polygon(points, color)` | Draw polygon | `canvas.polygon([{x:0,y:0}, {x:10,y:10}], "#f00")` |
| `canvas.image(src, x, y, w, h)` | Draw image | `canvas.image("url", 0, 0, 100, 100)` |
| `canvas.save()` | Save transform state | `canvas.save()` |
| `canvas.restore()` | Restore transform state | `canvas.restore()` |
| `canvas.translate(x, y)` | Translate origin | `canvas.translate(100, 100)` |
| `canvas.rotate(angle)` | Rotate canvas | `canvas.rotate(math.PI/4)` |
| `canvas.scale(x, y)` | Scale canvas | `canvas.scale(2, 2)` |
| `canvas.alpha(val)` | Set global alpha | `canvas.alpha(0.5)` |
| `canvas.onKey(fn)` | Handle keyboard | `canvas.onKey(fn(key) { ... })` |
| `canvas.onClick(fn)` | Handle clicks | `canvas.onClick(fn(x, y) { ... })` |
| `canvas.getWidth()` | Get canvas width | `canvas.getWidth()` |
| `canvas.getHeight()` | Get canvas height | `canvas.getHeight()` |

---

## Array Methods

| Method | Description | Example |
|--------|-------------|---------|
| `arr.length` | Number of items | `arr.length` |
| `arr.push(x)` | Add to end | `[1,2].push(3) // [1,2,3]` |
| `arr.pop()` | Remove last | `[1,2,3].pop() // 3` |
| `arr.shift()` | Remove first | `[1,2,3].shift() // 1` |
| `arr.unshift(x)` | Add to front | `[2,3].unshift(1) // [1,2,3]` |
| `arr.reverse()` | Reverse order | `[3,2,1].reverse()` |
| `arr.join(sep)` | Join with separator | `["a","b"].join("-") // "a-b"` |
| `arr.indexOf(x)` | Find index | `[1,2,3].indexOf(2) // 1` |
| `arr.includes(x)` | Check if contains | `[1,2,3].includes(2) // true` |
| `arr.slice(start, end)` | Get subarray | `[1,2,3,4].slice(1,3)` |
| `arr.splice(start, count, ...items)` | Remove/insert | `arr.splice(1, 1, "x")` |
| `arr.concat(...arrays)` | Join arrays | `[1,2].concat([3,4])` |
| `arr.map(fn)` | Transform each item | `[1,2,3].map(fn(x) { x*2 })` |
| `arr.filter(fn)` | Keep matching items | `[1,2,3].filter(fn(x) { x>1 })` |
| `arr.reduce(fn, initial)` | Reduce to one value | `[1,2,3].reduce(fn(a,b) { a+b }, 0)` |
| `arr.forEach(fn)` | Call fn for each item | `arr.forEach(fn(x) { print(x) })` |
| `arr.find(fn)` | Find first match | `[1,2,3].find(fn(x) { x>1 })` |
| `arr.findIndex(fn)` | Index of first match | `[1,2,3].findIndex(fn(x) { x>1 })` |
| `arr.some(fn)` | Any match? | `[1,2,3].some(fn(x) { x>1 })` |
| `arr.every(fn)` | All match? | `[1,2,3].every(fn(x) { x>0 })` |
| `arr.flat()` | Flatten one level | `[[1,2],[3,4]].flat()` |
| `arr.sort()` | Sort in place | `arr.sort()` |
| `arr.sort(fn)` | Sort with comparator | `arr.sort(fn(a,b) { a-b })` |

---

## String Methods

| Method | Description | Example |
|--------|-------------|---------|
| `str.length` | String length | `"hello".length // 5` |
| `str.upper()` | Uppercase | `"hello".upper() // "HELLO"` |
| `str.lower()` | Lowercase | `"HELLO".lower() // "hello"` |
| `str.trim()` | Remove whitespace | `"  a  ".trim() // "a"` |
| `str.trimStart()` | Remove leading whitespace | `"  a".trimStart() // "a"` |
| `str.trimEnd()` | Remove trailing whitespace | `"a  ".trimEnd() // "a"` |
| `str.split(sep)` | Split into array | `"a,b,c".split(",")` |
| `str.join(arr)` | Join array with separator | `"-".join(["a","b"]) // "a-b"` |
| `str.replace(old, new)` | Replace all | `"hi hi".replace("hi", "bye")` |
| `str.contains(sub)` | Contains substring? | `"hello".contains("ell")` |
| `str.startsWith(sub)` | Starts with? | `"hello".startsWith("he")` |
| `str.endsWith(sub)` | Ends with? | `"hello".endsWith("lo")` |
| `str.indexOf(sub)` | Find index | `"hello".indexOf("l")` |
| `str.slice(start, end)` | Get substring | `"hello".slice(1, 4)` |
| `str.substring(start, end)` | Get substring | `"hello".substring(1, 4)` |
| `str.repeat(n)` | Repeat string | `"ha".repeat(3) // "hahaha"` |
| `str.padStart(len, fill)` | Pad start | `"1".padStart(3, "0")` |
| `str.padEnd(len, fill)` | Pad end | `"1".padEnd(3, "0")` |
| `str.char(i)` | Get character at index | `"hello".char(1) // "e"` |
| `str.charCode(i)` | Get char code | `"A".charCode(0) // 65` |
| `str.toNumber()` | Parse to number | `"3.14".toNumber() // 3.14` |
| `str.toBool()` | Parse to boolean | `"true".toBool() // true` |

---

## Language Keywords

| Keyword | Purpose |
|---------|---------|
| `let` | Declare a mutable variable |
| `var` | Declare a function-scoped variable |
| `const` | Declare an immutable variable |
| `fn` | Define a function |
| `class` | Define a class |
| `if` / `else` / `else if` | Conditional branching |
| `while` | While loop |
| `for` | For loop with initializer, condition, update |
| `for...of` | Iterate array elements |
| `for...in` | Iterate object keys |
| `return` | Return from function |
| `break` | Break from loop |
| `continue` | Skip to next iteration |
| `self` | Reference to current object |
| `new` | Create new instance |
| `true` / `false` | Boolean values |
| `null` | Null value |
| `in` / `of` | For loop iteration keywords |

---

## Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition / String concat | `1 + 2`, `"a" + "b"` |
| `-` | Subtraction / Negation | `5 - 2`, `-x` |
| `*` | Multiplication | `2 * 3` |
| `/` | Division | `6 / 2` |
| `%` | Modulo | `7 % 3` |
| `**` | Power | `2 ** 3` |
| `==` | Equal | `a == b` |
| `!=` | Not equal | `a != b` |
| `<` | Less than | `a < b` |
| `>` | Greater than | `a > b` |
| `<=` | Less than or equal | `a <= b` |
| `>=` | Greater than or equal | `a >= b` |
| `&&` | Logical AND | `a && b` |
| `\|\|` | Logical OR | `a \|\| b` |
| `!` | Logical NOT | `!a` |
| `=` | Assignment | `a = 5` |
| `+=` | Add-assign | `a += 5` |
| `-=` | Sub-assign | `a -= 5` |
| `*=` | Mul-assign | `a *= 5` |
| `/=` | Div-assign | `a /= 5` |
| `%=` | Mod-assign | `a %= 5` |
| `++` | Increment | `a++`, `++a` |
| `--` | Decrement | `a--`, `--a` |
| `? :` | Ternary | `a > b ? "yes" : "no"` |
| `?.` | Optional chaining | `obj?.prop` |
| `...` | Spread | `[...arr1, ...arr2]` |

---

## Built-in Types

| Type | Example | Description |
|------|---------|-------------|
| `number` | `42`, `3.14`, `-7` | Floating-point numbers |
| `string` | `"hello"`, `'world'`, `` `template` `` | UTF-8 strings |
| `bool` | `true`, `false` | Boolean values |
| `null` | `null` | Null/undefined |
| `array` | `[1, 2, 3]`, `[]` | Dynamic arrays |
| `object` | `{a: 1, b: 2}` | Hash maps / dictionaries |
| `function` | `fn(x) { return x }` | First-class functions |
| `class` | `class Dog { ... }` | Class definitions |

---

## Complete Hello World Example

```viper
// Hello World in Viper Invictus
// This is a complete program showing all the basics

print("Hello, World!")
print("Welcome to Viper Invictus!")

// Variables
let name = "Developer"
let version = 1.0
let isCool = true

// Template strings
print(`Hello, ${name}! You're using version ${version}`)

// Functions
fn greet(who) {
    return `Hello, ${who}!`
}

print(greet("World"))

// Arrays
let fruits = ["apple", "banana", "cherry"]
for (let fruit of fruits) {
    print(greet(fruit))
}

// Objects
let person = {
    name: "Ada",
    age: 36,
    greet: fn() { return `Hi, I'm ${self.name}` }
}

print(person.greet())

// Simple class
class Animal {
    init(name) {
        self.name = name
    }
    speak() {
        return `${self.name} makes a sound`
    }
}

let dog = new Animal("Rex")
print(dog.speak())

// Canvas drawing
fn draw() {
    canvas.setSize(300, 200)
    canvas.clear("#1a1a2e")
    canvas.circle(150, 100, 40, "#e94560")
    canvas.text(150, 170, "Hello World!", 16, "#f1f5f9", "center")
}

draw()
```

Run this with Ctrl+Enter (or click the Run button) in the Viper Invictus IDE!
