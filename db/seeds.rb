# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
maker1 = Maker.create(name: 'トヨタ')
maker2 = Maker.create(name: '日産')
maker3 = Maker.create(name: '本田')

CarModel.create(maker_id: maker1.id, name: 'カローラ')
CarModel.create(maker_id: maker1.id, name: 'クラウン')
CarModel.create(maker_id: maker1.id, name: '８６')
CarModel.create(maker_id: maker2.id, name: 'マーチ')
CarModel.create(maker_id: maker2.id, name: 'フーガ')
CarModel.create(maker_id: maker2.id, name: 'セレナ')
CarModel.create(maker_id: maker3.id, name: 'NSX')
CarModel.create(maker_id: maker3.id, name: 'ライフ')
CarModel.create(maker_id: maker3.id, name: 'フィット')

