import React from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import codeTheme from "prism-react-renderer/themes/duotoneLight";
import codeDarkTheme from "prism-react-renderer/themes/duotoneDark";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
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
  PublicAddress,
  QR,
  Table as RimbleTable,
  ToastMessage,
  UPortButton,
  Tooltip,
  EthAddress,
  theme
} from "rimble-ui";
import ConnectionBanner from "@rimble/connection-banner";
import NetworkIndicator from "@rimble/network-indicator";
import myTheme from "../../customTheme";
import docsTheme from "../../theme";

const Table = styled(RimbleTable)`
  & {
    display: block;
    width: 100%;
    overflow: auto;
    border-width: 0;
  }

  th,
  td {
    border: solid;
    border-width: 1px;
    border-color: inherit;
    padding: 0 1.5rem;
  }
`;

const CodeBox = styled(Box)`
  white-space: normal;
`;

const StyledPre = styled(Box)`
  &&& {
    padding: ${theme.space[0]}px;
    font-size: 13px;
  }
`;

const prismMap = {
  sh: "bash",
  shell: "bash"
};

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
  PublicAddress,
  QR,
  Table,
  ToastMessage,
  UPortButton,
  Tooltip,
  EthAddress,
  myTheme,
  theme,
  CodeBox
};

class Code extends React.Component {
  state = {
    showCode: true
  };

  toggleShowCode = e => {
    e.preventDefault();

    this.setState({ showCode: !this.state.showCode });
  };

  render() {
    const { is, children, lang } = this.props;

    // if no `is` default to inline code
    if (!is) {
      // console.log("!is", is);
      return (
        <Highlight
          {...defaultProps}
          code={children.trim()}
          language={"jsx"}
          theme={codeTheme}
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
    }

    // live component rendering
    if (is === "react-live") {
      // console.log("scope", localScope);
      return (
        <LiveProvider
          language={prismMap[lang] || lang}
          code={children.trim()}
          scope={localScope}
        >
          <ThemeProvider theme={docsTheme}>
            <CodeBox my={3} css={{}}>
              <Box mb={1}>
                <Box border={1} borderColor={"grey"} p={3}>
                  <LivePreview />
                  <LiveError />
                </Box>
                {this.state.showCode && <LiveEditor theme={codeDarkTheme} />}
              </Box>
              <Button.Text onClick={this.toggleShowCode}>
                {this.state.showCode ? `Hide Code` : `Edit Code`}
              </Button.Text>
            </CodeBox>
          </ThemeProvider>
        </LiveProvider>
      );
    }

    // console.log("default render", is === "react-live");
    // otherwise, use prism to render a code block
    return (
      <Highlight {...defaultProps} code={children.trim()} language={"jsx"}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <StyledPre as="pre" className={className} style={style} p={2}>
            <Box p={2}>
              {tokens.map((line, i) => (
                <div key="fake-key" {...getLineProps({ line, key: i })}>
                  <div>
                    {line.map((token, key) => (
                      <span key="fake-key" {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                </div>
              ))}
            </Box>
          </StyledPre>
        )}
      </Highlight>
    );
  }
}

export default Code;
