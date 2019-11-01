import React from "react";
import {
  Avatar,
  Flex,
  Loader,
  Button,
  Flash,
  Box,
  Image,
  Blockie,
  Card,
  Pill,
  Modal,
  Checkbox,
  Radio,
  Select,
  Form,
  Field,
  Heading,
  Textarea,
  Slider,
  Icon,
  Input,
  Link,
  Progress,
  MetaMaskButton,
  Text,
  QR,
  Table,
  ToastMessage,
  UPortButton,
  Tooltip,
  EthAddress
} from "rimble-ui";

import ConnectionBanner from "@rimble/connection-banner";
import NetworkIndicator from "@rimble/network-indicator";

// Import commonly used components here as shortcodes so they don't need to be imported into each mdx file
import PropsTable from "../documentation/PropsTable";
import DoDont from "../documentation/DoDont";

// Local versions of components used to render mdx
import Code from "./Code";
import SmartLink from "./SmartLink";
import { Table as StyledTable } from "./Table";
import RimbleGatsbyLink from "./../landing/RimbleGatsbyLink";
import ComponentCard from "./../documentation/ComponentCard";

/* eslint-disable react/display-name */
const mdxComponents = {
  h1: props => <Heading {...props} as="h1" fontSize={[5, 6]} my={3} pt={3} />,
  h2: props => <Heading {...props} as="h2" fontSize={[4, 5]} />,
  h3: props => <Heading {...props} as="h3" fontSize={3} my={3} pt={3} />,
  h4: props => <Heading {...props} as="h4" fontSize={2} my={3} pt={3} />,
  h5: props => <Heading {...props} as="h5" fontSize={1} my={3} pt={3} />,
  h6: props => <Heading {...props} as="h6" fontSize={0} my={3} pt={3} />,
  pre: props => {
    if (props.children.props && props.children.props.name === "code") {
      const mdxTagProps = props.children.props;
      const lang = "markup";

      return (
        <Code is="block" {...mdxTagProps} {...mdxTagProps.props} lang={lang} />
      );
    } else {
      return <pre {...props} />;
    }
  },
  code: props => <Code is="block" {...props} />,
  p: props => <Text as={"p"} my={3} {...props} />,
  inlineCode: Code,
  table: props => <StyledTable {...props} />,
  a: props => <SmartLink {...props} />,
  image: props => <Image my={3} {...props} />,
  ul: props => <Text as={"ul"} pl={3} m={0} {...props} />,
  li: props => <Text as={"li"} {...props} />,
  Avatar: props => <Avatar {...props} />,
  Blockie: props => <Blockie {...props} />,
  Box: props => <Box {...props} />,
  Button,
  Card: props => <Card {...props} />,
  Checkbox: props => <Checkbox {...props} />,
  EthAddress: props => <EthAddress {...props} />,
  Field: props => <Field {...props} />,
  Flash: props => <Flash {...props} />,
  Flex: props => <Flex {...props} />,
  Form: props => <Form {...props} />,
  Heading: props => <Heading {...props} />,
  Icon: props => <Icon {...props} />,
  Image: props => <Image {...props} />,
  Input: props => <Input {...props} />,
  Link: props => <Link {...props} />,
  Loader: props => <Loader {...props} />,
  MetaMaskButton: props => <MetaMaskButton {...props} />,
  Modal: props => <Modal {...props} />,
  Pill: props => <Pill {...props} />,
  Progress: props => <Progress {...props} />,
  QR: props => <QR {...props} />,
  Radio: props => <Radio {...props} />,
  Select: props => <Select {...props} />,
  Slider: props => <Slider {...props} />,
  Table: props => <Table {...props} />,
  Text: props => <Text {...props} />,
  Textarea: props => <Textarea {...props} />,
  ToastMessage: props => <ToastMessage {...props} />,
  Tooltip: props => <Tooltip {...props} />,
  UPortButton: props => <UPortButton {...props} />,
  ConnectionBanner,
  NetworkIndicator,

  PropsTable,
  DoDont,
  RimbleGatsbyLink,
  ComponentCard
};

export default mdxComponents;
