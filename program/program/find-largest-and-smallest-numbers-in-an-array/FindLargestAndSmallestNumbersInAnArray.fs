let input = [ 1; 2; 3; 4; 5]

let sort = List.sort input

printf "%s" "Smallest Number in the array : "
printfn "%d" sort.[0]
printf "%s" "Largest Number in the array : "
printfn "%d" sort.[sort.Length-1]
