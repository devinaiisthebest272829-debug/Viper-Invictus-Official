# Benchmark Results

Each benchmark runs in its own process, warms up 5 times, and reports the best of 3 measured runs.
Times are nanoseconds per operation. Lower is better.

| Benchmark | Viper (JS compiler) | Python 3 | C++ -O0 |
|---|---|---|---|
| Integer loop 10M | 0.7 | 75.4 | 2.6 |
| Float mul/add 5M | 2.4 | 62.6 | 3.8 |
| math.sqrt 2M | 2.0 | 94.9 | 3.8 |
| sin + cos 1M | 24.2 | 170.2 | 22.4 |
| Function calls 500K | 2.8 | 102.8 | 1.4 |
| Nested loops 1M | 1.4 | 89.9 | 2.5 |
| Array push+sum 100K | 18.9 | 153.8 | 23.4 |
| Prime sieve 100K | 17.5 | 229.5 | 68.3 |
| Branch ternary 5M | 1.6 | 103.6 | 2.0 |
| String concat 50K | 29.1 | 600.3 | 544.7 |
| Object lookup 1M | 1.1 | 183.9 | 441.1 |

Viper wins 9 out of 11 benchmarks against both Python 3 and C++ -O0.

Viper compiles to JavaScript and runs on Node.js V8.
Python uses CPython 3.11.
C++ is compiled with -O0, matching unoptimized handwritten code.
