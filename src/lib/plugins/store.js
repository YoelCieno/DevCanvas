export const fontawesomeLINK = `<link id="fontawesomeDSFE4o431!!" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
crossorigin="anonymous" referrerpolicy="no-referrer" />
`;

export const materialiconsLINK = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />`;
export const bootstrapLINK = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">`;
export const animejsCDN = `https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js`;
export const gsapCDN = `https://unpkg.com/gsap`;
export const framermotionCDN = `https://cdn.jsdelivr.net/npm/@motionone/types@10.16.3/dist/index.es.min.js`;
export const scrollrevealCDN = `https://unpkg.com/scrollreveal`;
export const threejsCDN = `https://unpkg.com/three`;

const cdns = {
	animejs: animejsCDN,
	gsap: gsapCDN,
	motionone: framermotionCDN,
	scrollreveal: scrollrevealCDN,
	threejs: threejsCDN
};
export function setup_js_plugin(name, plugins, iframeDoc) {
	const pluginHTML = iframeDoc.getElementById(`${name}DSFE4o431!!`);
	if (plugins[name]) {
		const plugin = iframeDoc.createElement('script');
		plugin.src = cdns[name];
		plugin.id = `${name}DSFE4o431!!`;
		if (!pluginHTML) {
			console.log('configuring plugin:', name);
			iframeDoc.body.appendChild(plugin);
		}
	} else {
		if (pluginHTML) {
			pluginHTML.remove();
		}
	}

	// console.log(name, plugins, iframeDoc);
}
