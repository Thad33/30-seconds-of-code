module.exports = (...vals) => [...vals].sort((a, b) => b.length - a.length)[0];