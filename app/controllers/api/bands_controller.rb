class Api::BandsController < ApplicationController

    before_action :get_band, only: [:show]

    def index
        bands = Band.all
        render json: bands
    end
    
    def show
        render json: @band
    end

    def create
        user = Band.new(band_params)
        if band.save
            render json: band
        else
            render json: { errors: main.errors }, status: :unprocessable_entity
        end
    end

    def update
        band = Band.find(params[:id])
        if band.update(band_params)
            render json: @band
        else
           render json: { errors: main.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @band.delete
    end



    private


    def get_band
        @band = Band.find(params[:id])
    end

    def band_params
        params.require(:band).permit(:name, :genre, :avatar, :members)
    end

end
