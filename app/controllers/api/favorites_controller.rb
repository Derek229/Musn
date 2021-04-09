class Api::FavoritesController < ApplicationController

    def index
        render json: Favorite.favorite_table
    end
end
