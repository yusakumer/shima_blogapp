import axios from "axios";

const handleCommentForm = () => {
    $(document).on("click", ".show-comment-form", () => {
        $(".show-comment-form").addClass("hidden")
        $(".comment-text-area").removeClass("hidden")
    })
}

const appendNewComment = (comment) => {
    $(".comments-container").append(
        `<div class="article_comment"><p>${comment.content}</p></div>`
    )
}



export const initArticle = () => {
    const dataset = $("#article-show").data();
    const articleId = dataset.articleId

    if (!articleId) return

    axios.get(`/articles/${articleId}/comments`)
        .then((res) => {
            const comments = res.data
            comments.forEach((comment) => {
                appendNewComment(comment)
            })
        })

    axios.get(`/api/articles/${articleId}/like`)
        .then((res) => {
            const hasLiked = res.data.hasLiked
            if (hasLiked) {
                $(".active_heart").removeClass("hidden")
            } else {
                $(".inactive_heart").removeClass("hidden")
            }
        })

    handleCommentForm()

    $(document).on("click", ".add-comment-btn", () => {
        const content = $("#comment_content").val()
        if (content) {
            axios.post(`/api/articles/${articleId}/comments`, {
                comment: {content: content}
            })
                .then((res) => {
                    const comment = res.data
                    appendNewComment(comment)
                    $('#comment_content').val('')
                })
        } else {
            window.alert("未入力です")
        }

    })

    $(document).on("click", ".inactive_heart", () => {
        axios.post(`/api/articles/${articleId}/like`)
            .then(() => {
                $(".inactive_heart").addClass("hidden")
                $(".active_heart").removeClass("hidden")
            })
    })

    $(document).on("click", ".active_heart", () => {
        axios.delete(`/api/articles/${articleId}/like`)
            .then(() => {
                $(".active_heart").addClass("hidden")
                $(".inactive_heart").removeClass("hidden")
            })
    })
}