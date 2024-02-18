/**
 * @types {Element[]}
 */
const barEls = []
let filledBars = 0

function startTransition(index) {
  requestAnimationFrame(() => {
    barEls[index].classList.add('progress-bar-filled')
  })
}

/**
 * @param {Element} $element
 * @param {number} initValue
 */
function progressBar($element, initValue) {
  const $progressBarEl = document.createElement('div')
  $progressBarEl.classList.add('progress-bar')
  barEls.push($progressBarEl)
  if (filledBars + 1 === barEls.length)
    startTransition(filledBars)

  $progressBarEl.addEventListener('transitionend', () => {
    filledBars += 1
    if (filledBars < barEls.length)
      startTransition(filledBars)
  })
  const clampedValue = Math.min(100, Math.max(initValue, 0))
  $progressBarEl.style.setProperty('width', `${clampedValue}%`)

  $element.classList.add('progress')
  $element.appendChild($progressBarEl)
}

const btnEl = document.querySelector('#add-bar')
btnEl.addEventListener('click', () => {
  const wrapperEl = document.querySelector('#bars-wrapper')
  const progressEl = document.createElement('div')
  wrapperEl.appendChild(progressEl)
  progressBar(progressEl, Math.floor(Math.random() * 101))
})
