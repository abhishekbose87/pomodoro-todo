class Task < ActiveRecord::Base

 # attr_accessor :score

  validates :desc, presence: true

  def increment_score
    self.score = self.score + 1
  end
end
