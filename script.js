// Dummy data for testing
const dummyAssetData = {
  Name: "Name",
  InstanceId: "InstanceId",
  ClassId: "ClassId",
  Model: "ClassId",
  ManufacturerName: "ManufacturerName",
  OwnerName: "OwnerName",
  CITag: "CITag",
  ReconciliationIdentity: "ReconciliationIdentity",
  Item: "Desktop",
};

// Display asset data and generate QR code and barcode
function displayLabel() {
  // Generate QR code with Base64-encoded data
  const assetDetails = JSON.stringify({
    Name: dummyAssetData.Name,
    InstanceId: dummyAssetData.InstanceId,
    ClassId: dummyAssetData.ClassId,
    Model: dummyAssetData.Model,
    ManufacturerName: dummyAssetData.ManufacturerName,
    OwnerName: dummyAssetData.OwnerName,
    CITag: dummyAssetData.CITag,
    ReconciliationIdentity: dummyAssetData.ReconciliationIdentity,
    Item: dummyAssetData.Item,
  });
  const base64Data = btoa(assetDetails); // Encode to Base64

  const qrCode = new QRCode(document.getElementById('qr-code'), {
    text: `http://example.com/asset-details.html?data=${base64Data}`,
    width: 128,
    height: 128,
  });

  // Generate barcode with displayValue set to true
  JsBarcode('#barcode', dummyAssetData.id, {
    format: 'CODE128',
    displayValue: true, // Show text below barcode
    height: 50, // Adjust barcode height
  });
}

// Run the function to display the label
displayLabel();