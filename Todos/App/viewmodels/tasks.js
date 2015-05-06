define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {

    var logs = ko.observableArray();
    var tasks = ko.observableArray();
    var taskName = ko.observable('');

    removeTask = function (task) {
        tasks.remove(task);
        log('Removed task: ' + this.taskName);
    };

    addTask = function () {
        if (taskName().length != 0) {
            tasks.push({ taskName: taskName(), done: ko.observable(false) });
            log('Added new task: ' + taskName);
            taskName('');
        }
    };

    completeTask = function (task) {
        task.done(true);
        log("completed task: " + task.taskName)
    }

    log = function (message) {
        logs.push(message)
    };

    // Return public methods
    return {
        taskName: taskName,
        logs: logs,
        tasks: tasks,
        addTask: addTask,
        removeTask: removeTask,
    }
});