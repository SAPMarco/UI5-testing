sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel",
  ],
  function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend(
      "com.mrb.UI5-Testing.controller.App.Controller",
      {
        onInit: function () {
          var oViewModel = new JSONModel({
            busy: true,
            delay: 0,
          });

          this.setModel(oViewModel, "appView");

          this.getOwnerComponent()
            .getModel()
            .metadataLoaded()
            .then(function () {
              oViewModel.setProperty("/busy", false);
            });
        },
      }
    );
  }
);
