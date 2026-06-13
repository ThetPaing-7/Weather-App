import data from "./get_data.js";

async function extract_data() {
  let extracted_data = {};
  const response = await data();

  console.log(Object.keys(response));

  extracted_data.description = response["description"];
  extracted_data.alert = response["alerts"];
  extracted_data.address = response["address"];

  let conditions = response["currentConditions"];

  for (let condition in conditions) {
    extracted_data[condition] = conditions[condition];
  }

  console.log(extracted_data);
}

export { extract_data };
