class Api::CarsController < ApiController
  def index
    @cars = Car.all
    render 'index', formats: 'json', handlers: 'jbuilder'
  end

  def create
    @car = Car.create(car_params)
  end

  private
    def car_params
      params.require(:car).permit(:maker_id, :maker_name, :car_model_id, :car_model_name, :price)
    end
end