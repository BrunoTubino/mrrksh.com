document.addEventListener("DOMContentLoaded", function() {
    const bandNameElement = document.getElementById("bandName");
    const fullName = "MARRAKESH";
    let index = 0;

    function animateBandName() {
        if (index < fullName.length) {
            bandNameElement.textContent += fullName.charAt(index);
            index++;
            setTimeout(animateBandName, 100);
        }
    }

    animateBandName();

    bandNameElement.addEventListener("mouseenter", function() {
        bandNameElement.textContent = "";
        index = 0;
        animateBandName();
    });
});