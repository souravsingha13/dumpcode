//websocket connection
    // const monitorSocket = new WebSocket('ws://localhost:8000/ws/monitor');
    monitorSocket.onmessage = function(e) {
		console.log("onmessage")
		const status = JSON.parse(e.data);
		// console.log(status)
		var machine_status = status.message.data
		console.log(machine_status)
		machineUpdater(machine_status['machine'],machine_status['running_status'],machine_status['RPM'],machine_status['top_yarn'],machine_status['bottom_yarn'],machine_status['needle'])
	  }; 
	  monitorSocket.onclose = function(e) {
		console.error('socket closed unexpectedly');
	  };  
	  monitorSocket.onopen = function(event) {
		console.log("websocket connection is on");
		monitorSocket.send(JSON.stringify(
		{'message':"this is client talking"}));
	  }