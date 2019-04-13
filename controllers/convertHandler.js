/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  var re = new RegExp('[A-Za-z]+'),
    tooManyDecimals = new RegExp('(\d*\\.+){2,}'),
    tooManySlashes = new RegExp('\/*\d*\.*\d*\/+\d*\.*\d*\/\d*\.*\d*')
    
    this.getNum = function(input) {
      var result;
      result = input.split(re, 1)[0]
      result===''?result='1':result;
      if (tooManySlashes.test(result) || tooManyDecimals.test(result)){
      result = 'invalid number'
      }else result = (result)
    return result;
    };
    
    this.getUnit = function(input) {
      var result;
      var unitArray = ['l', 'gal', 'lbs', 'kg', 'mi', 'km'];
      input.match(re)===null?result = 'invalid unit':result = input.match(re)[0];
      unitArray.includes(result.toLowerCase())?result:result = 'invalid unit';
      return result;
    };
    
    this.getReturnUnit = function(initUnit) {
      var result;
      var initArray = ['l', 'gal', 'lbs', 'kg', 'mi', 'km'];
      var returnArray = ['gal', 'l', 'kg', 'lbs', 'km', 'mi'];
      result = returnArray[initArray.findIndex(init=>init===initUnit.toLowerCase())];
      return result;
    };
  
    this.spellOutUnit = function(unit) {
      var result;
      switch (unit){
        case 'l' : return result = 'liter';
          break;
        case 'gal': return result = 'gallon';
          break;
        case 'lbs' : return result = 'pound';
          break;
        case 'kg' : return result = 'kilogram';
          break;
        case 'mi' : return result = 'mile';
          break;
        case 'km' : return result = 'kilometer';
          break;
                                }
      return result;
    };
    
    this.convert = function(initNum, initUnit) {
      const galToL = 3.78541;
      const lbsToKg = 0.453592;
      const miToKm = 1.60934;
      var result;
      initNum==='invalid number'?initNum:
      initNum = eval(initNum)
      switch (initUnit.toLowerCase()){
        case 'gal': return result=initNum*galToL;
          break;
        case 'l': return result=initNum/galToL;
          break;
        case 'lbs': return result=initNum*lbsToKg;
          break;
        case 'kg': return result=initNum/lbsToKg;
          break;
        case 'mi': return result=initNum*miToKm;
          break;
        case 'km': return result=initNum/miToKm;
          break;
      }
      return result;
    };
    
    this.getString = function(initNum, initUnit, returnNum, returnUnit) {
      var result,
          initPlural='s',
          returnPlural='s',
          initPlur;
      initNum==='invalid number'?initNum: initPlur=eval(initNum)
      initPlur===1?initPlural='':initPlural;
      returnNum===1?returnPlural='':returnPlural;
      returnNum===undefined?result= initUnit:
      result = initNum + ' ' + this.spellOutUnit(initUnit.toLowerCase()) + initPlural + ' converts to ' + returnNum.toFixed(5) + ' ' + this.spellOutUnit(returnUnit) + returnPlural + '.';
      return result;
    };
    
  }
  
  module.exports = ConvertHandler;
  