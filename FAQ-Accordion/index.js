function expandCollapse() {
    var accordionblock = document.querySelectorAll('.expand-collapse-block');
    if (event.target.closest('.expand-collapse-block').classList.contains('is-expanded')) {
        event.target.closest('.expand-collapse-block').classList.remove('is-expanded');
    } else {
        accordionblock.forEach((ele) => {
            ele.classList.remove('is-expanded');
        });
        event.target.closest('.expand-collapse-block').classList.add('is-expanded')
    }

}