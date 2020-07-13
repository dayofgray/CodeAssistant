class Language < ApplicationRecord
    has_many :notes
    validates :title, :proficiency, presence: true

end