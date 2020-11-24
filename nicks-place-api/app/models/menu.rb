class Menu < ApplicationRecord
    has_many :meals
    has_many :menutypes
end
