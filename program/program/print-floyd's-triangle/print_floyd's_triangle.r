print_floyds_triangle <- function(n) {
  num <- 1
  for (i in 1:n) {
    for (j in 1:i) {
      cat(num, " ")
      num <- num + 1
    }
    cat("\n")
  }
}


print_floyds_triangle(as.integer(readline("请输入要打印的行数: ")))
