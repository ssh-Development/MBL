import ScanbotSDK from 'scanbot-web-sdk'

let scanbotSDK;
let scanner;

const configuration = {
    //  The `id` of the containing HTML element where the Barcode Scanner will be initialized.
    containerId: 'scanner',
    userGuidance: {
        visible: true,
        title: {
            text: "PSI Artikelnummer scannen!",
            color: "white",
        },
        background: {
            strokeColor: "red",
            fillColor: "rgba(255, 0, 0, 0.2)",
        }
    },
    onBarcodesDetected: (result) => {
        // If you're happy with the result, dispose the scanner right away
        scanner.dispose();
        // Otherwise the scanner will continue scanning and delivering results
        const format = result.barcodes[0].format // The barcode's symbology
        const text = result.barcodes[0].text // The text value of the barcode
        // ...

        window.dotNetHelper.invokeMethodAsync('OnBarcodeDetected', text);
    },
}

const LICENSE_KEY =
    "kWcdGY2S6QxgVO+FpyBiSFYHnO2+qT" +
    "V6mpU5VeUqf1GmTjlXgZ2S02kVCeim" +
    "yPRElZrUXPZOttMRObot3pP53t/TXy" +
    "uLtuVFMDNdRQDGdJNhBTguYUdsfF7F" +
    "MCq1jhFqzFsB47rVBBzL7a99CFEJm6" +
    "T9pt46QalJDQFw6b4OWw3Ywq/XK1dd" +
    "bZTsAWKsScUV2P5yknE/LBhT4A6+aK" +
    "eI26sOosdmU1zXhktI+XNGA+MoOTpt" +
    "uNJpg8+nf4tlenxA5gPXNORb9w/OAc" +
    "Bi+Xu/zikc2akUZY+P0KKgVBRvQWqH" +
    "U/eLZP7mfs3WdpFfHiB6tToxVw/M6Z" +
    "RoG6xmglm+sg==\nU2NhbmJvdFNESw" +
    "psb2NhbGhvc3R8c3NoZGV2LmRlCjE3" +
    "NTkzNjMxOTkKODM4ODYwNwo4\n";


(async function () {
    scanbotSDK = await ScanbotSDK.initialize({
        licenseKey: LICENSE_KEY,
        enginePath: "../lib/scanbot-web-sdk"
    });
})();


window.setDotNetHelper = function (dotNetHelper) {
    window.dotNetHelper = dotNetHelper;
}

window.openScanner = async function () {
    scanner = await scanbotSDK.createBarcodeScanner(configuration);
}
