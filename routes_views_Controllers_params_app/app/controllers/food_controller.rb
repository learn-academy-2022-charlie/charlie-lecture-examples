class FoodController < ApplicationController
  def tacos
    ingredient1 = params[:ingredient1]
    ingredient2 = params[:ingredient2]
    @ingredients = [ingredient1, ingredient2]
  end

  def sushi

  end

  def home
    
  end

  def cheese_cake
    @cake = params[:flavor]
  end

end
