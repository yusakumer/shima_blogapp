class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  def current_user
    if super.present?
      ActiveDecorator::Decorator.instance.decorate(super)
    end
    super
  end
end
