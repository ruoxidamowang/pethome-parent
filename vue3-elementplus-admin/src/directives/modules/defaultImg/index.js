{
	// 先显示默认图片，等加载成功再显示真实图片
	/* <img v-real-img="'images/logo.png'" src="images/errorLogo.png"/> */
}

const defaultImg = {
	name: 'defaultImg',
	async beforeMount(el, binding) {
		const imgURL = binding.value
		if (imgURL) {
			const exist = await imageIsExist(imgURL)
			exist && el.setAttribute('src', imgURL)
		}
		// 判断一个图片是否存在, 注意是异步行为
		function imageIsExist(url) {
			return new Promise(resolve => {
				let img = new Image()
				img.src = url
				img.onload = () => {
					if (img.complete) {
						resolve(true)
						img = null
					}
				}
				img.onerror = () => {
					resolve(false)
					img = null
				}
			})
		}
	}
}
export default defaultImg
