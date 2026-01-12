document.addEventListener("DOMContentLoaded", () => {
    const idsToAnimate = ["intro1", "intro2", "imgwrapper1", "imgwrapper2", "imgwrapper3", "imgwrapper4", "imgwrapper5", "imgwrapper6", "imgwrapper7", "imgwrapper8", "textwrapper1", "textwrapper2", "textwrapper3", "textwrapper4", "textwrapper5", "textwrapper6", "textwrapper7", "textwrapper8"];

    idsToAnimate.forEach(id => {
        const element = document.getElementById(id);
        if (!element) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        observer.observe(element);
    });
});