export function rotate(input: any[], rows: number, cols: number, degrees: number): any[] {
  if (input.length !== rows * cols)
    throw new Error('Array length does not match matrix dimensions')
  const numRotations = (degrees % 360) / 90
  if ((numRotations <= 0) || degrees < 0)
    throw new Error('Degree must be a positive multiple of 90')
  let output: any[] = input.slice()
  for (let r = 0; r < numRotations; r++) {
    const temp: any[] = []
    for (let j = 0; j < cols; j++) {
      for (let i = rows - 1; i >= 0; i--)
        temp.push(output[i * cols + j])
    }

    output = temp
    ;[rows, cols] = [cols, rows]
  }

  return output
}
