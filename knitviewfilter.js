//machineUpdater function is to take machines values which is comming from kepserver and update the dashboard.  
function machineUpdater(name,running_status,RPM,top,bottom,niddle){
	console.log(name,running_status,RPM,top,bottom,niddle)
	var machine_id = document.getElementById(name+"title")
	var speed =  document.getElementById(name+"rpm")
	var top_yarn =  document.getElementById(name+"topyarn")
	var bottom_yarn =  document.getElementById(name+"bottomyarn")
	var niddle_break =  document.getElementById(name+"needlebreak")

	speed.innerHTML = "RPM : "+RPM.toFixed(2);

	if(running_status == true){
	  machine_id.className ="machineId form-control border text-center bg-info"
	}else{
	  machine_id.className ="machineId form-control border text-center bg-danger"
	}

	if(top == true){
	  top_yarn.className ="badge badge-danger ml-1"
	}else{
	  top_yarn.className ="badge badge-secondary ml-1"
	}

	if(bottom == true){
	  bottom_yarn.className ="badge badge-danger ml-1"
	}else{
	  bottom_yarn.className ="badge badge-secondary ml-1"
	}
	if(niddle == true){
	  niddle_break.className ="badge badge-danger ml-1"
	}else{
	  niddle_break.className ="badge badge-secondary ml-1"
	}
	
  }