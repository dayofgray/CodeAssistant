class Language < ApplicationRecord
    has_many :notes, :dependent => :delete_all
    validates :title, :proficiency, presence: true

end