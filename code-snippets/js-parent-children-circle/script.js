$(document).ready(function(){
  
// Insert parent first, then child element 
$("#parent-create").on('click', function(e){
  console.log('Hello World...')
	var width = e.target.value;  
  
  var parentWidth = $("#parent-width").val();
  var parentChildren = $("#parent-child").val()
  
  reCalculateCreate(parentWidth, parentChildren)
  
})

function reCalculateCreate(width, children){
$("#parent-circle").css({
  	width: width,
    height: width  
  });
  
  // Generate child elememt
  generateCircles(children, $("#parent-circle"),width/2)
 
}

function generateCircles(children, dom, radius) {
	var totalDegree = 360;
  var dividedDegree = 360/children;

	var childElement = [];
  
  var domOffsetWidth = dom.offset().top;
  var domOffsetHeight = dom.offset().left;
  var width = dom.width()
  var halfWidth = width/2; // 2 side
  //  Child height restrict 
  window.dom = dom;
  var parentPerimeter = 2 * Math.PI * radius;
  // If it go through parent circle 
  var howManyChildrenCan = parentPerimeter/ children;
  
  var requiredGap = 100;
  
  var child2Radius =  40;
  child2Radius = ((parentPerimeter - (children * requiredGap )))/children;
  
  
  
  var updatedRadius = radius;
  var parentRequiredGap = $("#parent-required-gap").val()   
  console.log(parentRequiredGap, "<<<")
  updatedRadius = parentRequiredGap || radius;  
  console.log(updatedRadius)
  console.log("Above is updated......")
  dom.find(".child-circle").remove()
  for(i=1; i<= children; ++i){
  	var child = $('<div/>',{
     class: 'child-circle'
    });
    var y = Math.sin((dividedDegree * i) * (Math.PI / 180)) * updatedRadius;
    var x = Math.cos((dividedDegree * i) * (Math.PI / 180)) * updatedRadius;    
    console.log(updatedRadius)
    y = y + halfWidth - child2Radius/2;
    x = x + halfWidth - child2Radius/2;
    child.css({ top: y, left: x, width: child2Radius, height: child2Radius})
    child.data('content', 'This is a '+i + 'Text')
		childElement.push(child);
    child.on("click", function(){
    	var parentDisplay = $(".parent-display-section");
      var data = $(this).data();
      parentDisplay.html(data.content)
    
    })
  }
	dom.append(childElement)
}
})