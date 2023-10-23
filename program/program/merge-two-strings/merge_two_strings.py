# This python script calculates the  concatenation of two given strings str1 and str2

string1 = str(input("Enter a string  : "))
string2 = str(input("Enter another string : "))

def mergeString(str1: str, str2: str) -> str:
    result = ""
    for ch1 in str1:
        result += ch1
    for ch2 in str2:
        result += ch2
    return result


print("Merged String : ", mergeString(string1, string2))

# Shorthand for the above function
# def mergeString(str1, str2):
#     return str1 + str2