export function log (msg, flag) {
  if (flag || process.env.NODE_ENV !== 'production') {
    console.log(msg)
  }
}