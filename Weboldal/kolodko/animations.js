document.addEventListener("DOMContentLoaded", () => {
    const idsToAnimate = [
        "intro1","intro2",
        "imgwrapper1","textwrapper1",
        "imgwrapper2","textwrapper2",
        "imgwrapper3","textwrapper3"
    ];

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
