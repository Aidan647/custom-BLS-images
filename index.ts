import path from "path"
import fs from "fs/promises"
;(async () => {
	const baseURL = "https://raw.githubusercontent.com/Aidan647/custom-BLS-images/main/images/"

	const images = await fs.readdir(path.join(__dirname, "images"))
	const list = images.map((image) => baseURL + image)
	await fs.writeFile(path.join(__dirname, "list.json"), JSON.stringify(list))
})()
