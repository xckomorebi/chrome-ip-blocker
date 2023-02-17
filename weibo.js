(() => {
    document.addEventListener("DOMNodeInserted", () => {
        const bio = document.getElementsByClassName("ProfileHeader_item3_1bUM2")

        if (bio.length) {
            Array.from(bio).forEach((ele) => {
                ele.style.display = "none"
            })
        }

        const comments = document.getElementsByClassName("info")
        Array.from(comments).forEach((ele) => {
            ele.children[0].firstElementChild.style.display = "none"
        })

        const heads = document.getElementsByClassName("head-info_ip_3ywCW")
        Array.from(heads).forEach((ele) => {
            ele.style.display = "none"
        })
    })
})()