# 从用户获取逗号分隔的数字输入
input_numbers <- readline("请输入数字列表（用逗号分隔）: ")

# 将输入的字符串分割成数字，并计算平方和
numbers <- as.numeric(strsplit(input_numbers, ",")[[1]])
square_sum <- sum(numbers^2, na.rm = TRUE)

# 打印结果
print(paste("数字的平方和为:", square_sum))