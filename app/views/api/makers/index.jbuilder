json.set! :makers do
  json.array! @makers do |maker|
    json.extract! maker, :id, :name
  end
end