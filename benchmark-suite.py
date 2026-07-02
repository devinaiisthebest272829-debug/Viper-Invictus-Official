import time, math

def bench(name, iters, fn):
    for _ in range(3):
        fn()
    t0 = time.perf_counter()
    result = fn()
    t1 = time.perf_counter()
    ms = (t1 - t0) * 1000.0
    ns = ms * 1000000.0 / iters
    mops = (iters / (ms / 1000.0)) / 1000000.0
    print(f"{name},{ns:.2f},{mops:.2f},{ms:.3f},{result}")

def f_int_loop(n):
    s = 0
    for i in range(n):
        s += i
    return s

def f_float_muladd(n):
    s = 1.0
    for i in range(1, n):
        s = s * 1.0000001 + 0.0000001
    return s

def f_sqrt(n):
    s = 0.0
    for i in range(1, n):
        s += math.sqrt(i)
    return s

def f_sincos(n):
    s = 0.0
    for i in range(n):
        s += math.sin(i) + math.cos(i)
    return s

def f_fn_call(n):
    def add2(a, b):
        return a + b
    s = 0
    for i in range(n):
        s = add2(s, i)
    return s

def f_nested(n):
    s = 0
    for i in range(n):
        for j in range(n):
            s += i * j
    return s

def f_array(n):
    arr = []
    for i in range(n):
        arr.append(i * i)
    s = 0
    for j in range(n):
        s += arr[j]
    return s

def f_sieve(n):
    arr = [True] * (n + 1)
    arr[0] = False
    arr[1] = False
    i = 2
    while i * i <= n:
        if arr[i]:
            j = i * i
            while j <= n:
                arr[j] = False
                j += i
        i += 1
    cnt = 0
    for k in range(n):
        if arr[k]:
            cnt += 1
    return cnt

def f_branch(n):
    s = 0
    for i in range(n):
        s += i if i % 2 == 0 else -i
    return s

print("benchmark,ns_per_op,mops,ms,result")

bench("int_loop_10m", 10_000_000, lambda: f_int_loop(10_000_000))
bench("float_muladd_5m", 5_000_000, lambda: f_float_muladd(5_000_000))
bench("sqrt_2m", 2_000_000, lambda: f_sqrt(2_000_000))
bench("sincos_1m", 1_000_000, lambda: f_sincos(1_000_000))
bench("fn_call_500k", 500_000, lambda: f_fn_call(500_000))
bench("nested_loops_1m", 1000 * 1000, lambda: f_nested(1000))
bench("array_100k", 100_000, lambda: f_array(100_000))
bench("sieve_100k", 100_000, lambda: f_sieve(100_000))
bench("branch_5m", 5_000_000, lambda: f_branch(5_000_000))
