import React from "react";
import Heading from "./Heading";
import Code from "./Code";
import { P } from "./P";
import { Table } from "./Table";
import Link from "./Link";
import { Image } from "./Image";
import { Text } from "rimble-ui";

/* eslint-disable react/display-name */
const mdxComponents = {
  h1: props => <Heading {...props} as="h1" fontSize={[5, 6]} pt={3} />,
  h2: props => <Heading {...props} as="h2" fontSize={[4, 5]} pt={3} />,
  h3: props => <Heading {...props} as="h3" fontSize={3} pt={3} />,
  h4: props => <Heading {...props} as="h4" fontSize={2} pt={3} />,
  h5: props => <Heading {...props} as="h5" fontSize={1} pt={3} />,
  h6: props => <Heading {...props} as="h6" fontSize={0} pt={3} />,
  pre: props => {
    if (props.children.props.name === "code") {
      // mdxTag has children prop, which is source code
      // mdxTagProps.props is the props to pass to `code`, including meta props
      const mdxTagProps = props.children.props;
      const lang = "markup";
      // do {
      //   if (mdxTagProps.props.className) {
      //     const match = mdxTagProps.props.className.match(/language-([a-z]*)/);
      //     // if (match && match[1]) {
      //     //   match[1];
      //     // }
      //   } else {
      //     // ("markup");
      //   }
      // };
      return (
        <Code is="block" {...mdxTagProps} {...mdxTagProps.props} lang={lang} />
      );
    } else {
      return <pre {...props} />;
    }
  },
  code: props => <Code is="block" {...props} />,
  p: P,
  inlineCode: Code,
  table: props => <Table {...props} />,
  a: props => <Link {...props} />,
  image: props => <Image {...props} />,
  ul: props => <Text as={"ul"} pl={3} m={0} {...props} />,
  li: props => <Text as={"li"} {...props} />
  // TODO add `blockquote`
};

export default mdxComponents;
