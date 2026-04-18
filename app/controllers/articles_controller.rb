class ArticlesController < ApplicationController
  def index
    @articles = Article.all
    render "articles/index"
  end

  def show
    @article = Article.find(params[:id])
    render "articles/show"
  end
end
