var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'images/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'images/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'images/beast.jpg'
	}
};

let imageArray = [images.man, images.wizard, images.beast];

window.onload = () => {

	for (let image of imageArray) {
		document.getElementById('image-section').innerHTML += `
			<div class = 'image-column' onmouseover='showText(this)' onmouseout='removeText(this)'>
				<img src = ${image.path} class = 'image' style = 'width:100%' >
				<div class='image-text'>
					<h3>${image.heading}<h3>
					<h4>${image.description}<h4>
				<div>
			</div>
		`
	}
}
	{
	let showText = (element, x) => {
		let div = element.querySelector('.image-column')
		div.style.visibility = 'visible';
	}
	
	let removeText = (element) => {
		let div = element.querySelector('.image-column')
		div.style.visibility = 'hidden';
	}
}