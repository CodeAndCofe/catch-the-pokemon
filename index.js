const game_screen = document.querySelector(".game");
const start_button = document.querySelector(".start");
const score_html = document.querySelector(".score");
const item_click = document.querySelectorAll(".item");
const max = document.querySelector(".mx span");
let arr = ["p","p","b","p","p","b","b","p"];
let counter = 0;
let is_lose = false;
let id_destroy = 0;
draw();
document.addEventListener("DOMContentLoaded", () => {
document.querySelector("body").style.userSelect="none";

document.querySelectorAll("img").forEach((e)=>
{
	e.addEventListener("dragstart", (e)=>
	{
		e.preventDefault();
	})
});

max.innerHTML = localStorage.getItem("data");
start_button.addEventListener("click", () => {
    let x;
	let monstr= false;
    let sr = "pngwing.com.png";
    let vr = "pngwing.com (1).png";
    let y = setInterval(() => {
        let pb = arr[chose()];
        let currentElement = document.getElementById(id_destroy);

        if (currentElement) {
            currentElement.src = "";
        }

        id_destroy = randomly(id_destroy);
        x = document.getElementById(id_destroy);

        if (x) {
            if (counter >= 1 && pb === "b") {
                x.src = sr;
				monstr = true
            } else {
                x.src = vr;
				monstr = false;
            }
            if (!x.dataset.listener) {
                x.addEventListener("click", () => {
                    x.dataset.listener = "true";
                    if (monstr === true) {
                        destroy(x, "a.png");
						if (max.innerHTML < counter)
							localStorage.setItem("data", counter.toString());
						setTimeout(losing, 500);
						monstr = false;
                    } else {
						point_icrement();
                        destroy(x, "pngegg.png");
                    }
                });
            }
		}
        if (is_lose === true) {
            clearInterval(y);
        }
    }, 1500);
});
});
