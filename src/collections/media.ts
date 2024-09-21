import { slateEditor } from "@payloadcms/richtext-slate";
import type { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticURL: "/media",
    disableLocalStorage: true,
  },
  access: {
    read: () => true,
  },

  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "caption",
      type: "richText",
      editor: slateEditor({
        admin: {
          elements: ["link"],
        },
      }),
    },
  ],
};

export default Media;
