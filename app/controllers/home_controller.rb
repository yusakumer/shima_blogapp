class HomeController < ApplicationController
  def index
    @title = "Home"
    render "home/index"
  end

  def about
    render "home/about"
  end
end
