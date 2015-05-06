define(['plugins/http', 'durandal/app', 'knockout','viewmodels/tasks'], function (http, app, ko,tasks) {
    return {
        
        logs : tasks.logs()
    }
});