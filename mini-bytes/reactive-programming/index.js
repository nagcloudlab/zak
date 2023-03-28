// cjs | esm
const Rx = require("rxjs");
const { filter } = require("rxjs/operators");

// ---------------------------------
// trainer-module
// ---------------------------------

const trainer = {
  getTopic() {
    console.log("trainer returning topic");
    // 5s
    return 1;
  },
  getTopicAsync() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("trainer resolving promise..");
        resolve(1); // push
      }, 5000);
    });
    return promise;
  },
  getTopicsAsync() {
    const stream = new Rx.Subject();
    let topic = 0;
    setInterval(() => {
      console.log("trainer propagating change/data/event into stream");
      stream.next(topic++); //
    }, 1000);
    return stream;
  },
};

// ---------------------------------
// manager-module
// ---------------------------------

const manager = {
  getWorkAsync(topic) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("manager resolving promise..");
        resolve(topic * topic); // push
      }, 5000);
    });
    return promise;
  },
};

// ---------------------------------
// employee-module
// ---------------------------------

const employee = {
  doLearnAndWork() {
    console.log("employee requesting topic on trainer");
    const topic = trainer.getTopic(); // pull / sync / blocking call
    console.log("employee learning topic " + topic);
    console.log("employee working based on topic " + topic);
    console.log("employee - with email work");
  },
  doLearnAndWorkAsyncV1() {
    console.log("employee requesting topic on trainer");
    const promise = trainer.getTopicAsync();
    console.log("employee received promise, defer actions on promise");
    promise.then((topic) => {
      console.log("employee learning topic " + topic);
      let promise = manager.getWorkAsync(topic);
      promise.then((work) => {
        console.log("employee working - " + work);
      });
    });
    console.log("employee - with email work");
  },
  async doLearnAndWorkAsyncV2() {
    const topic = await trainer.getTopicAsync();
    const work = await manager.getWorkAsync(topic);
    console.log("employee working - " + work);
  },
  work() {
    this.doLearnAndWorkAsyncV2();
    console.log("employee - with email work");
  },
  doLearnAndWorkAsyncV3() {
    const stream = trainer.getTopicsAsync();
    stream.pipe(filter((topic) => topic % 2 !== 0)).subscribe({
      next: (topic) => {
        console.log("employee reacting to the topic " + topic);
      },
      error: (err) => {
        console.log("employee - reacting to the error " + err);
      },
      complete: () => {
        console.log("employee - reacting to the complete");
      },
    });
  },
};

// ---------------------------------

employee.doLearnAndWorkAsyncV3();
