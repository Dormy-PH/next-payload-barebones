import { CollectionConfig } from "payload/types";

const Education: CollectionConfig = {
  slug: "education",
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "institution",
      type: "text",
      required: true,
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "level",
      type: "text",
      required: true,
    },
    {
      name: "degree",
      type: "text",
    },
    {
      name: "startDate",
      type: "date",
      required: true,
    },
    {
      name: "endDate",
      type: "date",
    },
    {
      name: "description",
      type: "richText",
    },
  ],
};

export default Education;
