def is_palindrome(s):
    """
    Check if the given string is a palindrome.

    Args:
    - s (str): Input string

    Returns:
    - bool: True if the string is a palindrome, False otherwise.
    """
    # Remove non-alphanumeric characters and convert to lowercase
    cleaned_str = ''.join(char.lower() for char in s if char.isalnum())

    # Check if the cleaned string is equal to its reverse
    return cleaned_str == cleaned_str[::-1]

# Example usage:
input_str = "A man, a plan, a canal: Panama"
result = is_palindrome(input_str)
print(result)  # Output: True
