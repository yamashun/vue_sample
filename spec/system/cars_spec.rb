require 'rails_helper'

RSpec.describe 'Cars', type: :system do
  before do
    @makers = [
      Maker.create(name: 'トヨタ'),
      Maker.create(name: '日産')
    ]
    @car_models = [
      CarModel.create(maker_id: @makers[0].id, name: 'カローラ'),
      CarModel.create(maker_id: @makers[0].id, name: 'クラウン'),
      CarModel.create(maker_id: @makers[1].id, name: 'フーガ'),
      CarModel.create(maker_id: @makers[1].id, name: 'マーチ')
    ]
  end

  it '車両の登録ができること' do
    # 車両登録画面を開く
    visit new_car_path

    # トヨタを選択できること
    select 'トヨタ', from: 'car_model_list'
    expect(page).to have_select('car_model_list', selected: 'トヨタ')

    # クラウンを選択できること
    select 'クラウン', from: 'maker_list'
    expect(page).to have_select('maker_list', selected: 'クラウン')

    # 価格選択画面へ
    click_button '次へ'

    find('#car_price').set(99)
    
    click_button '確認'

    # 入力した内容が表示されていること
    expect(page).to have_content('トヨタ')
    expect(page).to have_content('クラウン')
    expect(page).to have_content('99')

    click_button '登録'

    # 登録が完了すること
    expect(page).to have_content('登録が完了しました。')
    car = Car.last
    expect([car.maker_name, car.car_model_name, car.price]).to \
      eq ['トヨタ', 'クラウン', 99]
  end
end