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
      params.require(:car).permit(:maker_id, :maker, :car_model_id, :car_model, :price)
    end
end