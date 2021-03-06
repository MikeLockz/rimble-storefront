import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import codeTheme from "prism-react-renderer/themes/duotoneLight";
import codeDarkTheme from "prism-react-renderer/themes/duotoneDark";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import CopyToClipboard from "../documentation/CopyToClipboard";

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
  EthAddress,
  ThemeProvider,
  BaseStyles,
  theme
} from "rimble-ui";
import ConnectionBanner from "@rimble/connection-banner";
import NetworkIndicator from "@rimble/network-indicator";

const localScope = {
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
  ConnectionBanner,
  NetworkIndicator,
  Text,
  QR,
  Table,
  ToastMessage,
  UPortButton,
  Tooltip,
  EthAddress,
  ThemeProvider,
  BaseStyles,
  theme,
  useState,
  useEffect
};

const CodeBox = styled(Box)`
  white-space: normal;
`;

const prismMap = {
  sh: "bash",
  shell: "bash"
};

const StyledLiveEditor = styled(LiveEditor)`
  &.fade-code {
    max-height: 100px;
    position: relative;

    &:after {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      content: "";
      height: 48px;
      background-size: cover;
      background-image: linear-gradient(
        to bottom,
        rgba(42, 39, 51, 0),
        rgba(42, 39, 51, 1)
      );
    }
  }
`;

const DefaultCodebox = ({ defaultProps, children, theme }) => {
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={"jsx"}
      theme={theme}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <code className={className} style={style}>
          {tokens.map(line =>
            line.map((token, key) => (
              <span key="fake-key" {...getTokenProps({ token, key })} />
            ))
          )}
        </code>
      )}
    </Highlight>
  );
};

const LiveEditorCodebox = ({
  children,
  prismMap,
  lang,
  scope,
  noInline,
  toggleShowCode,
  theme,
  showCode
}) => {
  return (
    <LiveProvider
      language={prismMap[lang] || lang}
      code={children.trim()}
      scope={scope}
      noInline={noInline}
    >
      <CodeBox my={4}>
        <Box>
          <Box bg={"blacks.0"} border={1} borderColor={"grey"} p={3}>
            <ThemeProvider theme={theme}>
              <BaseStyles>
                <LivePreview />
              </BaseStyles>
            </ThemeProvider>
            <LiveError />
          </Box>
          <StyledLiveEditor
            style={{ fontSize: "14px" }}
            theme={theme}
            className={showCode === false ? "fade-code" : ""}
          />
        </Box>
        <Flex justifyContent={"flex-end"} alignItems="center" t={1} mt={1}>
          <CopyToClipboard text={children.trim()}>
            {isCopied => (
              <Button.Outline
                size={"small"}
                mainColor="rgba(42, 39, 51, 1)"
                icon={isCopied ? "none" : "Assignment"}
              >
                {!isCopied ? (
                  "Copy code"
                ) : (
                  <Flex alignItems="center">
                    <Icon mr={1} name={"Check"} size="16px" />
                    Copied
                  </Flex>
                )}
              </Button.Outline>
            )}
          </CopyToClipboard>
          {showCode !== "undefined" && (
            <Button
              ml={2}
              size={"small"}
              mainColor="rgba(42, 39, 51, 1)"
              icon={"Code"}
              onClick={toggleShowCode}
              children={showCode ? `Hide code` : `Expand code`}
            />
          )}
        </Flex>
      </CodeBox>
    </LiveProvider>
  );
};

const SyntaxHighlightCodebox = ({ defaultProps, children }) => {
  return (
    <Highlight {...defaultProps} code={children.trim()} language={"jsx"}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {/* DO NOT DELETE THIS BOX! When ran in production the theme isn't applied and the padding is lost. TODO: Figure out why theme gets removed from prod build!!!!!!!!!!! */}
          <Box p={"10px"} overflow={"scroll"}>
            {tokens.map((line, i) => (
              <div key="fake-key" {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key="fake-key" {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Box>
        </pre>
      )}
    </Highlight>
  );
};

const Code = ({ is, children, lang, noInline, hideCode }) => {
  const [showCode, setShowCode] = useState(hideCode ? false : "undefined");

  const toggleShowCode = e => {
    e.preventDefault();

    setShowCode(!showCode);
  };

  // No attributes, show default codebox
  if (!is) {
    return (
      <DefaultCodebox
        theme={codeTheme}
        children={children}
        defaultProps={defaultProps}
      />
    );
  }

  // Show Live code editor
  if (is === "react-live") {
    return (
      <LiveEditorCodebox
        children={children}
        prismMap={prismMap}
        lang={lang}
        scope={localScope}
        noInline={noInline}
        toggleShowCode={toggleShowCode}
        showCode={showCode}
        theme={codeDarkTheme}
      />
    );
  }

  // Show Syntax highlighted codebox
  return (
    <SyntaxHighlightCodebox
      defaultProps={defaultProps}
      children={children}
      lang={lang}
    />
  );
};

export default Code;
