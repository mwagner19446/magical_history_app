class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :name
      t.float :longitude
      t.float :latitude
      t.text :description
      t.text :address
      t.references :neighborhood, index: true

      t.timestamps
    end
  end
end
