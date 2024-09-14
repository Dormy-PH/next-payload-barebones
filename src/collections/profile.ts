import { CollectionConfig } from "payload/types";

const Profile: CollectionConfig = {
  slug: "profile",
  fields: [
    {
      name: "image",
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
      name: "role",
      type: "text",
      required: true,
    },
    {
      name: "introduction",
      type: "text",
      required: true,
    },
    {
      name: "information",
      type: "richText",
    },
    {
      name: "linkedin",
      type: "text",
      required: true,
    },
    {
      name: "github",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "text",
      required: true,
    },
    {
      name: "resume",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Profile;
