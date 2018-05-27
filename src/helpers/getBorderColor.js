export default function getBorderColor(fieldName){
  const statuses = this.state.validationStorage[fieldName];
  if (statuses.indexOf("validation-failed") !== -1) {
    return "red";
  }

  if (statuses.indexOf("prevalidation-failed") !== -1) {
    return "#51526b";
  }

  if (statuses.indexOf("validation-passed") !== -1) {
    return "green";
  }
};
