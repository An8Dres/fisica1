let anchors = document.querySelectorAll('#header nav a');
let sections = document.querySelectorAll('.section-ing');
let selected = document.querySelector('#corte1');
anchors = Array.from(anchors);

const observer = new IntersectionObserver(
    (entries) => { entries.forEach(entry => { if (entry.isIntersecting) {
        selected.classList.remove('selected')
        let section = anchors.find(a => a.hash == "#" + entry.target.id)
        section.className = 'selected'
        selected = section
    } }) },
    { root: null, threshold: 0.2 }
);

sections.forEach(s => observer.observe(s));