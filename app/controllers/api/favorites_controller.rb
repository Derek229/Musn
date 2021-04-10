class Api::FavoritesController < ApplicationController

    def show
        user_id = params[:user_id]
        render json: Favorite.favorite_table(user_id)
    end
end
