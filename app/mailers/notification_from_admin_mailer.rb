class NotificationFromAdminMailer < ApplicationMailer
  def notify(user,msg)
    @msg = msg
    mail to: user.email, subject: "New message"
  end
end