class Api::CarModelsController < ApplicationController
  def show
    @car_models = CarModel.where(maker_id: params[:id])
    render 'show', formats: 'json', handlers: 'jbuilder'
  end
end