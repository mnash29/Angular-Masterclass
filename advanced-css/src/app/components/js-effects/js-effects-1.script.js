let text = document.querySelector(".rainbow-text");
let spans = text.innerHTML
  .split("")
  .map((letter, i) => {
    return `<span style="transition-delay:${i*40}ms;filter:hue-rotate(${i*45}deg);">${letter}</span>`;
  })
  .join("");
text.innerHTML = spans;
