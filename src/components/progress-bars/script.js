/**
 * @param {Element} $element
 * @param {number} initValue
 */
function progressBar($element, initValue) {
  if (!$element)
    return
  const $progressBarEl = document.createElement('div')
  $progressBarEl.classList.add('progress-bar')
  const clampedValue = Math.min(100, Math.max(initValue, 0))
  $progressBarEl.style.setProperty('width', `${clampedValue}%`)
  $progressBarEl.textContent = `${clampedValue}%`

  $element.classList.add('progress')
  $element.appendChild($progressBarEl)
}
progressBar(document.querySelector('#progress-0'), 0)
progressBar(document.querySelector('#progress-25'), 25)
progressBar(document.querySelector('#progress-50'), 50)
progressBar(document.querySelector('#progress-75'), 75)
progressBar(document.querySelector('#progress-100'), 100)
progressBar(document.querySelector('#progress-2'), 2)
progressBar(document.querySelector('#progress--10'), -10)
progressBar(document.querySelector('#progress-120'), 120)
