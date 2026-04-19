(function () {
    // Keep logo source consistent across role dashboards if multiple logo ids exist.
    var logoIds = ['logo', 'navbarLogo', 'sidebarLogo', 'brandLogo'];
    var logoSrc = '/image/logo.png';

    logoIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (el && el.tagName === 'IMG' && !el.getAttribute('src')) {
            el.setAttribute('src', logoSrc);
        }
    });
})();

