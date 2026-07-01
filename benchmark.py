import time, math

def bench(name, iters, fn):
    for _ in range(3): fn()
    t0 = time.perf_counter()
    fn()
    t1 = time.perf_counter()
    ms = (t1 - t0) * 1000
    ns = ms * 1000000 / iters
    print(f"  {name:30s}  {ns:8.1f} ns/op   {ms:8.3f} ms")

print("Python 3 Benchmark")
print("")

N1 = 10_000_000
def f1():
    s = 0
    for i in range(N1):
        s += i
    return s
bench("int counter loop       10M", N1, f1)

N2 = 5_000_000
def f2():
    s = 1.0
    for i in range(1, N2):
        s = s * 1.0000001 + 0.0000001
    return s
bench("float mul/add           5M", N2, f2)

N3 = 2_000_000
def f3():
    s = 0.0
    for i in range(1, N3):
        s += math.sqrt(i)
    return s
bench("math.sqrt               2M", N3, f3)

N4 = 1_000_000
def f4():
    s = 0.0
    for i in range(N4):
        s += math.sin(i) + math.cos(i)
    return s
bench("sin + cos               1M", N4, f4)

N8 = 100_000
def f8():
    arr = []
    for i in range(N8):
        arr.append(i * i)
    s = 0
    for j in range(N8):
        s += arr[j]
    return s
bench("array push+sum        100K", N8, f8)

N9 = 500_000
def add2(a, b):
    return a + b
def f9():
    s = 0
    for i in range(N9):
        s = add2(s, i)
    return s
bench("fn call overhead      500K", N9, f9)

N10 = 1000
def f10():
    s = 0
    for i in range(N10):
        for j in range(N10):
            s += i * j
    return s
bench("nested loops           1M", N10 * N10, f10)

print("")
