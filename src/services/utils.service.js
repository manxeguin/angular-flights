export const UtilsService = () => {
  'ngInject';
  let dateStringToDate = function (dateString) {
    var parts = dateString.split("-");
    return new Date(parts[0], parts[1] - 1, parts[2]);
  };

  let findByKeyValue = function (data, key, value) {
    var result = data.filter(function (obj) {
      return obj[key] == value;
    });

    if (result && result.length > 0){
      return result[0];
    }

    return result;
  }



  return {
    dateStringToDate: dateStringToDate,
    findByKeyValue: findByKeyValue
  };
};
