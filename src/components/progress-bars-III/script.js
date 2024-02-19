function progress() {
  const progressBars = []
  let filledBars = 0
  let concurrentBars = 0
  const MAX_CONCURRENT_BARS = 3
  const wrapperEl = document.querySelector('#bars-wrapper')

  function addProgressBar() {
    const progressEl = document.createElement('div')
    wrapperEl.appendChild(progressEl)
    initProgressBar(progressEl, Math.floor(Math.random() * 101))
  }

  function initProgressBar($rootElement, initValue) {
    const progressBarEl = document.createElement('div')
    progressBarEl.classList.add('progress-bar')
    progressBars.push(progressBarEl)
    if (concurrentBars < MAX_CONCURRENT_BARS) {
      startTransition(filledBars)
      filledBars += 1
      concurrentBars += 1
    }
    progressBarEl.addEventListener('transitionend', () => {
      concurrentBars -= 1
      if (filledBars < progressBars.length) {
        startTransition(filledBars)
        filledBars += 1
        concurrentBars += 1
      }
    })
    const clampedValue = Math.min(100, Math.max(0, initValue))
    progressBarEl.style.setProperty('width', `${clampedValue}%`)
    $rootElement.classList.add('progress')
    $rootElement.appendChild(progressBarEl)
  }

  function startTransition(index) {
    requestAnimationFrame(() => {
      progressBars[index].classList.add('progress-bar-filled')
    })
  }

  return { addProgressBar }
}

const { addProgressBar } = progress()
document.querySelector('#add-bar').addEventListener('click', addProgressBar)
