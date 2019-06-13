import React from "react";

// Import from old landing page
import styled from "styled-components";
import RimbleLink from "../components/landing/RimbleLink";
import RimbleGatsbyLink from "../components/landing/RimbleGatsbyLink";
import ThemeProvider from "../components/landing/ThemeProvider";
import Typography from "../components/landing/typography";
import Container from "../components/landing/Container";
import CodeBlock from "../components/landing/CodeBlock";
import Heading from "../components/landing/Heading";
import Text from "../components/landing/Text";
import Hr from "../components/landing/Hr";
import { Flex, Box } from "../components/landing/Box";
import Header from "../components/landing/header";
import Footer from "../components/landing/footer";
import ReactSVG from "react-svg";
import { backgroundImage } from "styled-system";
import Button from "../components/landing/Button";

import defaultTheme from "../theme";

const Masthead = styled(Flex)`
  position: relative;
  min-height: calc(100vmax / 7 * 2.5);
  width: 100%;

  padding: 2rem 0;

  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  background: #f2f4f7;
  overflow: hidden;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;
  ${backgroundImage};
`;

const exampleCode = `
import React, { Component } from 'react'

import { Button } from 'rimble-ui'

class Example extends Component {
  render () {
    return (
      <Button size={'medium'}>
        Click me!
      </Button>
    )
  }
}
`;

const IndexPage = () => (
  <ThemeProvider theme={defaultTheme}>
    <React.Fragment>
      <Typography />
      <main role="main">
        <Masthead
          backgroundImage={["none", "none", 'url("/static/svg/fig-bg.svg")']}
        >
          <Container>
            <Header />
          </Container>
        </Masthead>
        <section>
          <Container>
            <Box mt={6}>
              <Heading.h1 fontSize={[4, 5]}>Why Rimble?</Heading.h1>
              <Hr />
              <Text.p fontSize={[2, 3]}>
                Decentralized applications (dApps) require users to learn new
                patterns and they present new hurdles for designers and
                front-end developers. Rimble is here to make life easier for
                everyone. As an open source project, Rimble aims to create
                common dApp UX patterns, validated through user research, and
                built for developers.
              </Text.p>

              <Flex mt={6} width={1} flexDirection={["column", "row"]}>
                <Box flex={"1 1 auto"} width={[1, 1 / 3]} mr={5}>
                  <Flex flexDirection={"column"} justifyContent={"space-between"}>
                  <Flex my={3}>
                    <ReactSVG src="/static/svg/fig-1.svg" />
                  </Flex>
                  <Heading.h2 fontSize={[3, 4]} fontWeight={2}>
                    UI
                  </Heading.h2>
                  <Text.p mt={"1"}>
                    Clean, customisable building blocks for putting your interface together, including UI for Ethereum concepts.
                    {" "}
                  </Text.p>
                  <RimbleGatsbyLink to="/components/rimble-ui">
                    <Button
                      width={["100%", "auto"]} my={"3"}>
                      Read documentation
                    </Button>
                  </RimbleGatsbyLink>
                </Flex>
                </Box>
                <Box flex={"1 1 auto"} width={[1, 1 / 3]} mr={5}>
                  <Flex flexDirection={"column"} justifyContent={"space-between"}>
                  <Flex my={3}>
                    <ReactSVG src="/static/svg/fig-2.svg" />
                  </Flex>
                  <Heading.h2 fontSize={[3, 4]} fontWeight={2}>
                    Web3 components
                  </Heading.h2>
                  <Text.p mt={"1"}>
                    Drop-in components that solve an Ethereum UX problem out of the box. Configure some inputs and you're ready.
                    {" "}
                  </Text.p>
                  <RimbleGatsbyLink to="/components/web3-components">
                    <Button
                      width={["100%", "auto"]} my={"3"}>
                      Read documentation
                    </Button>
                  </RimbleGatsbyLink>
                </Flex>
                </Box>
                <Box flex={"1 1 auto"} width={[1, 1 / 3]}>
                  <Flex flexDirection={"column"} justifyContent={"space-between"}>
                  <Flex my={3}>
                    <ReactSVG src="/static/svg/fig-3.svg" />
                  </Flex>
                  <Heading.h2 fontSize={[3, 4]} fontWeight={2}>
                    Design patterns
                  </Heading.h2>
                  <Text.p mt={"1"}>
                    In-depth pieces on designing patterns and workflows that help your users navigate the UX challenges of Ethereum.
                  </Text.p>
                  <RimbleGatsbyLink to="/guides">
                  <Button
                    target='_blank' rel='noopener'
                    width={["100%", "auto"]} my={"3"}>
                    Read guides
                  </Button>
                  </RimbleGatsbyLink>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Container>
        </section>

        <section>
          <Container>
            <Box mt={6} mb={5}>
              <Heading.h1 fontSize={[4, 5]}>
                See Rimble in action
              </Heading.h1>
              <Hr />
              <Text.p>
                Take a look at our demo dApp. We prototype nearly everything we ship there first. Just remember it's our building site, so things might not always look finished. Hard hats are advised 👷‍♀️
              </Text.p>
                <Button
                  as="a"
                  href="https://rimble-app-demo.netlify.com/"
                  target="_blank"
                  rel="noopener"
                >
                  Try the demo
                </Button>
            </Box>
          </Container>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  </ThemeProvider>
);

export default IndexPage;
