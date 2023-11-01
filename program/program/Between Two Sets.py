#Solution for "Between Two Sets" 
#Link: https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true
#Problem Solving-> Algorithms-> Data Structures
#Solution by Sanober494

def getTotalX(a, b):
    n = 0
    max_a = max(a)
    min_b = min(b)

    for k in range(max_a, min_b + 1, max_a):
        if all(k % factor == 0 for factor in a) and all(factor % k == 0 for factor in b):
            n += 1

    print(n)

length = input()
arr1 = input()
Arr1 = list(map(int, arr1.split()))
arr2 = input()
Arr2 = list(map(int, arr2.split()))
getTotalX(Arr1, Arr2)
