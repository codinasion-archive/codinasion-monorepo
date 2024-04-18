def octal_to_decimal(octal)
    decimal = 0
    power = 0
    while octal != 0
      digit = octal % 10
      decimal += digit * (8 ** power)
      octal /= 10
      power += 1
    end
    return decimal
  end