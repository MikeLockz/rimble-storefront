import React from "react";
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
  Link as RimbleLink,
  Text,
  PublicAddress,
  QR,
  Table,
  ToastMessage,
  UPortButton,
  Tooltip,
  EthAddress
} from "rimble-ui";
import ConnectionBanner from "@rimble/connection-banner";
import NetworkIndicator from "@rimble/network-indicator";
import defaultTheme from "../../theme";
import myTheme from "../../customTheme";

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
  myTheme
};

const prismMap = {
  sh: "bash",
  shell: "bash"
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
          <ThemeProvider>
            <Box my={3}>
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
            </Box>
          </ThemeProvider>
        </LiveProvider>
      );
    }

    // console.log("default render", is === "react-live");
    // otherwise, use prism to render a code block
    return (
      <Highlight {...defaultProps} code={children.trim()} language={"jsx"}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key="fake-key" {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key="fake-key" {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  }
}

export default Code;
