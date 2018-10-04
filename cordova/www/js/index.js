/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function addTodo() {
    var ul = document.getElementById("list");
    var swtch = document.createElement("label");
    swtch.setAttribute("class", "switch")
    var input = document.createElement("input");
    input.setAttribute("id", "toggle");
    input.setAttribute("type", "checkbox")
    var span = document.createElement("span");
    span.setAttribute("class", "slider round");

    swtch.appendChild(input);
    swtch.appendChild(span);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Todo item#" + ul.childNodes.length));
    li.appendChild(swtch);
    ul.appendChild(li);
    li.onclick = toggleItem;
}

function toggleItem(e) {
    e.target.childNodes.getElementById("toggle").setAttribute("")
}

function filteredTodos() {
    document.getElementsByTagName("li")
    this.todos.filter((todo) => !(todo.done && this.onlyShowNotDone));
}