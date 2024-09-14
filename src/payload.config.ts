import { webpackBundler } from "@payloadcms/bundler-webpack";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { payloadCloud } from "@payloadcms/plugin-cloud";
import { slateEditor } from "@payloadcms/richtext-slate";
import dotenv from "dotenv";
import path from "path";
import { buildConfig } from "payload/config";

import Education from "./collections/education";
import Media from "./collections/media";
import Profile from "./collections/profile";
import Projects from "./collections/projects";
import Technologies from "./collections/technologies";
import Users from "./collections/users";
import Work from "./collections/work";

dotenv.config({
  path: path.resolve(__dirname, "../.env.local"),
});

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Media, Profile, Education, Projects, Technologies, Work],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  plugins: [payloadCloud()],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
});
