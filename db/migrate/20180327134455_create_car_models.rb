class CreateCarModels < ActiveRecord::Migration[5.1]
  def change
    create_table :car_models do |t|
      t.references :maker, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
