ngDefine('cockpit.plugin.statistics-plugin.directives', function(module) {
	module.directive('startEndControlElement', function(){
		 return {
		      restrict: 'E',
		      template: 
		    	 '<form class="form-horizontal">'+
		    	 	'<h5>Show:<h5>'+
		    	 	'<h5>starting time or ending time</h5>'+
		    	 	'<div class="control-group">'+
		    	 		'<select ng-model="currentXValue" ng-options="currentXValue.xValue for currentXValue in xValueSpecifiers" ng-change="getDataAndDrawGraph()">'+
		    	 		'</select>'+
		    	 	'</div>'+
		    	 	'<h5>{{currentXValue.xValue}} on a weekly or dayly basis</h5>'+
		    	 	'<div class="control-group">'+
		    	 		'<select ng-model="currentFrame" ng-options="currentFrame.frame for currentFrame in timeFrames" ng-change="getDataAndDrawGraph()">'+
		    	 		'</select>'+
		    	 	'</div>'+
		    	 	'<h5>of process instances or activities<h5>'+
		    	 	'<div class="control-group">'+
	    	 			'<select ng-model="currentLevel" ng-options="currentLevel.level for currentLevel in levelSpecifiers" ng-change="getDataAndDrawGraph()">'+
	    	 			'</select>'+
	    	 		'</div>'+
	    	 		'<h5>of a specific process or all<h5>'+
	    	 		'<div class="control-group">'+
    	 				'<select ng-disabled="!currentLevel.moreOptions" ng-model="processInstance" ng-options="processInstance.processDefKey for processInstance in processInstances" ng-change="getDataAndDrawGraph()">'+
    	 				'</select>'+
    	 			'</div>'+
		    	 	'<h5>adjust width<h5>'+
		    	 	'<input type="number" name="points" min="0" step="10" value="1000" ng-model = "width" ng-change="getDataAndDrawGraph()">'+
		    	 '</form>'
		    };		
	});
});
