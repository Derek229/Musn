class Api::FavoritesController < ApplicationController

    def show
        user_id = params[:user_id]
        render json: Favorite.favorite_table(user_id)
    end

    def create
        favorite = Favorite.new(favorite_params)
        if favorite.save
            render json: favorite
        else
            render json: { errors: main.errors }, status: :unprocessable_entity
        end
    end


end

private 

def favorite_params
    params.require(:favorite).permit(:user_id, :song_id)
end
