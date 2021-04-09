class Api::SongsController < ApplicationController

    before_action :get_song, only: [:show]

    def index
        songs = Song.all
        render json: songs
    end
    
    def show
        render json: @song
    end

    def create
        user = Song.new(user_params)
        if song.save
            render json: song
        else
            render json: { errors: main.errors }, status: :unprocessable_entity
        end
    end

    def update
        user = Song.find(params[:id])
        if song.update(song_params)
            render json: @song
        else
           render json: { errors: main.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @song.delete
    end


    private


    def get_
        @song = Song.find(params[:id])
    end

    def user_params
        params.require(:song).permit(:name, :artist, :genre, :album)
    end

end
