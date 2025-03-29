let prefix
if (location.hostname === "localhost") {
    prefix = "/"
} else {
    prefix = "/Test-Site/"
}

document.querySelector("#homepage").addEventListener("click",() => {
    location.href=`${prefix}`;
});
document.querySelector("#contactpage").addEventListener("click",() => {
    location.href=`${prefix}contact`;
})
document.querySelector("#projectpage").addEventListener("click",() => {
    location.href=`${prefix}projects`;
})
