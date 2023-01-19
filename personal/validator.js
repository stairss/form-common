import { personalEnum } from "../enum.js";

export const validator = {
  type: "object",
  required: ["last_name", "first_name"],
  properties: {
    [personalEnum.last_name]: { type: "string", minLength: 3 },
    [personalEnum.first_name]: { type: "string", minLength: 3 },
    [personalEnum.pesel]: { type: "string", minLength: 11, maxLength: 11 },
    [personalEnum.date_of_birth]: {
      format: "date-time",
      pattern:
        "^[0-9]{4}-((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01])|(0[469]|11)-(0[1-9]|[12][0-9]|30)|(02)-(0[1-9]|[12][0-9]))T(0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[1-5][0-9]):(0[0-9]|[1-5][0-9]).[0-9]{3}Z$",
    },
    [personalEnum.place_of_birth]: { type: "string" },
    [personalEnum.gender]: { type: "integer", enum: [1, 2, 3] },
    [personalEnum.phone_number]: {
      type: "string",
      pattern: "^$|[0-9]{9}$",
    },
    [personalEnum.email]: { type: "string", format: "email" },
    [personalEnum.street]: { type: "string" },
    [personalEnum.street_number]: { type: "string" },
    [personalEnum.apartment_number]: { type: "string" },
    [personalEnum.city]: { type: "string" },
    [personalEnum.zip_code]: {
      type: "string",
      pattern: "$|[0-9]{2}(?:-[0-9]{3})?$",
    },
    [personalEnum.county]: { type: "string" },
    [personalEnum.community]: { type: "string" },
    [personalEnum.voivodeship]: { type: "string" },
    [personalEnum.mailing_address]: { type: "integer", enum: [0, 1] },
    [personalEnum.mailing_street]: { type: "string" },
    [personalEnum.mailing_street_number]: { type: "string" },
    [personalEnum.mailing_apartment_number]: { type: "string" },
    [personalEnum.mailing_city]: { type: "string" },
    [personalEnum.mailing_zip_code]: {
      type: "string",
      pattern: "$|[0-9]{2}(?:-[0-9]{3})?$",
    },
    [personalEnum.mailing_county]: { type: "string" },
    [personalEnum.mailing_community]: { type: "string" },
    [personalEnum.mailing_voivodeship]: { type: "string" },
    [personalEnum.black_list]: { type: "integer", enum: [0, 1] },
    [personalEnum.marketing_agreement]: { type: "integer", enum: [0, 1] },
    [personalEnum.shipping_agreement]: { type: "integer", enum: [0, 1] },
    [personalEnum.assigned_project]: { type: "integer", enum: [0, 1] },
    [personalEnum.sub_region]: { type: "integer", enum: [0, 1] },
    [personalEnum.osi]: { type: "integer", enum: [0, 1] },
    [personalEnum.zit]: { type: "integer", enum: [0, 1] },
    [personalEnum.medium_city]: { type: "integer", enum: [0, 1] },
    [personalEnum.rural_area]: { type: "integer", enum: [0, 1] },
  },
};
