sap.ui.controller("fragments.test", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf fragments.test
*/
	onInit: function() {
		var data={
				students:[]
		};
		
		for(var i=1;i<=10;i++){
			var student={
					firstName:"ABC"+i,
					gender:((i % 2)===0)? "Female":"Male",
					dateOfBirth:"04-Jun-1992",
					fatherName:"FatherName",
					contactNumber:"99449737613"
			};
			data.students.push(student);
		}
			
	/**	var student={
				firstName:"ABC",
				gender:"male",
				dateOfBirth:"04-06-1992",
				fatherName:"FatherName",
				contactNumber:"99449737613"
		};
		var student1={
				firstName:"DEF",
				gender:"Female",
				dateOfBirth:"04-06-1992",
				fatherName:"FatherName",
				contactNumber:"99449737613"
		};
		data.students.push(student);
		data.students.push(student1);
*/		
		var oModel=new sap.ui.model.json.JSONModel(data);
		this.getView().setModel(oModel);

	},
	
	handleItemPress:function(oEvent){
		var oCurrentStudent=oEvent.oSource.getSelectedItem().getBindingContext().getObject();
		if(!this.showStudentDialog){
			this.showStudentDialog=sap.ui.xmlfragment("fragments.ShowStudent",this);
			var oModel=new sap.ui.model.json.JSONModel(oCurrentStudent);
			this.showStudentDialog.setModel(oModel);
		}
		this.showStudentDialog.getModel().setData(oCurrentStudent);
	//	this.showStudentDialog.getModel().modifyData(oCurrentStudent);
		this.showStudentDialog.open();
		
	},
	handleShowStudentDialogClass:function(oEvent){
		this.showStudentDialog.close();
	},
	
	onPress:function(oEvent){
		this.showStudentDialog.close();
	},
	
		
	
	
	
	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf fragments.test
*/
	onBeforeRendering: function() {

	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf fragments.test
*/
	onAfterRendering: function() {

	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf fragments.test
*/
	onExit: function() {

	}

});