class Car < ApplicationRecord
  belongs_to :maker
  belongs_to :car_model
end
