// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import Rails from "@rails/ujs";
import "trix"
import "@rails/actiontext"
import axios from "axios";

const handleHeartDisplay = (hasLiked) => {
    if (hasLiked) {
        $(".active_heart").removeClass("hidden")
    } else {
        $(".inactive_heart").removeClass("hidden")
    }
}


document.addEventListener('turbo:load', () => {
    const dataset = $("#article-show").data();
    const articleId = dataset.articleId

    axios.get(`/articles/${articleId}/like`)
        .then((res) => {
            const hasLiked = res.data.hasLiked
            handleHeartDisplay(hasLiked)
        })

})