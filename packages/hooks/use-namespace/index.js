export const defaultNamespace = 'we'
const statePrefix = 'is-'

const _bem = (
  namespace,
  block,
  blockSuffix,
  element,
  modifier,
) => {
  let cls = `${namespace}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

export const useNamespace = (block) => {
  const namespace = defaultNamespace
  const b = (blockSuffix = '') => _bem(namespace, block, blockSuffix, '', '')
  const e = (element) => element ? _bem(namespace, block, '', element, '') : ''
  const m = (modifier) => modifier ? _bem(namespace, block, '', '', modifier) : ''
  const be = (blockSuffix, element) =>
    blockSuffix && element
      ? _bem(namespace.value, block, blockSuffix, element, '')
      : ''
  const em = (element, modifier) =>
    element && modifier
      ? _bem(namespace.value, block, '', element, modifier)
      : ''
  const bm = (blockSuffix, modifier) =>
    blockSuffix && modifier
      ? _bem(namespace.value, block, blockSuffix, '', modifier)
      : ''
  const bem = (blockSuffix, element, modifier) =>
    blockSuffix && element && modifier
      ? _bem(namespace.value, block, blockSuffix, element, modifier)
      : ''
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true
    return name && state ? `${statePrefix}${name}` : ''
  }

  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
  }
}
