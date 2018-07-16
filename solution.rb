word = "iloveruby"
key = [1,2,3]


# The method vigenere_cipher takes two arguments: word (string) and keys (array).
  # First, initialize an empty encrypted word string.
   # Iterate through each character in word keeping track of index.
    # Set new variable key to the (index % keys.length) element of keys.
    # On each iteration, save the ALPHABET array shifted by key amount to shifted_alphabet.
    # Find the index of the current character in the ALPHABET array.
    # Use the index to map that character from ALPHABET to the shifted_alphabet.
    # Append the mapped character to encrypted word string.
  # Return the encrypted word string.

def vigenere_cipher(string, keys)
	encrypted_word = ""
	string.each_char.with_index do |char, i| 
		key = keys[i % keys.length]
		shifted_alpha = ALPHABET[key..-1] + ALPHABET[0..key]
    	encrypted_word << shifted_alpha[ALPHABET.index(char)]
  	end
  	puts encrypted_word
end

ALPHABET = %w(a b c d e f g h i j k l m n o p q r s t u v w x y z)

vigenere_cipher("lemon", [1,2,3])

# Initialize two hash constants.
  # INDEX_TO_LETTER has indexes for keys and letters for values.
  # LETTER_TO_IDNEX has letters for keys and indexes for values.

# Method vigenere_cipher2 takes a word (string) and keys (array).
  # Initialize encrypted word to an empty string.
  # Iterate through each character in word keeping track of its index.
    # Set new variable key to the (index % keys.length) element of keys.
    # Find index of current character using LETTER_TO_INDEX.
      # If (index + key) < 26 append INDEX_TO_LETTER[index + key] to encrypted word.
      # Otherwise append INDEX_TO_LETTER[index + key - 26] to encrypted word.
  # Return encrypted word.

def vigenere_cipher2(string, keys)

encrypted_word = ""

string.each_char.with_index do |char, i|
  key = keys[i % keys.length]
  index = LETTER_TO_INDEX[char]

  if (index + key) < 26
    encrypted_word << INDEX_TO_LETTER[index + key]
  else
    encrypted_word << INDEX_TO_LETTER[index + key - 26] end end encrypted_word end INDEX_TO_LETTER = {0=>"a", 1=>"b", 2=>"c", 3=>"d", 4=>"e", 5=>"f", 6=>"g", 7=>"h", 8=>"i", 9=>"j", 10=>"k", 11=>"l", 12=>"m", 13=>"n", 14=>"o", 15=>"p", 16=>"q", 17=>"r", 18=>"s", 19=>"t", 20=>"u", 21=>"v", 22=>"w", 23=>"x", 24=>"y", 25=>"z"}

LETTER_TO_INDEX = {"a"=>0,"b"=> 1,"c"=> 2,"d"=> 3,"e"=> 4,"f"=> 5,"g"=> 6,"h"=> 7,
"i"=> 8,"j"=> 9, "k"=>10, "l"=>11, "m"=>12, "n"=>13, "o"=>14, "p"=>15, "q"=>16, "r"=>17, "s"=>18, "t"=>19, "u"=>20, "v"=>21, "w"=>22, "x"=>23, "y"=>24, "z"=>25}