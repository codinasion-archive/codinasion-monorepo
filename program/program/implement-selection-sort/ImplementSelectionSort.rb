def selection_sort(arr)
  n = arr.length

  for i in 0..n-1
    min_index = i

    for j in (i+1)..n-1
      min_index = j if arr[j] < arr[min_index]
    end

    arr[i], arr[min_index] = arr[min_index], arr[i] if min_index != i
  end
end


puts "Enter numbers separated by spaces:"
user_input = gets.chomp
numbers = user_input.split.map(&:to_i)

puts "Original array: #{numbers}"

selection_sort(numbers)

puts "Sorted array: #{numbers}"
