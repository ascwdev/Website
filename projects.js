// let a = document.getElementsByClassName("project__item");
// let b = document.getElementsByClassName("project__details");
// let i;
//
// for (i = 0; i < a.length; i++) {
//
//     a[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//
//     });
// }

const accordionHeaders = document.querySelectorAll(".project__item");
const accordionContents = document.querySelectorAll(".project__details");

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector(".project__details");
        const accordionHeader = accordionItem.querySelector(".project__item");

        accordionContents.forEach((content) => {
            if (content !== accordionContent) {
                content.classList.remove("active");
            }
        });

        accordionHeaders.forEach((header) => {
            if (header !== accordionHeader) {
                header.classList.remove("active");
            }
        })

        accordionHeader.classList.toggle("active");
        accordionContent.classList.toggle("active");
    })
})

accordionContents.forEach((header) => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector(".project__details");
        const accordionHeader = accordionItem.querySelector(".project__item");

        accordionContents.forEach((content) => {
            if (content !== accordionContent) {
                content.classList.remove("active");
            }
        });

        accordionHeaders.forEach((header) => {
            if (header !== accordionHeader) {
                header.classList.remove("active");
            }
        })

        accordionHeader.classList.toggle("active");
        accordionContent.classList.toggle("active");
    })
})