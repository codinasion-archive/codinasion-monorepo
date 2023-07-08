#!/usr/bin/env perl
use strict;
use warnings;

print("Enter a decimal number: ");
my $decimal = <STDIN>;
chomp($decimal);

my $octal = sprintf("%o", $decimal);
print("Octal Equivalent: $octal\n");
