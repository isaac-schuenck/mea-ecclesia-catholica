import type { KeywordLink } from "~/config/keywordLinks";
import type { InlineFormat } from "~/config/inlineFormats";

export type ArticleParagraphBlock = {
  type: "paragraph";
  keypath: string;
  id?: string;
  tag?: "p" | "blockquote";
  class?: string;
  links?: Record<string, KeywordLink>;
  formats?: Record<string, InlineFormat>;
};

export type ArticleImageBlock = {
  type: "image";
  src: string;
  alt: string;
  altKey?: string;
  captionKey: string;
  class: string;
  imageClass?: string;
};

export type ArticleHeadingBlock = {
  type: "section-title" | "subheading";
  textKey: string;
  id?: string;
  class?: string;
  compact?: boolean;
};

export type ArticleTranslatedBlock = {
  type: "text" | "quote";
  keypath: string;
  class?: string;
  tag?: "p" | "h4";
};

export type ArticleNoteBlock = {
  type: "note";
  keypath: string;
  class?: string;
  labelKey?: string;
};

export type ArticleGroupBlock = {
  type: "group";
  id?: string;
  tag?: "div" | "blockquote";
  class?: string;
  blocks: ArticleContentBlock[];
};

export type ArticleListBlock = {
  type: "list";
  keypath: string;
  class?: string;
  itemKeyPrefix?: string;
};

export type ArticleContentBlock =
  | ArticleParagraphBlock
  | ArticleImageBlock
  | ArticleHeadingBlock
  | ArticleTranslatedBlock
  | ArticleNoteBlock
  | ArticleGroupBlock
  | ArticleListBlock;

export type ArticleDocument = {
  id: string;
  titleKey?: string;
  containerClass?: string;
  blocks: ArticleContentBlock[];
};

export type ArticleCategory = {
  id: string;
  titleKey: string;
  textKey: string;
  articleIds: string[];
};
