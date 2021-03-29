const dots = document.querySelectorAll(".js-slider-dot")
const sliderImage = document.querySelector(".js-slider-image")
const previousImageButton = document.querySelector(".js-previous-image")
const nextImageButton = document.querySelector(".js-next-image")

let sliderIndex = 1

function previousImage() {
  removeActive()
  if (sliderIndex > 0) {
    sliderIndex--
    console.log(sliderIndex)

    sliderImage.innerHTML = `
    <img
      src="images/slider_image${sliderIndex}.jpg"
      alt=""
      class="slider__image"
    />
    `
  }
  makeActive()
}

function nextImage() {
  removeActive()
  if (sliderIndex < 2) {
    sliderIndex++
    console.log(sliderIndex)

    sliderImage.innerHTML = `
  <img
    src="images/slider_image${sliderIndex}.jpg"
    alt=""
    class="slider__image"
  />
  `
  }
  makeActive()
}

function removeActive() {
  dots[sliderIndex].classList.remove("active")
}

function makeActive() {
  dots[sliderIndex].classList.add("active")
}

previousImageButton.addEventListener("click", () => {
  previousImage()
})

nextImageButton.addEventListener("click", () => {
  nextImage()
})
