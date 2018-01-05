sap.ui.define([
		"../controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("ca.altalink.gshlyakh.flights_cds.list_report.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);