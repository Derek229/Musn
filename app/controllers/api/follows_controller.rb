class Api::FollowsController < ApplicationController

    def show
        user_id = params[:user_id]
        render json: Follow.follow_index(user_id)
    end
end
 