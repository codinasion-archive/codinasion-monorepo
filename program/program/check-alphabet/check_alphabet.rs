use std::{io::{self, Write}};

fn main() { 
   print!("Input: ");
    io::stdout().flush().expect("flush failed!");

    let mut str = String::new();
    match io::stdin().read_line(&mut str) {
        Ok(_) => (),
        Err(err) => println!("Could not parse input: {}", err)
    }

    println!("Output: {}", if check_alphabet(&str) { "Alphabet" } else { "Not Alphabet" });

}



fn check_alphabet(str:&String) -> bool{
 for i in str.trim().chars() {
        if !i.is_alphabetic() {
            return false;
        }
    }
    return true;
}

