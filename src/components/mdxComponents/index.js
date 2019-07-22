import React from "react";
import { Text, Image } from "rimble-ui";
import Heading from "./Heading";
import Code from "./Code";
import Link from "./Link";
import { Table } from "./Table";

/* eslint-disable react/display-name */
const mdxComponents = {
  h1: props => <Heading {...props} as="h1" fontSize={[5, 6]} />,
  h2: props => <Heading {...props} as="h2" fontSize={[4, 5]} />,
  h3: props => <Heading {...props} as="h3" fontSize={3} />,
  h4: props => <Heading {...props} as="h4" fontSize={2} />,
  h5: props => <Heading {...props} as="h5" fontSize={1} />,
  h6: props => <Heading {...props} as="h6" fontSize={0} />,
  pre: props => {
    if (props.children.props && props.children.props.name === "code") {
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
  p: props => <Text as={'p'} my={3} {...props} />,
  inlineCode: Code,
  table: props => <Table {...props} />,
  a: props => <Link {...props} />,
  image: props => <Image my={3} {...props} />,
  ul: props => <Text as={"ul"} pl={3} m={0} {...props} />,
  li: props => <Text as={"li"} {...props} />
  // TODO add `blockquote`
};

export default mdxComponents;
