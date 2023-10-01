#!/usr/bin/perl

use strict;
use warnings;

print "Enter ASCII values separated by spaces: ";
my $input = <STDIN>;
chomp $input;

my @ascii_values = split ' ', $input;

my $result = '';

foreach my $ascii_value (@ascii_values) {
    my $character = chr($ascii_value);
    $result .= $character;
}

print "Output: $result\n";
