use std::io;

fn main() {
    // Read input time from the user
    let mut input_time = String::new();
    println!("Enter time in 24-hour format (HH:MM:SS):");
    io::stdin().read_line(&mut input_time).expect("Failed to read line");

    // Parse the input time
    let parts: Vec<&str> = input_time.trim().split(':').collect();
    if parts.len() != 3 {
        println!("Invalid input format. Please use HH:MM:SS");
        return;
    }

    let hour: u32 = parts[0].parse().expect("Invalid hour");
    let minute: u32 = parts[1].parse().expect("Invalid minute");
    let second: u32 = parts[2].parse().expect("Invalid second");

    // Convert to 12-hour format
    let mut formatted_hour = hour % 12;
    if formatted_hour == 0 {
        formatted_hour = 12;
    }

    // Determine AM or PM
    let period = if hour < 12 { "AM" } else { "PM" };

    // Display the result
    println!(
        "Converted time: {:02}:{:02}:{:02}{}",
        formatted_hour, minute, second, period
    );
}