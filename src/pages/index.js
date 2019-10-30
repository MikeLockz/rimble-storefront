import React from "react";
import ReactSVG from "react-svg";
import { Link as GatsbyLink } from "gatsby";
import { Box, Flex, Card, Text, Heading, Button, Icon } from "rimble-ui";
import { backgroundImage } from "styled-system";
import styled, { ThemeProvider } from "styled-components";

// Import from old landing page
import Typography from "../components/landing/typography";
import Container from "../components/landing/Container";
import Hr from "../components/landing/Hr";
import Footer from "../components/landing/footer";
import defaultTheme from "../theme";

const Header = () => (
  <header>
    <Heading as={"h1"} fontSize={[5, 7]} pr={[3, 6]}>
      Hi, we're Rimble
    </Heading>
    <Text as={"p"} fontSize={4} mt={3} mb={5} pr={[3, 6]}>
      An open-source library of React components and guides to help you make
      dApps everyone can use.
    </Text>
    <AnimationButtonHover>
      <Button
        as={GatsbyLink}
        to={"/components"}
        width={["100%", "auto"]}
        mr={[0, 3]}
        mb={[3, 0]}
      >
        View library
      </Button>
    </AnimationButtonHover>
  </header>
);

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

const AnimationButtonHover = styled.div`
  & {
    transition: transform 0.15s ease;
  }
  &:hover {
    transform: translateY(-1px);
  }
`;

const StyledCard = styled(Card)`
  & {
    text-decoration: none;
    color: ${props => props.theme.colors["dark-gray"]};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.15s ease;
  }
  &:hover {
    color: ${props => props.theme.colors["primary"]};
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const RimbleGuidesCard = ({ title, url }) => (
  <StyledCard
    forwardedAs={GatsbyLink}
    to={url}
    display={"flex"}
    alignItems={"center"}
    justifyContent={"space-between"}
    mt={3}
    p={[3, 4]}
  >
    <Heading as={"h3"} fontSize={[1, 3]}>
      {title}
    </Heading>
    <Button size={"small"}>Read</Button>
  </StyledCard>
);

const RimbleGuidesSection = () => (
  <Container as={"section"}>
    <Box mt={"5"}>
      <Heading as={"h2"} fontSize={[3, 4]} fontWeight={2} my={3}>
        Rimble Guides
      </Heading>
      <Text as={"p"} mb={4}>
        Step by step guides for building friendly, accessible dapps.
      </Text>
      <RimbleGuidesCard
        title={"Best practices for connecting to a dApp"}
        url={"/guides/ux/connect-a-wallet-conditions"}
      />
      <RimbleGuidesCard
        title={"Writing for Products"}
        url={"/guides/content/writing-for-products"}
      />
      <RimbleGuidesCard
        title={"Conversational Design"}
        url={"/guides/content/conversational-design"}
      />
    </Box>
  </Container>
);

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
            <Box mt={5}>
              <Heading as={"h1"} fontSize={[4, 5]}>
                Why Rimble?
              </Heading>
              <Hr />
              <Text as={"p"} fontSize={[2, 3]}>
                Decentralized applications (dApps) require users to learn new
                patterns and they present new hurdles for designers and
                front-end developers. Rimble is here to make life easier for
                everyone. As an open source project, Rimble aims to create
                common dapp UX patterns, validated through user research, and
                built for developers.
              </Text>

              <Flex flexDirection={["column", "row"]} width={1} mt={5}>
                <Box flex={"1 1 auto"} width={[1, 1 / 3]} mr={5} my={4}>
                  <Box as={ReactSVG} src={"/static/svg/fig-1.svg"} mb={4} />
                  <Heading as={"h2"} fontSize={[3, 4]} fontWeight={2} my={3}>
                    UI
                  </Heading>
                  <Text as={"p"}>
                    Clean, customisable building blocks for putting your
                    interface together, including UI for Ethereum concepts.
                  </Text>
                  <AnimationButtonHover>
                    <Button
                      as={GatsbyLink}
                      to={"/components/rimble-ui"}
                      my={"3"}
                    >
                      Read documentation
                    </Button>
                  </AnimationButtonHover>
                </Box>
                <Box flex={"1 1 auto"} width={[1, 1 / 3]} mr={5} my={4}>
                  <Box as={ReactSVG} src={"/static/svg/fig-2.svg"} mb={4} />
                  <Heading as={"h2"} fontSize={[3, 4]} fontWeight={2} my={3}>
                    Web3 components
                  </Heading>
                  <Text as={"p"}>
                    Drop-in components that solve an Ethereum UX problem out of
                    the box. Configure some inputs and you're ready.
                  </Text>
                  <AnimationButtonHover>
                    <Button
                      as={GatsbyLink}
                      to={"/components/web3-components"}
                      my={"3"}
                    >
                      Read documentation
                    </Button>
                  </AnimationButtonHover>
                </Box>
                <Box flex={"1 1 auto"} width={[1, 1 / 3]} my={4}>
                  <Box as={ReactSVG} src={"/static/svg/fig-3.svg"} mb={4} />
                  <Heading as={"h2"} fontSize={[3, 4]} fontWeight={2} my={3}>
                    Design patterns
                  </Heading>
                  <Text as={"p"}>
                    In-depth pieces on designing patterns and workflows that
                    help your users navigate the UX challenges of Ethereum.
                  </Text>
                  <AnimationButtonHover>
                    <Button as={GatsbyLink} to={"/guides"} my={"3"}>
                      Read documentation
                    </Button>
                  </AnimationButtonHover>
                </Box>
              </Flex>
            </Box>
          </Container>
        </section>
        <RimbleGuidesSection />
        <section>
          <Container>
            <Box mt={6} mb={5}>
              <Heading as={"h1"} fontSize={[4, 5]}>
                See Rimble in action
              </Heading>
              <Hr />
              <Text as={"p"} mb={4}>
                Take a look at our demo dapps. We prototype nearly everything we
                ship there first. Just remember these are our building sites, so
                things might not always look finished. Hard hats are advised.
                <span role="img" aria-label="hard hat emoji">
                  {" "}
                  👷‍♀️
                </span>
              </Text>
              <Heading as="h3" fontSize={3} mb={3}>
                Try our demos
              </Heading>
              <Flex alignItems="center">
                <AnimationButtonHover>
                  <Button
                    as="a"
                    href="https://rimble-app-demo.netlify.com/"
                    target="_blank"
                    rel="noopener"
                    title="Rimble's transaction demo dapp"
                  >
                    <Flex alignItems="center">
                      Transaction demo
                      <Icon name="Launch" ml={2} />
                    </Flex>
                  </Button>
                </AnimationButtonHover>
                <Text mx={3}>and</Text>
                <AnimationButtonHover>
                  <Button
                    as="a"
                    href="https://rimble-devcon-demo.netlify.com/"
                    target="_blank"
                    rel="noopener"
                    title="Rimble's DevCon V demo"
                  >
                    <Flex alignItems="center">
                      DevCon V demo
                      <Icon name="Launch" ml={2} />
                    </Flex>
                  </Button>
                </AnimationButtonHover>
              </Flex>
            </Box>
          </Container>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  </ThemeProvider>
);

export default IndexPage;
