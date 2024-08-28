function setActiveLink() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);
    
    $('nav a').each(function() {
        const href = $(this).attr('href');
        if (href === page) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
}

