class Api::MakersController < ApplicationController
  def index
    @makers = Maker.all
    render 'index', formats: 'json', handlers: 'jbuilder'
  end
end