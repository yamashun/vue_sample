require "application_system_test_case"

class CarsTest < ApplicationSystemTestCase
  set_up do
    @makers = [
      Maker.create(name: 'トヨタ'),
      Maker.create(name: '日産')
    ]
    @car_models = [
      CarModel.create(maker_id: @maker[0].id, name: 'カローラ')
      CarModel.create(maker_id: @maker[0].id, name: 'クラウン')
      CarModel.create(maker_id: @maker[1].id, name: '８６')
      CarModel.create(maker_id: @maker[1].id, name: 'マーチ')
    ]
  end

  test "visiting the index" do
    visit cars_url
  
    assert_selector "h1", text: "Car"
  end

  test "visiting the new" do
    visit new_car_path
  
    assert_selector "h1", text: "Car"
  end
end
