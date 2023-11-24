# Function to calculate the sum of digits of a number
function sum_of_digits(n::Int)
    sum = 0
    while n > 0
        sum += n % 10  # Add the last digit to sum
        n ÷= 10        # Remove the last digit from n
    end
    return sum
end

# Main code to get user input and call the function
println("Enter a number:")
n = parse(Int, readline())  # Reads input from the user and converts it to an integer
println("The sum of digits of ", n, " is ", sum_of_digits(n))
