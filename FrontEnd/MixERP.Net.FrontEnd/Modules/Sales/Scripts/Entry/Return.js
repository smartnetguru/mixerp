﻿saveButton.click(function () {
    if (validateProductControl()) {
        save();
    };
});

var save = function () {
    var tranId = getParameterByName("TranId");
    var ajaxSaveOder = saveOrder(tranId, valueDate, storeId, partyCode, priceTypeId, referenceNumber, data, shippingAddressCode, shipperId, shippingCharge, cashRepositoryId, costCenterId, agentId, statementReference, transactionIds, attachments);

    ajaxSaveOder.done(function (response) {
        var id = response.d;
        window.location = "/Modules/Sales/Confirmation/Return.mix?TranId=" + id;
    });

    ajaxSaveOder.fail(function (jqXHR) {
        var errorMessage = getAjaxErrorMessage(jqXHR);
        errorLabelBottom.html(errorMessage);
        logError(errorMessage);
    });
};

var saveOrder = function (tranId, valueDate, storeId, partyCode, priceTypeId, referenceNumber, data, shippingAddressCode, shipperId, shippingCharge, cashRepositoryId, costCenterId, agentId, statementReference, transactionIds, attachments) {
    var d = "";
    d = appendParameter(d, "tranId", tranId);
    d = appendParameter(d, "valueDate", valueDate);
    d = appendParameter(d, "storeId", storeId);
    d = appendParameter(d, "partyCode", partyCode);
    d = appendParameter(d, "priceTypeId", priceTypeId);
    d = appendParameter(d, "referenceNumber", referenceNumber);
    d = appendParameter(d, "data", data);
    d = appendParameter(d, "statementReference", statementReference);
    d = appendParameter(d, "attachmentsJSON", attachments);

    d = getData(d);
    url = "/Modules/Sales/Services/Entry/Return.asmx/Save";

    return getAjax(url, d);
};