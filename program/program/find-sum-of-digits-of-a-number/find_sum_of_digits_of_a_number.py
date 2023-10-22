# This python script calculates the sum of the digits of a random number n


def find_sum_of_digits_of_a_number():
    sum_of_digits = 0
    digits = input("Number: ")
    for digit in digits:
        sum_of_digits += int(digit)
    return sum_of_digits

print(f'Result: {find_sum_of_digits_of_a_number()}')


























# def sumOfDigits(n: int) -> int:
#     return sum([int(x) for x in str(n)])
