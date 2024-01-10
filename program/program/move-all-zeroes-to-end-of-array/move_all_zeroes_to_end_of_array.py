def move_zeros_to_end(arr):
    """
    Moves all zeros in the array to the end while maintaining the order of non-zero elements.

    Args:
    arr (list): A list of integers.

    Returns:
    list: Modified list with all zeros moved to the end.
    """
    if not isinstance(arr, list):
        raise ValueError("Input must be a list")

    non_zero_index = 0

    for i in range(len(arr)):
        if arr[i] != 0:
            arr[i], arr[non_zero_index] = arr[non_zero_index], arr[i]
            non_zero_index += 1

    return arr
