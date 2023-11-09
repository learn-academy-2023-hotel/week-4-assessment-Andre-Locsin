# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:


#method to check if a number will have a remainder and if does it is odd and if not even
#use "number as a placeholder"
  def even_odd(number) 
#%2 == 0 is dividing what ever is on the number placeholer and outputing the remainder
    if number %2 == 0 
# if else statement for both outputs if odd or even repectively
        return "#{number} is even"
    else
        return "#{number} is odd"
    end
end

p even_odd reposts1
p even_odd reposts2
p even_odd reposts3
#test the output

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:


# method that will detect string regardless of casing and remove vowels
def no_vowels (letter)
# .downcase will allow read the vowels of our given strings regardless of casing 
    hoopla = letter.downcase
# created another variable to hold letter.downcase because ruby did not like it 
    hoopla.delete ("a""e""i""o""u")
# .delete will delete the following letters from our given string 
end

p no_vowels beatles_album1
p no_vowels beatles_album2
p no_vowels beatles_album3


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
palindrome_test_case4 = 'asdfGhjkl'
# Pseudo code:

# method that flips strings to check if its a palindrome

def flip (word)
# create a variable to hold the original word so that we can alter the string later on
    original = word
    nope = word.reverse
#.reverse to reverse our string
    word = word.downcase
#.downcase to downcase our entire given string so that we can compare it to original 
# create an if else statement to ouput the results 
    if word == word.reverse
        return "#{original} is a palindrome"
    else 
        return "#{original} is not a palindrome the output is #{nope} "
    end
end

p flip palindrome_test_case1
p flip palindrome_test_case2
p flip palindrome_test_case3
p flip palindrome_test_case4