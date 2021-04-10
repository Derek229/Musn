class Api::FollowsController < ApplicationController

    def show
        user_id = params[:user_id]
        render json: Follow.follow_index(user_id)
    end

    def destroy
        follow = Follow.find(params[:follow_id])
        follow.delete
    end

    def create
        follow = Follow.new(follow_params)
        if follow.save
            render json: follow
        else
            render json: { errors: main.errors }, status: :unprocessable_entity
        end
    end
end
 
private 

def follow_params
    params.require(:follow).permit(:user_id, :band_id)
end