json.set! :cars do
  json.array! @cars do |car|
    json.extract! car, :maker, :model
  end
end