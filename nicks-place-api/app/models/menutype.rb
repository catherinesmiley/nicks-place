class Menutype < ApplicationRecord
    belongs_to :menu, optional: true
end
