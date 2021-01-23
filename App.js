module.exports = ['linux', 'darwin', 'freebsd', 'sunos'].some(plats => process.platform.includes(plats))
