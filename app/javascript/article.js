import axios from "axios";

export const initArticle = () => {
    const dataset = $("#article-show").data();
    const articleId = dataset.articleId

    if (!articleId) return

    axios.get(`/articles/${articleId}/comments`)
        .then((res) => {
            const comments = res.data
            comments.forEach((comment) =>{
                $(".comments-container").append(
                    `<div class="article_comment"><p>${comment.content}</p></div>`
                )
            })
        })

    axios.get(`/articles/${articleId}/like`)
        .then((res) => {
            const hasLiked = res.data.hasLiked
            if (hasLiked) {
                $(".active_heart").removeClass("hidden")
            } else {
                $(".inactive_heart").removeClass("hidden")
            }
        })

    $(document).on("click", ".inactive_heart", () => {
        axios.post(`/articles/${articleId}/like`)
            .then(() => {
                $(".inactive_heart").addClass("hidden")
                $(".active_heart").removeClass("hidden")
            })
    })

    $(document).on("click", ".active_heart", () => {
        axios.delete(`/articles/${articleId}/like`)
            .then(() => {
                $(".active_heart").addClass("hidden")
                $(".inactive_heart").removeClass("hidden")
            })
    })
}