const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    const title = box.firstElementChild;
    const text = box.lastElementChild;
    const arrow = box.firstElementChild.lastElementChild;

    if (!title.classList.contains("bold")) {
      title.classList.add("bold");
      text.style.display = "block";
      arrow.style.transform = "rotate(180deg)";
    } else {
      title.classList.remove("bold");
      text.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
    }
  });
});
