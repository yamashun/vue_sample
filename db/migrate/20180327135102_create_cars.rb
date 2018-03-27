class CreateCars < ActiveRecord::Migration[5.1]
  def change
    create_table :cars do |t|
      t.references :maker, foreign_key: true
      t.string :maker
      t.references :car_model, foreign_key: true
      t.string :car_model
      t.integer :price

      t.timestamps
    end
  end
end
