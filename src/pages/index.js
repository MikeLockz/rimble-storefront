import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import {
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat
} from "styled-system";
import {
  theme,
  BaseStyles,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Icon,
  Link,
  Image,
  Tooltip
} from "rimble-ui";

// import fonts
import "typeface-source-sans-pro";

// import from old landing page
import GlobalStyles from "../components/landing/GlobalStyles";
import Container from "../components/landing/Container";
import Hr from "../components/landing/Hr";
import Footer from "../components/landing/footer";

// import svg assets data:uri
import StorefrontCardGuides from "../../static/images/storefront-card-guides.svg";
import StorefrontCardComponents from "../../static/images/storefront-card-components.svg";
import StorefrontCardFigma from "../../static/images/storefront-card-figma.svg";
import RimbleLogotype from "../../static/rimble-blurple.svg";
import GitHubLogo from "../../static/images/github-mark-primary.svg";
import FigureBg from "../../static/static/svg/fig-bg.svg";
import RimblePatternBackground from "../../static/images/rimble-pattern-background.svg";

// import image assets as data:uri
import connectingToAdApp from "../../static/images/Connecting-to-a-dApp.png";
import transactionStates from "../../static/images/Transaction-states.png";

// import common components
import HoverCard from "./../components/global/HoverCard";

const BgImageBox = styled(Box)`
  ${background}
  ${backgroundImage}
  ${backgroundSize}
  ${backgroundPosition}
  ${backgroundRepeat}
`;

const Header = () => (
  <Box as={"header"} mx={[3, 4]}>
    <Image
      src={RimbleLogotype}
      alt="Rimble logotype"
      display={"block"}
      height={["2rem", "4rem"]}
      mb={4}
      ml={["-1rem", "-2.5rem"]}
    />
    <Heading as={"h1"} fontSize="0px">
      Rimble
    </Heading>
    <Text as={"p"} fontSize={[3, 4]} mt={3} mb={[4, 5]} pr={[0, 6]}>
      Rimble is an open-source library of React components and guides to help
      you make dApps everyone can use.
    </Text>
  </Box>
);

const Masthead = () => (
  <BgImageBox
    display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
    width={1}
    pt={[5, 6]}
    pb={"8rem"}
    bg={"#f2f4f7"}
    backgroundImage={["none", "none", `url(${FigureBg})`]}
    backgroundPosition={"bottom right"}
    backgroundRepeat={"no-repeat"}
    backgroundSize={"contain"}
  >
    <Container>
      <Header />
    </Container>
  </BgImageBox>
);

const OfferingCard = ({ children, src, ...rest }) => (
  <HoverCard display={"flex"} flexDirection={"column"} height={"100%"} p={0}>
    <Image width={1} src={src} />
    <Flex
      flex="1 1 auto"
      flexDirection="column"
      color={"dark-gray"}
      px={4}
      py={3}
      borderTop={1}
      borderWidth={3}
      borderColor="primary-light"
    >
      {children}
    </Flex>
  </HoverCard>
);

const RimbleGuidesCard = ({ title, url }) => (
  <HoverCard
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
  </HoverCard>
);

