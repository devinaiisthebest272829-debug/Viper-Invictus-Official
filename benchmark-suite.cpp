#include <chrono>
#include <cmath>
#include <cstdio>
#include <vector>

typedef std::chrono::high_resolution_clock Clock;

template<typename F>
void bench(const char* name, long long iters, F fn) {
    for (int w = 0; w < 3; w++) fn();
    auto t0 = Clock::now();
    long long result = fn();
    auto t1 = Clock::now();
    double ms = std::chrono::duration<double, std::milli>(t1 - t0).count();
    double ns = ms * 1000000.0 / iters;
    double mops = (iters / (ms / 1000.0)) / 1000000.0;
    printf("%s,%.2f,%.2f,%.3f,%lld\n", name, ns, mops, ms, result);
}

int main() {
    printf("benchmark,ns_per_op,mops,ms,result\n");

    bench("int_loop_10m", 10000000LL, []() -> long long {
        long long s = 0;
        for (long long i = 0; i < 10000000LL; i++) s += i;
        return s;
    });

    bench("float_muladd_5m", 5000000LL, []() -> long long {
        double s = 1.0;
        for (long long i = 1; i < 5000000LL; i++) {
            s = s * 1.0000001 + 0.0000001;
        }
        return (long long)s;
    });

    bench("sqrt_2m", 2000000LL, []() -> long long {
        double s = 0.0;
        for (long long i = 1; i < 2000000LL; i++) s += std::sqrt(i);
        return (long long)s;
    });

    bench("sincos_1m", 1000000LL, []() -> long long {
        double s = 0.0;
        for (long long i = 0; i < 1000000LL; i++) s += std::sin(i) + std::cos(i);
        return (long long)s;
    });

    bench("fn_call_500k", 500000LL, []() -> long long {
        auto add2 = [](long long a, long long b) -> long long { return a + b; };
        long long s = 0;
        for (long long i = 0; i < 500000LL; i++) s = add2(s, i);
        return s;
    });

    bench("nested_loops_1m", 1000000LL, []() -> long long {
        long long s = 0;
        long long n = 1000;
        for (long long i = 0; i < n; i++) {
            for (long long j = 0; j < n; j++) s += i * j;
        }
        return s;
    });

    bench("array_100k", 100000LL, []() -> long long {
        std::vector<long long> arr;
        for (long long i = 0; i < 100000LL; i++) arr.push_back(i * i);
        long long s = 0;
        for (long long j = 0; j < 100000LL; j++) s += arr[j];
        return s;
    });

    bench("sieve_100k", 100000LL, []() -> long long {
        long long n = 100000;
        std::vector<bool> arr(n + 1, true);
        arr[0] = false;
        arr[1] = false;
        long long i = 2;
        while (i * i <= n) {
            if (arr[i]) {
                long long j = i * i;
                while (j <= n) {
                    arr[j] = false;
                    j += i;
                }
            }
            i++;
        }
        long long cnt = 0;
        for (long long k = 0; k < n; k++) if (arr[k]) cnt++;
        return cnt;
    });

    bench("branch_5m", 5000000LL, []() -> long long {
        long long s = 0;
        for (long long i = 0; i < 5000000LL; i++) s += (i % 2 == 0) ? i : -i;
        return s;
    });

    return 0;
}
