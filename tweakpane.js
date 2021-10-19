const params = {
	width: 200,
	height: 200,
	depth: 200,
	speed: 0.02,
	backgroundColor: '#000',
	canRotate: true,
};

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	const pane = new Tweakpane({
		title: 'パラメーター'
	});
	pane.addInput(params, 'width', { min: 0, max: 300 });
	pane.addInput(params, 'height', { min: 0, max: 300 });
	pane.addInput(params, 'depth', { min: 0, max: 300 });
	pane.addInput(params, 'speed', { min: 0, max: 0.05 });
	pane.addInput(params, 'backgroundColor');
	pane.addInput(params, 'canRotate');
	pane.addButton({
		title: 'Randomize'
	}).on('click', () => {
		params.width = Math.random() * 300;
		params.height = Math.random() * 300;
		params.depth = Math.random() * 300;
		pane.refresh();
	});
}

function draw() {
	background(color(params.backgroundColor));

	if (params.canRotate) {
		rotateX(frameCount * params.speed);
		rotateY(frameCount * params.speed);
	}

	noFill();
	stroke(255);
	box(params.width, params.height, params.depth);
}
