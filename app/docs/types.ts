export type Section = {
  id: string;
  title: string;
};

export type ParagraphContent = {
  type: "paragraph";
  text: string;
};

export type HeadingContent = {
  type: "heading";
  text: string;
};

export type ListContent = {
  type: "list";
  items: string[];
};

export type OrderedListItem =
  | string
  | {
      text: string;
      description?: string;
      code?: string;
    };

export type OrderedListContent = {
  type: "orderedList";
  items: OrderedListItem[];
};

export type CodeContent = {
  type: "code";
  text: string;
};

export type TableContent = {
  type: "table";
  headers: string[];
  rows: string[][];
};

export type ContentItem =
  | ParagraphContent
  | HeadingContent
  | ListContent
  | OrderedListContent
  | CodeContent
  | TableContent;

export type SectionContent = {
  title: string;
  content: ContentItem[];
};

export type DocContent = Record<string, SectionContent>;
