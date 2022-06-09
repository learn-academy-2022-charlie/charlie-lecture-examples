class LearnStudent
  def initialize name_param, pets_param, pet_names_param, hobbies_param, hobbies_desc_param
    @name = name_param 	
    @pets = pets_param
    @pet_names = pet_names_param
    @hobbies = hobbies_param
    @hobbie_descriptions = hobbies_desc_param
  end
end

nic = LearnStudent.new('Nic',	true,	['nugget'],	'gym',	'i like lifting weights')

p nic