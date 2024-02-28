// 简化问题:

const input = [{ value: 2, x: 0 }, { value: 2, x: 1 }, { value: 2, x: 2 }, null] // 右合并
// const input = [null, { value: 2, x: 1 }, { value: 2, x: 2 }, null] // 右合并
// const input = [null, null, { value: 2, x: 2 }, null] // 右合并
// const input = [null, null, null, null] // 右合并
const vector = [3, 2, 1, 0]
const direction = 1

// 右移
function move() {
  vector.forEach((x) => {
    if (!input[x])
      return

    let mergeTo = null
    let moveTo = null
    let i = x

    while (i >= 0 && i < 4 && !mergeTo) {
      moveTo = i
      i += direction
      mergeTo = input[i]
    }

    if (mergeTo && mergeTo.value === input[x].value && !mergeTo.mergedFrom) {
      const merged = {
        x: mergeTo.x,
        value: mergeTo.value * 2,
        mergedFrom: [input[x], mergeTo],
      }
      input[mergeTo.x] = merged
      input[x] = null
    }
    else {
      input[moveTo] = {
        x: moveTo,
        value: input[x].value,
        prevPosition: x,
      }
      input[x] = null
    }
    moveTo = null
    if (mergeTo)
      mergeTo = null
  })
  console.log(input)
}

move()
