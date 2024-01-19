fn selection_sort(arr: &mut Vec<i32>) {
    let n = arr.len();

    for i in 0..n {
        let mut min_index = i;

        for j in i + 1..n {
            if arr[j] < arr[min_index] {
                min_index = j;
            }
        }

        if min_index != i {
            arr.swap(i, min_index);
        }
    }
}

fn main() {
    let mut numbers = vec![64, 25, 12, 22, 11];
    
    println!("Original array: {:?}", numbers);

    selection_sort(&mut numbers);

    println!("Sorted array: {:?}", numbers);
}