const RimbleGuidesSection = () => (
  <BgImageBox
    width="100%"
    mt={"5"}
    pt={4}
    pb={5}
    bg={"#f2f4f7"}
    backgroundImage={`url(${RimblePatternBackground})`}
    backgroundPosition={"center top"}
    backgroundRepeat={"no-repeat"}
  >
    <Container>
      <Heading as={"h2"} fontSize={[3, 5]} fontWeight={3} my={3}>
        Rimble Guides
      </Heading>
      <Text as={"p"} mb={4}>
        Step by step guides for building friendly, accessible dapps.
      </Text>
      <Hr />
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
    </Container>
  </BgImageBox>
);

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <BaseStyles>
      <GlobalStyles />
      <main role="main">
        <Masthead />

        <section>
          <Container>
            <Flex flexDirection={["column", "row"]} mt={"-7rem"}>
              <Box flex={"1"} width={[1, 0]} mb={3} mr={[0, 3]}>
                <OfferingCard src={StorefrontCardComponents}>
                  <Flex alignItems="center" my={3}>
                    <Heading as="h2" fontSize={[3, 3, 4]}>
                      Components
                    </Heading>
                    <Tooltip placement="top" message="Rimble UI on GitHub">
                      <Link
                        href="https://github.com/ConsenSys/rimble-ui"
                        target="_blank"
                        title="To Rimble UI on Github"
                        display="flex"
                        size="2rem"
                        ml={3}
                      >
                        <Image
                          src={GitHubLogo}
                          aria-label="Link to Rimble UI on Github"
                        />
                      </Link>
                    </Tooltip>
                  </Flex>
                  <Text mb={3}>
                    Building blocks for putting your dApp interface together.
                  </Text>
                  <Link
                    forwardedAs={GatsbyLink}
                    to="/components"
                    title="To Rimble components"
                    fontSize={2}
                    mt="auto"
                    mb={0}
                    py={3}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    Documentation
                    <Icon name="ArrowForward" size="1rem" ml={2} />
                  </Link>
                </OfferingCard>
              </Box>

              <Box flex={"1"} width={[1, 0]} mb={3} mr={[0, 3]}>
                <OfferingCard src={StorefrontCardGuides}>
                  <Heading as="h2" fontSize={4} my={3}>
                    Guides
                  </Heading>
                  <Text mb={3}>
                    Research-led guides on overcoming dApp UX challenges.
                  </Text>
                  <Link
                    forwardedAs={GatsbyLink}
                    to="/guides"
                    title="To Rimble Guides"
                    fontSize={2}
                    mt="auto"
                    mb={0}
                    py={3}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    Guides
                    <Icon name="ArrowForward" size="1rem" ml={2} />
                  </Link>
                </OfferingCard>
              </Box>

              <Box flex={"1"} width={[1, 0]} mb={3}>
                <OfferingCard src={StorefrontCardFigma}>
                  <Heading as="h2" fontSize={4} my={3}>
                    Design kit
                  </Heading>
                  <Text mb={3}>
                    Sketch, design and prototype using Rimble components in
                    Figma.
                  </Text>
                  <Link
                    href="https://www.figma.com/file/XB2ZoWIHTBnC4Pp7luierE/WIP-Rimble-design-system?node-id=452%3A5"
                    title="To the Rimble Figma kit"
                    target="_blank"
                    fontSize={2}
                    mt="auto"
                    mb={0}
                    py={3}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    Figma kit
                    <Icon name="Launch" size="1rem" ml={2} />
                  </Link>
                </OfferingCard>
              </Box>
            </Flex>
          </Container>
        </section>

        <section>
          <Container>
            <Box mt={5}>
              <Heading as={"h2"} fontSize={[4, 5]}>
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
            </Box>
          </Container>
        </section>

        <section>
          <RimbleGuidesSection />
        </section>

        <section>
          <Container>
            <Box mt={5} mb={5}>
              <Heading as={"h2"} fontSize={[3, 5]}>
                See Rimble in action
              </Heading>
              <Text as={"p"} mb={4}>
                Take a look at our demo dapps.
              </Text>
              <Hr />
              <Text as={"p"} mb={4}>
                {" "}
                Our demo dapps are our building sites, so things might not
                always look finished. Hard hats are advised
                <span role="img" aria-label="hard hat emoji">
                  {" "}
                  👷‍♀️
                </span>
              </Text>

              <Flex
                flexDirection={["column-reverse", "row"]}
                alignItems="center"
                mb={4}
              >
                <Flex flexDirection="column">
                  <Box mr={[0, 3]}>
                    <Heading as={"h3"} fontSize={[2, 4]} mb={3}>
                      Connection demo
                    </Heading>
                    <Text mb={3}>
                      Our connection demo shows methods for helping a user
                      connect to your dApp and start transacting.
                    </Text>
                    <Link
                      href="https://rimble-app-demo.netlify.com/"
                      target="_blank"
                      rel="noopener"
                      title="Rimble's connection demo dapp"
                    >
                      <Flex alignItems="center">
                        dApp connection demo
                        <Icon name="Launch" size={"1em"} ml={2} />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
                <Box mb={[4, 0]}>
                  <Image src={connectingToAdApp} />
                </Box>
              </Flex>

              <Flex flexDirection={["column", "row"]} alignItems="center">
                <Box mr={[0, 3]} mb={[4, 0]}>
                  <Image src={transactionStates} />
                </Box>
                <Flex flexDirection="column">
                  <Box>
                    <Heading as={"h3"} fontSize={[2, 4]} mb={3}>
                      Transaction demo
                    </Heading>
                    <Text mb={3}>
                      Our transaction states demo, presented at Devcon V, shows
                      methods for updating a user on the status of their
                      transaction.
                    </Text>
                    <Link
                      href="https://rimble-devcon-demo.netlify.com/"
                      target="_blank"
                      rel="noopener"
                      title="Rimble's transaction states Devcon V demo"
                    >
                      <Flex alignItems="center">
                        Transaction states demo
                        <Icon name="Launch" size={"1em"} ml={2} />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Container>
        </section>
      </main>
      <Footer />
    </BaseStyles>
  </ThemeProvider>
);

export default IndexPage;
