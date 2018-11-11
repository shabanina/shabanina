import React, { Component } from 'react';
import { CardLink } from 'reactstrap';

class AppFooter extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer-partners">
                    <div className="footer-wrapper">
                        <div className="partners">
                            <img src="img/footer/ft-gaon-chart.png" alt="" />
                            <img src="img/footer/ft-hanteo.png" alt="" />
                            <img src="img/footer/ft-bighit.png" alt="" />
                            <img src="img/footer/ft-kcp.png" alt="" />
                            <img src="img/footer/ft-escrow.png" alt="" />
                            <img src="img/footer/ft-paypal.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="footer-wrapper">
                        <div className="company-info-wrapper">
                            <div className="company-info">
                                <div className="company-info-title">COMPANY INFO</div>
                                <div className="company-info-item">COMPANY: BENX CO., LTD. / CEO: Seo Woo-suk / CALL CENTER: 1544-0790 / FAX: 02-6959-2631</div>
                                <div className="company-info-item">ADDRESS: Seoul, Gangnam-gu, Gyeongdong-ro 30 Road 5 6th floor / Personal information manager: Kim Jun Ki</div>
                                <div className="company-info-item"></div>
                                <div className="company-info-item">Business Registration No.: 716-87-01158</div>
                                <div className="company-info-last-item">Telecommunication Sector Report No.: 2018- Seoul Gangnam-02688</div>
                                <div className="company-info-links">
                                    <div className="company-info-links-policy"><CardLink href="#">PRIVACY POLICY</CardLink></div>
                                    <div className="company-info-links-terms"><CardLink href="#">TERMS OF USE</CardLink></div>
                                    <div className="company-info-links-terms"><CardLink href="#">PAID SERVICE TERMS AND CONDITIONS</CardLink></div>
                                </div>
                                <div className="company-info-social">
                                    <div className="company-info-social-item"><CardLink href="#"><img src="img/footer/ft_sns01.png" alt="" /></CardLink></div>
                                    <div className="company-info-social-item"><CardLink href="#"><img src="img/footer/ft_sns04.png" alt="" /></CardLink></div>
                                </div>
                            </div>
                            <div className="company-info">
                                <div className="company-info-title">CS CENTER</div>
                                <div className="company-info-first-item">02.1544.0790</div>
                                <div className="company-info-item">MON -FRI AM 10:00 - PM 17:00</div>
                                <div className="company-info-item">LUNCH PM 13:00 - PM 14:00</div>
                                <div className="company-info-item">SAT, SUN, HOLIDAY OFF</div>
                            </div>
                            <div className="company-info">
                                <div className="company-info-title">COMMUNITY</div>
                                <div className="company-info-item company-info-item-btn"><CardLink href="http://cafe.daum.net/BANGTAN">BTS official fan cafe</CardLink></div>
                                <div className="company-info-item company-info-item-btn"><CardLink href="https://twitter.com/BTS_twt">BTS official twitter</CardLink></div>
                                <div className="company-info-item company-info-item-btn"><CardLink href="https://www.facebook.com/bangtan.official">BTS official facebook</CardLink></div>
                                <div className="company-info-item company-info-item-btn"><CardLink href="http://btsblog.ibighit.com">BTS official blog</CardLink></div>
                                <div className="company-info-item company-info-item-btn"><CardLink href="https://www.youtube.com/user/BANGTANTV">BTS official youtube</CardLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AppFooter;