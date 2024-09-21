import { CollectionConfig } from "payload/types";

const Technologies: CollectionConfig = {
  slug: "technologies",
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
  ],
};

export default Technologies;
