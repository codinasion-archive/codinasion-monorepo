
input_numbers <- readline("put numbers: ")


numbers <- as.numeric(strsplit(input_numbers, ",")[[1]])
square_sum <- sum(numbers^2, na.rm = TRUE)


print(paste("result:", square_sum))