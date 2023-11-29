$(function() {
    var searchTags = [
        "HTML",
        "CSS",
        "PHP",
        "JavaScript",
        "Python",
        "Java",
        "iOS",
        "React"
    ];

    $(".search-bar").autocomplete({
        source: searchTags
    });
});