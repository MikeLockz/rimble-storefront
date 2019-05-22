import React from "react";
import SEO from "../components/seo";

// Import from old landing page
import styled from "styled-components";
import RimbleLink from "../components/landing/RimbleLink";
import ThemeProvider from "../components/landing/ThemeProvider";
import Typography from "../components/landing/typography";
import Container from "../components/landing/Container";
import CodeBlock from "../components/landing/CodeBlock";
import Heading from "../components/landing/Heading";
import Text from "../components/landing/Text";
import Hr from "../components/landing/Hr";
import { Flex, Box } from "../components/landing/Box";
import Nav from "../components/landing/nav";
import Header from "../components/landing/header";
import Footer from "../components/landing/footer";
import ReactSVG from "react-svg";
import { backgroundImage } from "styled-system";

import defaultTheme from "../theme";

const Masthead = styled(Flex)`
  position: relative;
  min-height: calc(100vmax / 7 * 2.5);
  width: 100%;
  margin-top: 64px;
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
    <SEO title="Rimble" />
    <React.Fragment>
      <Typography />

      <Nav />
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
            <Box my={5}>
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

              <Flex mt={4} width={1} flexDirection={["column", "row"]}>
                <Box flex={"1 1 auto"} width={[1, 1 / 3]} mr={5}>
                  <Flex my={3}>
                    <ReactSVG src="/static/svg/fig-1.svg" />
                  </Flex>
                  <Heading.h2 fontSize={[3, 4]} fontWeight={2}>
                    Flexible
                  </Heading.h2>
                  <Text.p>
                    Your tech stack and workflow are yours to decide. We impose
                    as few constraints as possible.{" "}
                  </Text.p>
                </Box>
                <Box flex={"1 1 auto"} width={[1, 1 / 3]} mr={5}>
                  <Flex my={3}>
                    <ReactSVG src="/static/svg/fig-2.svg" />
                  </Flex>
                  <Heading.h2 fontSize={[3, 4]} fontWeight={2}>
                    Research-driven
                  </Heading.h2>
                  <Text.p>
                    We are constantly talking to dApp designers, developers, and
                    users to understand common challenges and effective UI
                    patterns.{" "}
                  </Text.p>
                </Box>
                <Box flex={"1 1 auto"} width={[1, 1 / 3]}>
                  <Flex my={3}>
                    <ReactSVG src="/static/svg/fig-3.svg" />
                  </Flex>
                  <Heading.h2 fontSize={[3, 4]} fontWeight={2}>
                    Human
                  </Heading.h2>
                  <Text.p>
                    Blockchain is confusing. We are a dedicated team, invested
                    in being understandable and approachable.
                  </Text.p>
                </Box>
              </Flex>
            </Box>
          </Container>
        </section>
        <section>
          <Container>
            <Box my={5}>
              {/* body section */}
              <Heading.h1 id="getting-started" fontSize={[4, 5]}>
                Getting Started
              </Heading.h1>
              <Hr />
              <Heading.h2 fontSize={3} fontWeight={2}>
                Installation
              </Heading.h2>
              <CodeBlock
                code={"$ npm install --save rimble-ui styled-components"}
              />
              <Heading.h2 fontSize={3} fontWeight={2}>
                Usage
              </Heading.h2>
              <CodeBlock code={exampleCode} />
            </Box>
          </Container>
        </section>
        <section>
          <Container>
            <Box my={5}>
              <Heading.h1 fontSize={[4, 5]}>
                Made by ConsenSys Design
              </Heading.h1>
              <Hr />
              <Text.p>
                Rimble is created by{" "}
                <RimbleLink
                  href="//consensys.design/"
                  target="_blank"
                  rel="noopener"
                >
                  ConsenSys Design.
                </RimbleLink>{" "}
                Want to help us define the roadmap? Submit feedback or feature
                requests on the{" "}
                <RimbleLink
                  href="//github.com/ConsenSys/rimble-ui"
                  target="_blank"
                  rel="noopener"
                >
                  Rimble
                </RimbleLink>{" "}
                GitHub page.
              </Text.p>
            </Box>
          </Container>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  </ThemeProvider>
);

export default IndexPage;
