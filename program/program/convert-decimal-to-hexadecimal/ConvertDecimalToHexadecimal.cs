public static class ConvertDecimalToHexadecimal
{
    private static Dictionary<int, string> hexadecimalMap = new()
    {
        {0, "0"},
        {1, "1"},
        {2, "2"},
        {3, "3"},
        {4, "4"},
        {5, "5"},
        {6, "6"},
        {7, "7"},
        {8, "8"},
        {9, "9"},
        {10, "A"},
        {11, "B"},
        {12, "C"},
        {13, "D"},
        {14, "E"},
        {15, "F"}
    };

    public static void convertDecimalToHexadecimal(int number = 10)
    {
        List<int> resultToConvert = new();

        while (number > 0)
        {
            resultToConvert.Add(number % 16);
            number /= 16;
        }

        Console.WriteLine(createResult(resultToConvert));
    }

    private static string createResult(List<int> toConvert)
    {
        string result = string.Empty;

        for (int i = toConvert.Count - 1; i >= 0; i--)
        {
            result += hexadecimalMap[toConvert[i]];
        }

        return result;
    }
}