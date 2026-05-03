// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import Rails from "@rails/ujs";
import "trix"
import "@rails/actiontext"
import axios from "axios";
import {initArticle} from "./article";

axios.defaults.headers.common['X-CSRF-Token'] = Rails.csrfToken()


const handleHeartDisplay = (hasLiked) => {
    if (hasLiked) {
        $(".active_heart").removeClass("hidden")
    } else {
        $(".inactive_heart").removeClass("hidden")
    }
}


document.addEventListener('turbo:load', () => {
    initArticle()
})