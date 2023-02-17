(() => {
    const hideIPFromAnswer = () => {
        const arrAns = document.getElementsByClassName("ContentItem-time")
        Array.from(arrAns).forEach((ele) => {
            if (ele.childNodes.length > 1) {
                ele.childNodes[1].remove()
            }
        })
    }

    const hideIPFromComments = () => {
        const arrComments = document.getElementsByClassName("css-x1xlu5")
        Array.from(arrComments).forEach((ele) => {
            const children = ele.children
            if (children.length == 1) {
                return
            }
            for (let i = 1; i < children.length; i++) {
                children[i].style.display = "none"
            }
            console.log("hidden")
        });
    }

    hideIPFromAnswer()
    document.addEventListener("DOMNodeInserted", () => {
        hideIPFromComments()
    })
})()