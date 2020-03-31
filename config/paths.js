const path = require("path")
const ROOT_DIR = process.cwd()

const SRC = "src/"
const DIST = "dist/"
const CONFIG = "config/"

module.exports = {
  root: ROOT_DIR,
  src: path.resolve(ROOT_DIR, SRC),
  dist: path.resolve(ROOT_DIR, DIST),
  config: path.resolve(ROOT_DIR, CONFIG),
}
