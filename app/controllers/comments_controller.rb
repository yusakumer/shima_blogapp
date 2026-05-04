class CommentsController < ApplicationController

  before_action :set_article, only: [:new, :create, :index]

  def index
    comments = @article.comments
    render json: comments
  end

  def new
    @comment = @article.comments.build
  end

  def create
    @comment = @article.comments.build(comment_params)
    @comment.save!

    render json: @comment
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end

  def set_article
    @article = Article.find(params[:article_id])
  end
end