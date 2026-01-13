document.addEventListener("DOMContentLoaded", () => {
    const idsToAnimate = ["intro1", "intro2", "imgwrapper1", "imgwrapper2", "textwrapper1", "textwrapper2", "box1", "box2", "wrapper1", "wrapper2", "wrapper3"];

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