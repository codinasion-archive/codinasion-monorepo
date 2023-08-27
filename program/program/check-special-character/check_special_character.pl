print "Please enter a character : ";
my $s = <STDIN>;
if ($s =~ /[@#\$\%\!\~\`\&\*\/]/) {
    print "It is a Special character";
}else{
    print "Not a special character";
}
