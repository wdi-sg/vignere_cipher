message = "attackatdawn"
keyword = "lemon"

def vignere_cipher message, keyword

	keyword_1 = "";

	while keyword_1.length < message.length
		keyword.each_char { |char| keyword_1 += char }
	end

	keyword_1 = keyword_1[0, message.length]

	dic = Hash.new

	message_1 = message.split(",")
	keyword_2 = keyword_1.split(",")

	alpha = "abcdefghijklmnopqrstuvwxyz"
	ciphertext = ""

	array = message.split("").zip(keyword_1.split("")).each do |m, k|
		result = alpha.index(m) + alpha.index(k)
		if result > 25
			result -= 26
		end
		ciphertext += alpha[result]
	end

	return ciphertext

end

puts vignere_cipher(message, keyword)











code = "lxfopvefrnhr"
keyword = "lemon"

def decode_cipher code, keyword 

	keyword_1 = ""

	while keyword_1.length < code.length
		keyword.each_char do |char|
			keyword_1 += char
		end
	end

	keyword_1 = keyword_1[0, code.length]

	decoded = ""
	alpha = "abcdefghijklmnopqrstuvwxyz"

	code.split("").zip(keyword_1.split("")).each do |c, k|
		result = alpha.index(c) - alpha.index(k)
		if result < 0
			result += 26
		end
		decoded += alpha[result]
	end

	return decoded

end

puts decode_cipher(code, keyword)