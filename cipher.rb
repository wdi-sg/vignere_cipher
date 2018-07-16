def encrypt(message, key)
  message.downcase!
  key.downcase!
  full_key = (key * ( (message.length - key.length)/key.length + 2 )).split('')

  result = message.split('').each_with_index.map do |char, index|
    old_ascii = char.ord - 97
    key_ascii = full_key[index].ord - 97
    new_ascii = (old_ascii + key_ascii + 97)
    new_ascii -= 26 if new_ascii > 122
    new_char = new_ascii.chr
  end
  
  return result.join('')
end

encrypt('attackatdawn', 'lemon')

def decrpypt(message,key)
  message.downcase!
  key.downcase!
  full_key = (key * ( (message.length - key.length)/key.length + 2 )).split('')

  result = message.split('').each_with_index.map do |char, index|
    old_ascii = char.ord - 97
    key_ascii = full_key[index].ord - 97
    new_ascii = (old_ascii - key_ascii + 97)
    new_ascii += 26 if new_ascii < 97
    new_char = new_ascii.chr
  end

  return result.join('')
end

decrpypt( encrypt('attackatdawn', 'lemon'), 'lemon' )
