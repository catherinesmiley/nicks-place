class Meal < ApplicationRecord
    belongs_to :menu
    belongs_to :menutype, optional: true
end
