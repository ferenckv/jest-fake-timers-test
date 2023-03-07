import { Dater } from "./dater";

const { TestEnvironment } = require("jest-environment-node");

class BuggyTestEnvironment extends TestEnvironment {

  constructor(config, context) {
    super(config, context);
  }

  async setup() {
    console.log("Works!")
    this.global.dater = new Dater()
    await super.setup();
  }

  async teardown() {
    await super.teardown();
  }

  getVmContext() {
    return super.getVmContext();
  }
}

module.exports = BuggyTestEnvironment;
