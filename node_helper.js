/* Magic Mirror
 * Module: MMM-CANVAS
 *
 * By Chase Cromwell
 *
 */
const NodeHelper = require('node_helper');
const request = require('request');
var smallpayload = [
    ["", "", ""],
];
var finalpayload = [
    ["", ""],
];
module.exports = NodeHelper.create({

    start: function() {
        console.log("Starting node_helper for: " + this.name);
    },

    getCANVAS: function(payload) {
        var key = payload[0];
        var courses = payload[1];
        var urlbase = payload[2];
        var count = 0;
        var self = this;
        courses.forEach(runCourses);
        var timer = setInterval(function() {
            if (count == courses.length) {
                self.sendSocketNotification('CANVAS_RESULT', finalpayload);
                finalpayload = [
                    ["", ""],
                ];
                smallpayload = [
                    ["", ""],
                ];
                count = 0;
            }
        }, 400);

        function runCourses(item, index) {
            var url = "https://"+ urlbase +"/api/v1/courses/" + courses[index] + "/assignments?access_token=" + key + "&per_page=30&bucket=upcoming&order_by=due_at";
            request({
                url: url,
                method: 'GET'
            }, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    var result = JSON.parse(body);
                    for (var j in result) {
                        smallpayload.push([result[j].name, result[j].due_at, index]);
                    }
                } else {
                  smallpayload.push(["ERROR", JSON.parse(error), ""]);
                }
                finalpayload.push(smallpayload);
                count++;
            });
        }
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === 'GET_CANVAS') {
            this.getCANVAS(payload);
        }
    }
});
