# Ruby Introduction 6/1/2022


MINASWAN - Matz is nice and so we are nice.

Ruby Info
- Dynamic language - dynamically typed, doesn't matter what data type is held by a variable
- Interpreted - read line by line
- Open-source - available to the public for free
- Scripting - language for performing logic
- OOP - everything is an instance of a class

Ruby Console
- irb - interactive Ruby
- exit - brings us back to the file structure

Ruby Data Types
- Integers
- Floats
- String - single quotes
- Boolean - relational operators, equality ==, logical AND &&, logical OR ||, negation !=
- Nil

Variables
my_name = 'sarah'
"Hey there, #{my_name}" - string interpolation


Console work
```
➜  charlie-lecture-examples git:(ruby-intro) ✗ ruby -v
ruby 3.0.0p0 (2020-12-25 revision 95aff21468) [arm64-darwin21]
➜  charlie-lecture-examples git:(ruby-intro) ✗ irb
3.0.0 :001 > exit
➜  charlie-lecture-examples git:(ruby-intro) ✗ irb
3.0.0 :001 > 3 + 4
 => 7
3.0.0 :002 > 4 - 3
 => 1
3.0.0 :003 > 3 * 3
 => 9
3.0.0 :004 > 6 / 2
 => 3
3.0.0 :005 > 4 ** 2
 => 16
3.0.0 :006 > 4 % 3
 => 1
3.0.0 :007 > 7 / 2
 => 3
3.0.0 :008 > 7.0 / 2
 => 3.5
3.0.0 :009 > 'hello'
 => "hello"
3.0.0 :010 > "hey y'all"
 => "hey y'all"
3.0.0 :011 > 'hi'
 => "hi"
3.0.0 :012 > 7 > 9
 => false
3.0.0 :013 > 5 < 7
 => true
3.0.0 :014 > 5.0 >= 5
 => true
3.0.0 :015 > 4 <= 4
 => true
3.0.0 :016 > 7 == 7
 => true
3.0.0 :017 > 7 == '7'
 => false
3.0.0 :018 > 'hi' == 'hi' && 6 > 4
 => true
3.0.0 :019 > 'hi' == 'hi' && 6 < 4
 => false
3.0.0 :020 > 'hi' == 'hi' || 6 < 4
 => true
3.0.0 :021 > 7 != 4
 => true
3.0.0 :022 > nil
 => nil
3.0.0 :023 > my_name = 'sarah'
 => "sarah"
3.0.0 :024 > my_name
 => "sarah"
3.0.0 :025 > "Hey there, #{my_name}"
 => "Hey there, sarah"
3.0.0 :026 > my_name.length
 => 5
3.0.0 :027 > my_name.upcase
 => "SARAH"
3.0.0 :028 > my_name.capitalize
 => "Sarah"
3.0.0 :029 > my_name.reverse
 => "haras"
3.0.0 :030 > my_name * 3
 => "sarahsarahsarah"
3.0.0 :031 > my_name.delete'h'
 => "sara"
3.0.0 :032 > my_name.delete('h')
 => "sara"
3.0.0 :033 > my_name.include?('s')
 => true
3.0.0 :034 > my_name
 => "sarah"
3.0.0 :035 > my_name.reverse!
 => "haras"
3.0.0 :036 > my_name
 => "haras"
3.0.0 :037 > my_name.reverse!
 => "sarah"
3.0.0 :038 > my_name
 => "sarah"
3.0.0 :039 > my_name.capialize!
(irb):39:in `<main>': undefined method `capialize!' for "sarah":String (NoMethodError)
Did you mean?  capitalize!                           
               capitalize                            
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'                                               
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
3.0.0 :040 > my_name.capitalize!
 => "Sarah"
3.0.0 :041 > my_name
 => "Sarah"
3.0.0 :042 > my_name.capitalize!
 => nil
3.0.0 :043 > my_name
 => "Sarah"
3.0.0 :044 > my_name = 'sarah'
 => "sarah"
3.0.0 :045 > my_name.class
 => String
3.0.0 :046 > 4.0.class
 => Float
3.0.0 :047 > false.class
 => FalseClass
3.0.0 :048 > true.class
 => TrueClass
3.0.0 :049 > nil.class
 => NilClass
3.0.0 :050 > 4.to_s
 => "4"
3.0.0 :051 > '9'.to_i
 => 9
3.0.0 :052 > 'sarah'.to_i
 => 0
3.0.0 :053 > hello
(irb):53:in `<main>': undefined local variable or method `hello' for main:Object (NameError)
Did you mean?  help                                  
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'                                               
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
3.0.0 :054 >
```

Array
```
3.0.0 :055 > my_nums = [2, 3, 4, 5, 6]
 => [2, 3, 4, 5, 6]
3.0.0 :056 > my_nums
 => [2, 3, 4, 5, 6]
3.0.0 :057 > my_nums.length
 => 5
3.0.0 :058 > my_nums[0]
 => 2
3.0.0 :059 > my_nums[3]
 => 5
3.0.0 :060 > my_nums[-1]
 => 6
3.0.0 :061 > my_nums.first
 => 2
3.0.0 :062 > my_nums.last
 => 6
3.0.0 :063 > my_nums.reverse
 => [6, 5, 4, 3, 2]
3.0.0 :064 > my_nums
 => [2, 3, 4, 5, 6]
3.0.0 :065 > my_nums.reverse.first
 => 6
3.0.0 :066 > my_nums
 => [2, 3, 4, 5, 6]
3.0.0 :067 > my_num[3] = 99
(irb):67:in `<main>': undefined local variable or method `my_num' for main:Object (NameError)
Did you mean?  my_nums                                                          
               my_name                                                          
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'                                                                          
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'      
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'    
3.0.0 :068 > my_nums[3] = 99
 => 99
3.0.0 :069 > my_nums
 => [2, 3, 4, 99, 6]
3.0.0 :070 > my_nums << 33
 => [2, 3, 4, 99, 6, 33]
```
