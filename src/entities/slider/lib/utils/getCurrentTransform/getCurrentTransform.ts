export const getCurrentTransform = (slideFlow: HTMLElement): number => {
  const flowTransform = slideFlow.style.transform
  let currentTransform: number
  if (flowTransform) {
    currentTransform = Number(flowTransform.match(/-\d{1,}|\d{1,}/)?.[ 0 ])
  } else {
    currentTransform = 0
  }

  return currentTransform
}
