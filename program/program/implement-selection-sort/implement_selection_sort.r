def selection_sort(data):
  """Sorts a list of data using the selection sort algorithm.

  Args:
      data: A list of sortable elements.

  Returns:
      A new list containing the sorted data.
  """

  n = len(data)
  for i in range(n - 1):
    min_index = i  # Set current element as minimum
    for j in range(i + 1, n):
      if data[j] < data[min_index]:
        min_index = j  # Update minimum index if a smaller element is found

    # Swap the found minimum element with the current element
    if min_index != i:
      data[i], data[min_index] = data[min_index], data[i]

  return data

# Example usage
unsorted_data = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7]
sorted_data = selection_sort(unsorted_data.copy())  # Copy to avoid modifying original list

print("Unsorted data:", unsorted_data)
print("Sorted data:", sorted_data)
