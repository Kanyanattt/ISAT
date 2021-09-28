import React, { Component } from 'react'
import './css/sider.css';
import './css/background.css';
import { Row, Col, Layout } from 'antd';
import Logo from './Icon/Logo.svg';
import one from './Icon/3.svg';
import two from './Icon/1.svg';
import three from './Icon/2.svg';
import { Link } from "react-router-dom";
const { Sider } = Layout;

class Sidetap extends Component {
    render() {
        return (
            <div className="background">
            <Layout>
                <Sider className="sidetab">
                    <div className="image">
                        <img src={Logo}
                        />
                    </div>
                    {/* <Link to="/"> */}
                        <Row>
                            <Col className="boxmenu">
                                <img className="iconmenu" src={one} />
                                <div className="textone font"
                                >แดชบอร์ด</div>
                            </Col>
                        </Row>
                    {/* </Link> */}
                    {/* <Link to="/page2"> */}
                        <Row>
                            <Col className="boxmenu">
                                <img className="iconmenu" src={two} />
                                <div className="texttwo font">การประเมินผลสัมฤทธิ์</div>
                            </Col>
                        </Row>
                    {/* </Link> */}
                    {/* <Link to="/page15"> */}
                        <Row>
                            <Col className="boxmenupic">
                                <img className="iconmenu" src={three} />
                                <div className="textpic font">คู่มือการประเมิน</div>
                            </Col>
                        </Row>
                    {/* </Link> */}
                </Sider>
            </Layout>
             </div>
        )
    }
}
export default Sidetap
    ;