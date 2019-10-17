import React, { useState } from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import codeTheme from "prism-react-renderer/themes/duotoneLight";
import codeDarkTheme from "prism-react-renderer/themes/duotoneDark";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { useMDXComponents } from "@mdx-js/react";
// import { Flex, Button, Box } from "rimble-ui";
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
  ThemeProvider,
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
  ThemeProvider,
  MetaMaskButton,
  ConnectionBanner,
  NetworkIndicator,
  Text,
  QR,
  Table,
  ToastMessage,
  UPortButton,
  Tooltip,
  EthAddress
};

const CodeBox = styled(Box)`
  white-space: normal;
`;

const prismMap = {
  sh: "bash",
  shell: "bash"
};

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
  showCode,
  theme
}) => {
  return (
    <LiveProvider
      language={prismMap[lang] || lang}
      code={children.trim()}
      scope={scope}
      noInline={noInline}
    >
      <CodeBox my={3}>
        <Box>
          <Box bg={"blacks.0"} border={1} borderColor={"grey"} p={3}>
            <LivePreview />
            <LiveError />
          </Box>
          {showCode && (
            <LiveEditor style={{ fontSize: "16px" }} theme={theme} />
          )}
        </Box>
        <Flex justifyContent={"flex-end"} mt={1}>
          <Button.Text
            size={"small"}
            icon={"Code"}
            onClick={toggleShowCode}
            children={showCode ? `Hide Code` : `Edit Code`}
          />
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
          {/* DO NOT DELETE THIS BOX! When ran in production the theme isn't applied and the padding is lost. TODO: Figure out why theme gets removed from prod build */}
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

const Code = ({ is, children, lang, noInline }) => {
  const [showCode, setShowCode] = useState(true);

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
