const fs = require("fs-extra");
const path = require("path");
const sass = require("./../utility.js");

async function compileSass({ from, to }) {
  try {
    console.log("Compiling Sass to CSS...");
    const { css: cssString } = await sass.render({ file: from });
    await fs.ensureDir(path.dirname(to));
    await fs.writeFile(to, cssString);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports.compileSass = compileSass;
