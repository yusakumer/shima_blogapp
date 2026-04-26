class CommentsController < ApplicationController

  before_action :set_article, only: [:new, :create]

  def new
    @comment = @article.comments.build
  end

  def create
    @comment = @article.comments.build(comment_params)
    if @comment.save
      redirect_to articles_path(@article), notice: "comment save"
    else
      flash.now[:error] = "コメント追加できませんでした"
      render :new
    end

  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end

  def set_article
    @article = Article.find(params[:article_id])
  end
end