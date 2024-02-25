import Foundation

func jumpSearch(arr: [Int], x: Int) -> Int? {
    let n = arr.count
    var blockSize = Int(sqrt(Double(n)))
    var prev = 0
    
    // Finding the block where the element may exist
    while arr[min(blockSize, n)-1] < x {
        prev = blockSize
        blockSize += Int(sqrt(Double(n)))
        if prev >= n {
            return nil // Element not found
        }
    }
    
    // Linear search within the block
    while arr[prev] < x {
        prev += 1
        if prev == min(blockSize, n) {
            return nil // Element not found
        }
    }
    
    // If element is found
    if arr[prev] == x {
        return prev
    }
    
    return nil // Element not found
}

// Take input for the array
print("Enter the array elements separated by spaces:")
if let input = readLine() {
    let list = input.split(separator: " ").compactMap { Int($0) }
    
    // Take input for the value to be searched
    print("Enter the value to be searched:")
    if let value = Int(readLine() ?? "") {
        if let index = jumpSearch(arr: list, x: value) {
            print("Output:", index)
        } else {
            print("Element not found")
        }
    } else {
        print("Invalid input for value")
    }
} else {
    print("Invalid input for array")
}
