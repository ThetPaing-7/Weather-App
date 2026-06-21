import data from "./get_data.js";

async function extract_data() {
  let extracted_data = {};
  const response = await data();
  
  extracted_data.this_day = response.days[0].datetime
  extracted_data.description = response["description"];
  extracted_data.alert = response["alerts"];
  extracted_data.address = response["resolvedAddress"];

  let conditions = response["currentConditions"];

  for (let condition in conditions) {
    extracted_data[condition] = conditions[condition];
  }

  return extracted_data;
}

export { extract_data };
