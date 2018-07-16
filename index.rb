check = ARGV[0]

$hash = {
    "a" => 1,
    "b" => 2,
    'c' => 3,
    'd' => 4,
    'e' => 5,
    'f' => 6,
    'g' => 7,
    'h' => 8,
    'i' => 9,
    'j' => 10,
    'k' => 11,
    'l' => 12,
    'm' => 13,
    'n' => 14,
    'o' => 15,
    'p' => 16,
    'q' => 17,
    'r' => 18,
    's' => 19,
    't' => 20,
    'u' => 21,
    'v' => 22,
    'w' => 23,
    'x' => 24,
    'y' => 25,
    'z' => 26}

$hash_invert = $hash.invert






def encode 
    puts 'running encode'
    message = ARGV[1].split('')
    keyword = ARGV[2].split('')
    keywordNum = 0
    
    newMessage = []
    
    #RUN THROUGH THE KEYWORD ARRAY
    message.map! do
        |x| 
        numM = $hash[x]
        numK = $hash[keyword[keywordNum]]
        sum = numM + numK

        if sum > 26 
            sum = sum%26
        end

        newMessage << $hash_invert[sum]
        
        if keywordNum == keyword.length - 1 
            keywordNum = 0
        else keywordNum += 1
        end

        $hash_invert[sum]
    end

    # puts newMessage.join('')
    # puts 'message'
    puts message.join('')
end










def decode 
    puts 'running decode'
    encrypted = ARGV[1].split('')
    keyword = ARGV[2].split('')
    keywordNum = 0
    
    message = []
    
    #RUN THROUGH THE KEYWORD ARRAY
    encrypted.map! do
        |x| 
        numE = $hash[x]
        numK = $hash[keyword[keywordNum]]
        numM = numE - numK

        if numM < 0 
            numM = numE - numK + 26
        end

        message << $hash_invert[numM]

        if keywordNum == keyword.length - 1 
            keywordNum = 0
        else keywordNum += 1
        end

        $hash_invert[numM]
    end

    # puts message.join('')
    # puts 'encrypted'
    puts encrypted.join('')
end





##CHECK IF ENCODE OR DECODE
if check == 'encode' 
    puts 'run encode'
    encode
elsif check == 'decode'
    puts 'run encode'
    decode
end