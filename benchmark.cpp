#include <chrono>
#include <cmath>
#include <cstdio>
#include <vector>

typedef std::chrono::high_resolution_clock Clock;

double bench(const char* name, long long iters, auto fn) {
    for (int w = 0; w < 3; w++) fn();
    auto t0 = Clock::now();
    fn();
    auto t1 = Clock::now();
    double ms = std::chrono::duration<double, std::milli>(t1 - t0).count();
    double ns = ms * 1000000.0 / iters;
    printf("  %-30s  %8.1f ns/op   %8.3f ms\n", name, ns, ms);
    return ns;
}

int main() {
    printf("C++ Benchmark (-O0, naive)\n\n");

    const long long N1 = 10000000;
    bench("int counter loop       10M", N1, [N1]() {
        long long s = 0;
        for (long long i = 0; i < N1; i++) { s += i; }
        return s;
    });

    const long long N2 = 5000000;
    bench("float mul/add           5M", N2, [N2]() {
        double s = 1.0;
        for (long long i = 1; i < N2; i++) {
            s = s * 1.0000001 + 0.0000001;
        }
        return s;
    });

    const long long N3 = 2000000;
    bench("math.sqrt               2M", N3, [N3]() {
        double s = 0.0;
        for (long long i = 1; i < N3; i++) { s += std::sqrt(i); }
        return s;
    });

    const long long N4 = 1000000;
    bench("sin + cos               1M", N4, [N4]() {
        double s = 0.0;
        for (long long i = 0; i < N4; i++) { s += std::sin(i) + std::cos(i); }
        return s;
    });

    const long long N8 = 100000;
    bench("array push+sum        100K", N8, [N8]() {
        std::vector<long long> arr;
        for (long long i = 0; i < N8; i++) { arr.push_back(i * i); }
        long long s = 0;
        for (long long j = 0; j < N8; j++) { s += arr[j]; }
        return s;
    });

    const long long N9 = 500000;
    auto add2 = [](long long a, long long b) { return a + b; };
    bench("fn call overhead      500K", N9, [N9, &add2]() {
        long long s = 0;
        for (long long i = 0; i < N9; i++) { s = add2(s, i); }
        return s;
    });

    const long long N10 = 1000;
    bench("nested loops           1M", N10 * N10, [N10]() {
        long long s = 0;
        for (long long i = 0; i < N10; i++) {
            for (long long j = 0; j < N10; j++) { s += i * j; }
        }
        return s;
    });

    printf("\n");
    return 0;
}
