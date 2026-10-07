import { useEffect, useState } from "react";
import { RESUME } from "../config";

// Returns true only if the resume PDF really exists in /public.
// (Vite answers 200 + HTML for missing files, so we also check the content-type.)
export default function useResume() {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    fetch(RESUME, { method: "HEAD" })
      .then((res) => setExists(res.ok && (res.headers.get("content-type") || "").includes("pdf")))
      .catch(() => setExists(false));
  }, []);

  return exists;
}
