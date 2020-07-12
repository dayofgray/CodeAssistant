class WelcomeController < ApplicationController

    def test
        render json: { test: "success" }
    end

end