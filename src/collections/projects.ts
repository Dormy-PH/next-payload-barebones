import { CollectionConfig } from "payload/types";

const Projects: CollectionConfig = {
  slug: "projects",
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "startDate",
      type: "date",
      required: true,
    },
    {
      name: "completionData",
      type: "date",
      required: true,
    },
    {
      name: "technologies",
      type: "array",
      required: true,
      fields: [
        {
          name: "technology",
          type: "text",
        },
      ],
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "urlWebsite",
      type: "text",
    },
    {
      name: "urlRepository",
      type: "text",
    },
    {
      name: "urlPublication",
      type: "text",
    },
  ],
};

export default Projects;
