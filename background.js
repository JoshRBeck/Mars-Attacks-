class Background {
	draw() {
		game.backgroundImages.forEach(function (img) {
			img.x -= img.speed
			img(img.src, img.x, 0, width, height)
			img(img.src, img.x + width, 0, width, height)
			if (img.x <= - width) img.x = 0
		})
	}
}