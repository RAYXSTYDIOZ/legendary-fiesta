function redirect() {
    var targetUrl = "https://linksrayan.is-a.dev";
    setTimeout(function() {
        window.location.href = targetUrl;
    }, 10000); // 10000 milliseconds = 10 seconds
}
window.onload = redirect;
