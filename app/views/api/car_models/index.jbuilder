json.set! :car_models do
  json.array! @car_models do |car_model|
    json.extract! car_model, :id, :name
  end
end