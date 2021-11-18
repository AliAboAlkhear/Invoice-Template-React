import "./App.css";
import "antd/dist/antd.css";

import { Row, Col, Card, Typography, Layout, Divider, Skeleton } from "antd";
const { Title, Text } = Typography;
const { Content, Footer } = Layout;

const RowStyle = {
  borderTop: "1px",
  borderTopStyle: "solid",
  width: "90%",
  marginTop: "10px",
};

const TableRowStyle = {
  borderBottom: "1px",
  borderBottomStyle: "solid",
  width: "90%",
  marginTop: "7px",
};

const TableRowTotal = {
  borderBottom: "2px",
  borderBottomStyle: "solid",
  width: "90%",
  marginTop: "7px",
  fontWeight: "bold",
}

function App() {
  return (
    <Content className="content">
      <Row>
        <Col span={10}>
          <Title className="Danhop">Danhop Lotlight</Title>

          <Title level={3} className="job">
            WEBSITE DEVELOPER
          </Title>

          <div className="info">
            <Row>
              <Col span={6} style={{ fontWeight: "bold" }}>
                Date
              </Col>
              <Col span={2}> : </Col>
              <Col span={6} style={TableRowStyle} >June 18,2020</Col>
            </Row>
            <Row>
              <Col span={6} style={{ fontWeight: "bold" }}>
                Invoice No
              </Col>
              <Col span={2}> : </Col>
              <Col span={6} style={TableRowStyle}>1301</Col>
            </Row>
          </div>
          <div className="total-card">
            <Card
              className="card"
              style={{ marginLeft: "65px" }}
              title="Grand Total"
            >
              $840
            </Card>
          </div>
        </Col>

        <Col span={14}>
          <div
            style={{
              marginTop: "40px",
            }}
          >
            <Row>
              <Skeleton avatar paragraph={{ rows: 1 }} />
              <br />
              <Title level={3}>Invoice To:</Title>
            </Row>
            <Row style={RowStyle}>
              <Col style={{ fontWeight: "bold" }} span="6">
                Name
              </Col>
              <Col span="2"> : </Col>
              <Col span="12">Ali Abo Alkhear</Col>
            </Row>

            <Row style={RowStyle}>
              <Col style={{ fontWeight: "bold" }} span="6">
                Phone Number
              </Col>
              <Col span="2"> : </Col>
              <Col span="12">+88123456789</Col>
            </Row>
            <Row style={RowStyle}>
              <Col style={{ fontWeight: "bold" }} span="6">
                Email
              </Col>
              <Col span="2"> : </Col>
              <Col span="12">aliali@gmail.com</Col>
            </Row>
            <Row style={RowStyle}>
              <Col style={{ fontWeight: "bold" }} span="6">
                Address
              </Col>
              <Col span="2"> : </Col>
              <Col span="12">
                Ali Abo Alkhear Ali Abo Alkhear Ali Abo Alkhear Ali Abo Alkhear
              </Col>
            </Row>
          </div>

          <div
            style={{
              marginTop: "30px",
            }}
          >
            <Row>
              <Title level={3}>PAYMENT METHOD:</Title>
            </Row>
            <Row style={RowStyle}>
              <Col style={{ fontWeight: "bold" }} span="6">
                BankName
              </Col>
              <Col span="2"> : </Col>
              <Col span="12">Palestine Bank</Col>
            </Row>
            <Row style={RowStyle}>
              <Col style={{ fontWeight: "bold" }} span="6">
                Account Number
              </Col>
              <Col span="2"> : </Col>
              <Col span="12">859601254</Col>
            </Row>
            <Row style={RowStyle}>
              <Col style={{ fontWeight: "bold" }} span="6">
                Account Holder
              </Col>
              <Col span="2"> : </Col>
              <Col span="12">Oliver Queen</Col>
            </Row>
            <Row style={RowStyle}>
              <Col style={{ fontWeight: "bold" }} span="6">
                Bank Code
              </Col>
              <Col span="2"> : </Col>
              <Col span="12">PLM3035</Col>
            </Row>
          </div>

          <div
            style={{
              marginTop: "30px",
            }}
          >
            <Row>
              <Title level={3}>TERM & CONDITIONS:</Title>
            </Row>

            <Row style={RowStyle}>
              - simply dummy text of the printing and typesetting industry.
              Lorem Ipsum simply dummy text of the printing and typesetting
            </Row>
            <Row style={RowStyle}>
              - simply dummy text of the printing and typesetting industry.
              Lorem Ipsum
            </Row>
            <Row style={RowStyle}>
              - simply dummy text of the printing and typesetting industry.
              Lorem Ipsum
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="table-info">
          <Card
            style={{
              width: "90%",
              justifyContent: "center",
              marginLeft: "65px",
            }}
            title="ITEM/SERVICE DETALIS "
          >
            <Row>
              <Col
                style={{
                  width: "60%",
                }}
                span={8}
              >
                <Row
                  style={TableRowTotal}
                >
                  DESCIPTION
                </Row>
                <Row style={TableRowStyle}>item/service description here</Row>
                <Row style={TableRowStyle}>item/service description here</Row>
                <Row style={TableRowStyle}>item/service description here</Row>
                <Row style={TableRowStyle}>item/service description here</Row>
              </Col>
              <Col offset={1} span={2}>
                <Row
                  style={TableRowTotal}
                >
                  QTY
                </Row>
                <Row style={TableRowStyle}>2</Row>
                <Row style={TableRowStyle}>2</Row>
                <Row style={TableRowStyle}>2</Row>
                <Row style={TableRowStyle}>2</Row>
              </Col>
              <Col offset={1} span={4}>
                <Row
                  style={TableRowTotal}
                >
                  UNIT PRICE
                </Row>
                <Row style={TableRowStyle}>20$</Row>
                <Row style={TableRowStyle}>30$</Row>
                <Row style={TableRowStyle}>40$</Row>
                <Row style={TableRowStyle}>50%</Row>
              </Col>
              <Col offset={1} span={4}>
                <Row
                  style={{
                    borderBottom: "2px",
                    borderBottomStyle: "solid",
                    width: "90%",
                    marginTop: "7px",
                    fontWeight: "bold",
                  }}
                >
                  AMOUNT
                </Row>
                <Row style={TableRowStyle}>200$</Row>
                <Row style={TableRowStyle}>300$</Row>
                <Row style={TableRowStyle}>400$</Row>
                <Row style={TableRowStyle}>600$</Row>
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  width: "60%",
                  paddingTop: "10%",
                }}
                span={12}
              >
                <Text strong>
                  Payment is required by the latest 30 June 2020 at 12pm
                </Text>
                <br />
                <Text>Thank you for your order</Text>
              </Col>
              <Col span={4}>
                <Row
                  style={{
                    borderBottom: "2px",
                    borderBottomStyle: "solid",
                    width: "90%",
                    marginTop: "20px",
                    fontWeight: "bold",
                  }}
                >
                  SUB-TOTAL
                </Row>
                <Row
                  style={TableRowTotal}
                >
                  TAX(10%)
                </Row>
                <Row
                  style={TableRowTotal}
                >
                  DISCOUNT(5%)
                </Row>
                <Row
                  style={TableRowTotal}
                >
                  GRAND TOTAL
                </Row>
              </Col>
              <Col offset={1} span={4}>
                <Row
                  style={{
                    borderBottom: "2px",
                    borderBottomStyle: "solid",
                    width: "90%",
                    marginTop: "20px",
                    fontWeight: "bold",
                  }}
                >
                  800$
                </Row>
                <Row
                  style={TableRowTotal}
                >
                  30$
                </Row>
                <Row
                  style={TableRowTotal}
                >
                  400$
                </Row>
                <Row
                  style={TableRowTotal}
                >
                  600$
                </Row>
              </Col>
            </Row>
          </Card>
        </div>
      </Row>

      <Footer className="footer-style">
        <Text className="footer-inv">INVOICE</Text>
        <Text>
          <Text strong>Phone:</Text>
          <Text>+88123456789</Text>
          <Divider type="vertical" />
          <Text strong>Email:</Text>
          <Text>aliali@gmail.com</Text>
        </Text>
        <br />

        <Text>Proesent viera street no 27, West Nulla city, Demo 5100</Text>

        <br />
        <Text>www.yourbrand.com</Text>
      </Footer>
    </Content>
  );
}

export default App;
