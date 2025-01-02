
function draw()
{
	let i = 0;
	let object;
	let item;
	let pipe;
	while (i < 9)
	{
		// create Element
		object = document.createElement("div");
		item = document.createElement("div");
		pipe = document.createElement("div");
		// class add
		item.classList.add("item");
		pipe.classList.add("pipe");
		object.classList.add("object");
		//apend
		pipe.innerHTML += "<img src='PngItem_1075267.png'></img>";
		item.innerHTML += `<img src='' id="${i}"></img>`;
		object.appendChild(item);
		object.appendChild(pipe);
		game_screen.appendChild(object);
		i++;
	}
}
function chose()
{
	let x = Math.floor(Math.random() * arr.length);
	return x;
}
function randomly()
{
	let i = Math.floor(Math.random() * 9);
	return (i);
}

function destroy(x, y)
{
	x.src = y;
}

function point_icrement()
{
	counter++;
	score_html.innerHTML=counter;
}
function losing()
{
	counter = 0;
	location.reload();
}