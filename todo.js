var lis = document.querySelectorAll("li")

for (var li = 0; li < lis.length; li++) {


    lis[li].addEventListener("mouseover", function() {
        this.classList.add("selected");
    });

    lis[li].addEventListener("mouseout", function() {
        this.classList.remove("selected");
    });
    lis[li].addEventListener("click", function() {
        this.classList.toggle("done");
    });
}
