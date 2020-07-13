class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.references :language, index: true, foreign_key: true
      t.string :topic
      t.text :content
    end
  end
end
