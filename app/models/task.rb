class Task < ActiveRecord::Base

  validates :desc, presence: true

end
