$(window).on("load",function(){
    // PageScroll2id  для плавной прокрутки по ссылке
    $("a[rel='m_PageScroll2id']").mPageScroll2id();

    // Video background vide.js
    $('#header').vide('./video/nature', {
        bgColor: '#474d4a'
    });
});