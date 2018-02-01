
import { orm } from 'app/orm';
import { handleAsyncExceptions } from 'app/util';

import tasks from './tasks';

// the task runner
async function run(taskName, ...args) {
    const taskNames = Object.keys(tasks);
    if (taskNames.indexOf(taskName) === -1) {
        console.log('Tasks are', taskNames)
        return Promise.resolve(null);
    }

    try {
        return await tasks[taskName](...args);
    } catch (err) {
        throw err;
    }
}

if (require.main === module) {
    // handle async exceptions
    handleAsyncExceptions();
    // run the task runner
    const [taskName, ...args] = process.argv.slice(2);

    (async () => {
        await run(taskName, ...args);
        await new Promise((resolve) => setTimeout(async () => {
            await orm.close();
            resolve();
        }, 2500));
    })();
}

export default run;

