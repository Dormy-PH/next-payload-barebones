import { CollectionConfig } from "payload/types";

const Work: CollectionConfig = {
  slug: "work",
  fields: [
    {
      name: "companyLogo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "companyName",
      type: "text",
      required: true,
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
      required: true,
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

export default Work;
