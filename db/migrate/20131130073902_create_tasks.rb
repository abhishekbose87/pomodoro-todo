class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :desc
      t.integer :score, :default => 0
      t.timestamps
    end
  end
end
