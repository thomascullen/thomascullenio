import H2 from "./h2";
import H3 from "./h3";
import Code from "./code";
import Link from "./link";
import Quote from "./quote";
import Img from "./img";
import InlineCode from "./inline-code";
import Paragraph from "./paragraph";

export default {
  h2: H2,
  h3: H3,
  a: Link,
  pre: Code,
  img: Img,
  blockquote: Quote,
  inlineCode: InlineCode,
  p: Paragraph,
};
