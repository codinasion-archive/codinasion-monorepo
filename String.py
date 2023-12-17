def reverse_words(s):
    # Split the string into a list of words
    words = s.split()
    
    # Reverse the order of words
    reversed_words = words[::-1]
    
    # Join the reversed words into a string
    result = ' '.join(reversed_words)
    
    return result

# Test the function
input_string = "Hello World"
output_string = reverse_words(input_string)
print(output_string)
