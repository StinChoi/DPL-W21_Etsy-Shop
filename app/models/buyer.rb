class Buyer < ApplicationRecord
  belongs_to :seller
  serialize :desired_category, Array
end
