class LanguagesController < ApplicationController

    def create
        language = Language.new(title: params[:title], proficiency: params[:proficiency])
        if language.save
            render json: language
        else
            render json: {errors: language.errors.full_messages}, status: 500
        end
    end

    def update

    end

    def delete

    end

    def show
        language = Language.find_by(id:params[:id])
        if language
            render json: {title: language.title, proficiency: language.proficiency, notes: language.notes}
        else
            render json: {message: 'Language not found'}
        end
    end

    def index
        languages = Language.all
        render json: languages
    end

end