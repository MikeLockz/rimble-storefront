import React from "react";
import RimbleGatsbyLink from "./landing/RimbleGatsbyLink";
import Ul from "./landing/Ul";
import Li from "./landing/Li";

const StaticSideNav = () => (
  <nav>
    <Ul>
      <Li>
        <RimbleGatsbyLink to={"/components"} activeClassName={"active"}>
          Components
        </RimbleGatsbyLink>
      </Li>
      <Ul>
        <Li>
          <RimbleGatsbyLink
            to={"/components/rimble-ui"}
            activeClassName={"active"}
          >
            Rimble UI
          </RimbleGatsbyLink>
        </Li>
        <Ul>
          <Li>Getting Started</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/theming"}
                activeClassName={"active"}
              >
                Theming
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/system-props"}
                activeClassName={"active"}
              >
                Styled-System Props
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          {/* <Li>Design</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/theme"}
                activeClassName={"active"}
              >
                Theme
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/colors"}
                activeClassName={"active"}
              >
                Colors
              </RimbleGatsbyLink>
            </Li>
            <Li>
            //   <RimbleGatsbyLink
            //     to={"/components/rimble-ui/typography"}
            //     activeClassName={"active"}
            //   >
            //     Typography
            //   </RimbleGatsbyLink>
            // </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/spacing"}
                activeClassName={"active"}
              >
                Spacing
              </RimbleGatsbyLink>
            </Li>
          </Ul> */}
          <Li>Ethereum UI</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Blockie"}
                activeClassName={"active"}
              >
                Blockie
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/EthAddress"}
                activeClassName={"active"}
              >
                Eth Address
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/MetaMaskButton"}
                activeClassName={"active"}
              >
                MetaMask Button
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/PublicAddress"}
                activeClassName={"active"}
              >
                Public Address
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/QR"}
                activeClassName={"active"}
              >
                QR Code
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/UPortButton"}
                activeClassName={"active"}
              >
                UPort Button
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Containers</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Box"}
                activeClassName={"active"}
              >
                Box
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Card"}
                activeClassName={"active"}
              >
                Card
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Flex"}
                activeClassName={"active"}
              >
                Flex
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/ThemeProvider"}
                activeClassName={"active"}
              >
                Theme Provider
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Forms</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Checkbox"}
                activeClassName={"active"}
              >
                Checkbox
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Field"}
                activeClassName={"active"}
              >
                Field
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Form"}
                activeClassName={"active"}
              >
                Form
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Input"}
                activeClassName={"active"}
              >
                Input
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Radio"}
                activeClassName={"active"}
              >
                Radio
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Select"}
                activeClassName={"active"}
              >
                Select
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Slider"}
                activeClassName={"active"}
              >
                Slider
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Textarea"}
                activeClassName={"active"}
              >
                Text Area
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Feedback</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Loader"}
                activeClassName={"active"}
              >
                Loader
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Pill"}
                activeClassName={"active"}
              >
                Pill
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Progress"}
                activeClassName={"active"}
              >
                Progress
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Actions</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Button"}
                activeClassName={"active"}
              >
                Button
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Link"}
                activeClassName={"active"}
              >
                Link
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Alerts</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Flash"}
                activeClassName={"active"}
              >
                Flash
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Modal"}
                activeClassName={"active"}
              >
                Modal
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/ToastMessage"}
                activeClassName={"active"}
              >
                ToastMessage
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/ToastMessageProvider"}
                activeClassName={"active"}
              >
                ToastMessage Provider
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Information</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Tooltip"}
                activeClassName={"active"}
              >
                Tooltip
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Data</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Table"}
                activeClassName={"active"}
              >
                Table
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Copy</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Heading"}
                activeClassName={"active"}
              >
                Heading
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Text"}
                activeClassName={"active"}
              >
                Text
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Image</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Avatar"}
                activeClassName={"active"}
              >
                Avatar
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Icon"}
                activeClassName={"active"}
              >
                Icon
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Image"}
                activeClassName={"active"}
              >
                Image
              </RimbleGatsbyLink>
            </Li>
          </Ul>
        </Ul>
        <Li>
          <RimbleGatsbyLink
            to={"/components/web3-components"}
            activeClassName={"active"}
          >
            Web3 Components
          </RimbleGatsbyLink>
        </Li>
        <Ul>
          <Li>Onboarding</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/web3-components/NetworkIndicator"}
                activeClassName={"active"}
              >
                Network Indicator
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/web3-components/ConnectionBanner"}
                activeClassName={"active"}
              >
                Connection Banner
              </RimbleGatsbyLink>
            </Li>
          </Ul>
        </Ul>
      </Ul>
      <Li>
        <RimbleGatsbyLink to={"/guides"} activeClassName={"active"}>
          Guides
        </RimbleGatsbyLink>
      </Li>
      <Ul>
        <Li>
          <RimbleGatsbyLink to={"/guides/ux"} activeClassName={"active"}>
            dApp patterns
          </RimbleGatsbyLink>
        </Li>
        <Ul>
          <Li>Connecting to a dApp</Li>
          {/*<Li>
            <RimbleGatsbyLink
              to={"/guides/ux/transaction-states"}
              activeClassName={"active"}
            >
              Transaction States
            </RimbleGatsbyLink>
          </Li>*/}
          {/*<Li>
            <RimbleGatsbyLink
              to={"/guides/ux/connect-a-wallet-intro"}
              activeClassName={"active"}
            >
              1. Introduction
            </RimbleGatsbyLink>
          </Li>*/}
          <Li>
            <RimbleGatsbyLink
              to={"/guides/ux/connect-a-wallet-conditions"}
              activeClassName={"active"}
            >
              1. Can they connect?
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink
              to={"/guides/ux/connect-a-wallet-before"}
              activeClassName={"active"}
            >
              2. Before they connect
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink
              to={"/guides/ux/connect-a-wallet-metamask"}
              activeClassName={"active"}
            >
              3. Help with MetaMask
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink
              to={"/guides/ux/connect-a-wallet-success"}
              activeClassName={"active"}
            >
              4. Confim success
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink
              to={"/guides/ux/connect-a-wallet-low-funds"}
              activeClassName={"active"}
            >
              5. No ETH, no problem
            </RimbleGatsbyLink>
          </Li>
        </Ul>
        <Li>
          <RimbleGatsbyLink to={"guides/content"} activeClassName={"active"}>
            dApp Content
          </RimbleGatsbyLink>
        </Li>
      </Ul>
      {/*<Ul>

          <Li>
            <RimbleGatsbyLink
              to={"/guides/content/crafting-tone"}
              activeClassName={"active"}
            >
              Crafting a tone of voice
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink
              to={"/guides/content/blockchain-vocab"}
              activeClassName={"active"}
            >
              Blockchain vocab
            </RimbleGatsbyLink>
          </Li>

          <Li>
            <RimbleGatsbyLink
              to={"/guides/content/writing-for-products"}
              activeClassName={"active"}
            >
              Writing for products
            </RimbleGatsbyLink>
          </Li>

        </Ul>*/}
    </Ul>
  </nav>
);

export default StaticSideNav;
