alphabets = ('a'..'z').to_a

message = 'attackatdawn'

keyword = 'lemon'

times = (message.length / keyword.length.to_f).ceil

newkeyword = (keyword * times).split('')

keyval = newkeyword.map{|letter| alphabets.index(letter) + 1}


newmessage = message.split('')

messagenum = newmessage.map{|letter| letter.ord}

ciphertext = []

numarr = messagenum.each_with_index do |letter, index|
	val = letter + keyval[index]
	val -= 26 if val > 122
	ciphertext << (val)
end

puts ciphertext

result = ciphertext.map {|e| e.chr}.join

puts result







