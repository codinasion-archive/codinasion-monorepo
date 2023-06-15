using System;

public class PrintStringOfAsciiValues
{
    public static void Main()
    {
        // Prompt the user to enter ASCII values separated by spaces
        Console.WriteLine("Enter the ASCII values separated by spaces:");

        // Read the user input
        string input = Console.ReadLine();

        // Split the input into an array of ASCII values
        string[] asciiValues = input.Split(' ');

        // Iterate over each ASCII value in the array
        foreach (string asciiValue in asciiValues)
        {
            // Try to parse the ASCII value as an integer
            int value;
            if (int.TryParse(asciiValue, out value))
            {
                // Convert the integer value to its corresponding character
                char character = (char)value;

                // Print the character
                Console.Write(character);
            }
        }

        // Print a new line after printing the characters
        Console.WriteLine();
    }
}
