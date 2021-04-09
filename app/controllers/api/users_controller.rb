class Api::UsersController < ApplicationController

    before_action :get_user, only: [:show, :destroy]

    def index
        users = User.all
        render json: users
    end
    
    def show
        render json: @user
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: { errors: main.errors }, status: :unprocessable_entity
        end
    end

    def update
        user = User.find(params[:id])
        if user.update(user_params)
            render json: @user
        else
           render json: { errors: main.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @user.delete
    end



    private


    def get_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:name, :email, :avatar)
    end
end
