sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onInit: function(oEvent) {
            var oURLService = sap.ushell.Container.getService('URLParsing');
            var sShellHash = oURLService.getShellHash(document.URL);
            if (oURLService.parseShellHash(sShellHash).params.param) {
                var sParam = oURLService.parseShellHash(sShellHash).params.param[0];
                sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel({ param: sParam }), "customModel");
            }
        }
    };
});