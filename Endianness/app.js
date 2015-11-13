var littleEndian = (function () {
    var buffer = new ArrayBuffer(2);
    new DataView(buffer).setInt16(0, 256, true);
    return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian === true ? "LittleEndian" : "BigEndian");