import React from "react";

import { IVerse, verseKey, vid } from "lib/Verse";
import { sanitizeHtml } from "lib/Sanitize";
import { InternalLink } from "./Links";

type VerseSingleProps = {
  verse: IVerse;
  search: string;
  replace: string;
};

/* A single verse component
 */
export function VerseSingle({ verse, search, replace }: VerseSingleProps) {
  const mungedClasses = "munged text-redletter";
  const sanitizedReplace = sanitizeHtml(replace);

  //   const verseTextReplacedHtml = verse.verseText.replace(
  //     new RegExp(search, "g"),
  //     `<strong>${sanitizedReplace}</strong>`
  //   );
  const verseTextReplacedHtml = verse.verseText.replace(
    new RegExp(search, "g"),
    `<span class="${mungedClasses}"><strong>${sanitizedReplace}</strong></span>`
  );

  return (
    <div className="font-eczar border-double border-redletter border-l-6 pl-4 mb-8">
      <p
        className="font-dearest-outline-dropcap text-redletter-dropcap text-4xl"
        dangerouslySetInnerHTML={{ __html: verseTextReplacedHtml }}
      />
      <p className="italic text-lg pt-8 pb-2">
        &mdash; {verse.bookName} {verse.chapterNum}:{verse.verseNum}
      </p>
    </div>
  );
}
