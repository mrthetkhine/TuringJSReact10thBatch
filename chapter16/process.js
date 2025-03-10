const child_process = require("child_process");
const util = require("util");
const execP = util.promisify(child_process.exec);
execP("ls -la",{encoding: "utf8"})
    .then(out => console.log(out));