class NotesController < ApplicationController

    def create
        note = Note.new(language_id: params[:language_id], topic: params[:topic], content: params[:content])
        if note.save
            render json: note
        else
            render json: {errors: note.errors.full_messages}, status: 500
        end

    end

end