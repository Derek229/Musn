class Api::FollowsController < ApplicationController

    def index
        render json: Follow.follow_index
    end
end
