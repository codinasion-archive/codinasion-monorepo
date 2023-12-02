open System

let printInvertedPyramid n =
    for i = n downto 1 do
        for j = 1 to i do
            printf "%d " j
        printfn ""

// Input from user
printf "Enter a number: "
let input = Console.ReadLine()
match Int32.TryParse(input) with
| true, n when n > 0 -> printInvertedPyramid n
| _ -> printfn "Invalid input. Please enter a positive integer."
