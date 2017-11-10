import React,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Footer extends Component {
    render(){
        return(
            <div className="Footer">
                <footer>
                    <section className="">
                        <div className="">
                            <dl className="footer_first">
                                <dt>APICloud产品</dt>
                                <dd>
                                    <NavLink to="/superwebview">SuperWebView</NavLink> 
                                </dd>
                                <dd>
                                    <NavLink to="/deepengine">Deep Engine</NavLink> 
                                </dd>
                                <dd>
                                    <NavLink to="/cloudservice">数据云</NavLink> 
                                </dd>
                                <dd>
                                    <NavLink to="/cloudmanage">运营云</NavLink> 
                                </dd>
                                <dd>
                                    <NavLink to="/">APP定制</NavLink>
                                </dd>
                                <dd>
                                    <NavLink to="/modulestore">模块Store</NavLink> 
                                </dd>
                            </dl>
                            <dl className="footer_second">
                                <dt>VIP服务</dt>
                                <dd>
                                    <NavLink to="/vipservice/price">VIP服务</NavLink> 
                                </dd>
                                <dd>
                                    <NavLink to="/vipservice/plan">云服务价格</NavLink> 
                                </dd>
                                <dd>
                                    <NavLink to="/vipservice/channel">渠道打包</NavLink> 
                                </dd>
                                <dd>
                                    <NavLink to="/vipservice/enterpEdition">优先技术支持</NavLink> 
                                </dd>
                                <dd>
                                    <NavLink to="/vipservice/course">培训课程</NavLink> 
                                </dd>
                                <dd>
                                    <NavLink to="/vipservice/attest">认证工程师</NavLink> 
                                </dd>
                            </dl>
                            <dl>
                                <dt>资源</dt>
                                <dd>
                                    <NavLink to="" rel="nofollow">文档</NavLink>
                                </dd>
                                <dd>
                                    <NavLink target="_blank" to="/">视频教程</NavLink>
                                </dd>
                                <dd>
                                    <NavLink target="_blank" to="/" rel="nofollow">SDK下载</NavLink>
                                </dd>
                                <dd>
                                    <NavLink target="_blank" to="/devtools">开发工具</NavLink> 
                                </dd>
                                <dd>
                                    <NavLink target="_blank" to="/source_code">源码下载</NavLink> 
                                </dd>
                            </dl>
                            <dl>
                                <dt>APICloud</dt>
                                <dd>
                                    <NavLink to="/about" rel="nofollow">关于我们</NavLink> 
                                </dd>
                                <dd>
                                    <NavLink to="" rel="nofollow">服务条款</NavLink>
                                </dd>
                                <dd>
                                    <NavLink to="" rel="nofollow">隐私条款</NavLink>
                                </dd>
                                <dd>
                                    <NavLink to="/blog">Blog</NavLink> 
                                </dd>
                            </dl>
                            <dl className="langouter">
                                <div className="langbox" id="selectLang">
                                    <div className="leftimg imgCN">
                                    </div>
                                    <div className="rightlabel">简体中文</div>
                                </div>
                                <div className="hidebox">
                                    <div className="lang-tri-bottom"></div>
                                    <div className="langbox selected" lang="zh-CN">
                                        <div className="leftimg imgCN">
                                        </div>
                                        <div className="rightlabel">简体中文</div>
                                    </div>
                                    <div className="langbox" lang="en-US">
                                        <div className="leftimg imgUS">
                                        </div>
                                        <div className="rightlabel">English</div>
                                    </div>
                                </div>
                            </dl>
                            <div className="footer-right">
                                <div className="row share">
                                    <NavLink to="" className="share-links weixinImg">
                                    </NavLink> 
                                    <NavLink rel="nofollow" to="" target="_blank" className="share-links weiboImg">
                                    </NavLink> 
                                    <NavLink rel="nofollow" to="" target="_blank" className="share-links facebook">
                                    </NavLink> 
                                    <NavLink rel="nofollow" to="" target="_blank" className="share-links twitter">
                                    </NavLink> 
                                </div>
                                <div className="qrcode" title="APICloud"></div>
                            </div>
                        </div>
                    </section>
                    <section className="link-exchange-box">
                        <div className="link-exchange">
                            <h5 className="tab">友情链接</h5>
                            <h5 className="tab">热门标签</h5>
                            <p className="list-con">
                                <NavLink  target="_blank" to="http://www.jyqkw.com">毕业论文</NavLink> 
                                <NavLink  target="_blank" to="http://www.apicloud.com/">免费网站制作软件</NavLink> 
                                <NavLink  target="_blank" to="http://www.apicloud.com/">手机应用平台</NavLink> 
                                <NavLink  target="_blank" to="http://www.apicloud.com/">android软件开发</NavLink> 
                                <NavLink  target="_blank" to="http://www.duyan.com.cn">在职研究生</NavLink> 
                                <NavLink  target="_blank" to="http://www.xinhongru.com/">网站建设</NavLink> 
                                <NavLink  target="_blank" to="http://www.ihuashi.cn/">鲜花网</NavLink> 
                                <NavLink  target="_blank" to="http://java.tedu.cn/">Java培训</NavLink> 
                                <NavLink  target="_blank" to="http://www.ht.cn/">商标转让网</NavLink> 
                                <NavLink  rel="nofollow" target="_blank" to="http://www.sdk.cn">SDKcn</NavLink> 
                                <NavLink  target="_blank" to="http://www.fangcloud.com">企业网盘</NavLink> 
                                <NavLink  target="_blank" to="http://www.scswsxy.com">成都幼师学校</NavLink> 
                                <NavLink  target="_blank" to="http://www.hao123.com/">好123</NavLink> 
                                <NavLink  target="_blank" to="http://www.zhaopinhui.org">招聘会</NavLink> 
                                <NavLink  target="_blank" to="http://www.youwinedu.com">优胜教育</NavLink> 
                                <NavLink  target="_blank" to="http://www.bjgongteng.com">商标查询</NavLink> 
                                <NavLink  target="_blank" to="http://www.noyes.cn/">手机游戏</NavLink> 
                                <NavLink  target="_blank" to="http://www.zwcad.com">CAD</NavLink> 
                                <NavLink  target="_blank" to="http://app.apicloud.com/">app外包公司</NavLink> 
                                <NavLink  target="_blank" to="http://www.apicloud.com/blog">apicloud</NavLink> 
                                <NavLink  target="_blank" to="http://www.shandongrs.com">山东人事考试信息网</NavLink> 
                                <NavLink  target="_blank" to="http://www.apicloud.com/dev/">app studio</NavLink> 
                                <NavLink  target="_blank" to="http://hao.jiameng.com/">开店找项目</NavLink> 
                                <NavLink  target="_blank" to="http://www.bjsxt.com">尚学堂</NavLink> 
                                <NavLink  target="_blank" to="http://www.weaoo.com/">天气预报</NavLink> 
                                <NavLink  target="_blank" to="http://he.zgjsks.com">河南招教网</NavLink> 
                                <NavLink  target="_blank" to="http://www.la-mo.com">办公室设计</NavLink> 
                                <NavLink  target="_blank" to="http://www.kejilie.com">科技资讯</NavLink> 
                                <NavLink  rel="nofollow" target="_blank" to="http://www.geetest.com">极验验证</NavLink> 
                                <NavLink  target="_blank" to="http://www.xiaoshouyi.com">销售易</NavLink> 
                                <NavLink  rel="nofollow" target="_blank" to="http://www.ucpaas.com">云之讯</NavLink> 
                                <NavLink  target="_blank" to="http://www.apicloud.com">HTML5 APP开发</NavLink> 
                                <NavLink  rel="nofollow" target="_blank" to="http://www.polyv.net"> 保利威视</NavLink> 
                                <NavLink  target="_blank" to="http://www.apicloud.com/">APP开发工具</NavLink> 
                                <NavLink  target="_blank" to="http://www.leikeji.com                           ">雷科技</NavLink> 
                                <NavLink  target="_blank" to="http://www.antrol.com">蚁巡</NavLink> 
                                <NavLink  rel="nofollow" target="_blank" to="http://www.hwclouds.com">华为云</NavLink> 
                                <NavLink  rel="nofollow" target="_blank" to="http://segmentfault.com">SegmentFault</NavLink> 
                                <NavLink  target="_blank" to="http://apistore.baidu.com                        ">API Store</NavLink> 
                                <NavLink  target="_blank" to="http://www.ctoutiao.com">创头条</NavLink> 
                                <NavLink  target="_blank" to="http://www.html580.com">HTML前端大全</NavLink> 
                                <NavLink  target="_blank" to="http://www.apkbus.com">安卓巴士</NavLink> 
                                <NavLink  target="_blank" to="http://lbs.amap.com">高德开放平台</NavLink> 
                                <NavLink  target="_blank" to="http://www.kuaifawu.com">快法务</NavLink> 
                                <NavLink  target="_blank" to="http://www.androidchina.net">AndroidChina</NavLink> 
                                <NavLink  target="_blank" to="http://www.devstore.cn">DevStore</NavLink> 
                                <NavLink  target="_blank" to="http://www.oneapm.com">OneAPM</NavLink> 
                                <NavLink  target="_blank" to="http://www.tuling123.com">图灵机器人</NavLink> 
                                <NavLink  target="_blank" to="http://app.apicloud.com/">App定制</NavLink> 
                                <NavLink  target="_blank" to="http://www.joyowo.com">社保代缴</NavLink> 
                                <NavLink  target="_blank" to="http://www.gizwits.com">机智云</NavLink> 
                                <NavLink  target="_blank" to="http://www.ijiami.cn">爱加密</NavLink> 
                                <NavLink  rel="nofollow" target="_blank" to="http://www.xfyun.cn">讯飞开放平台</NavLink> 
                                <NavLink target="_blank" to="/link" rel="nofollow">更多</NavLink> 
                            </p>
                            <p className="list-con" >
                                <NavLink target="_blank" to="http://www.apicloud.com/">APP开发</NavLink> 
                                <NavLink target="_blank" to="http://www.apicloud.com/">手机APP开发</NavLink> 
                                <NavLink target="_blank" to="http://www.apicloud.com/">手机APP制作</NavLink> 
                                <NavLink target="_blank" to="http://www.apicloud.com/blogDetails?id=272">APP开发需要多少钱</NavLink> 
                                <NavLink target="_blank" to="http://www.apicloud.com/blogDetails?id=273">软件开发流程</NavLink> 
                                <NavLink target="_blank" to="http://www.apicloud.com/blogDetails?id=104">开发一款app多少钱</NavLink> 
                                <NavLink target="_blank" to="http://www.apicloud.com/blogDetails?id=274">sessionStorage</NavLink> 
                                <NavLink target="_blank" to="http://www.apicloud.com/blogDetails?id=276">bundleId</NavLink> 
                                <NavLink target="_blank" to="http://www.apicloud.com/blogDetails?id=277">relation</NavLink> 
                                <NavLink target="_blank" to="http://www.apicloud.com/mod_detail?mdId=22430">付钱拉</NavLink> 
                                <NavLink target="_blank" to="http://www.apicloud.com/signup">手机注册</NavLink> 
                            </p>
                        </div>
                    </section>
                    <section className="copyright">
                        <label>
                            &copy;2014-2016&nbsp;APICloud&nbsp;&nbsp;&nbsp;&nbsp;<NavLink target="_blank" to="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action" rel="nofollow">京ICP备14027692号</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;京ICP证151131号&nbsp;&nbsp;&nbsp;&nbsp;<NavLink to="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020063" target="_blank" rel="nofollow">京公网安备 11010802020063号</NavLink> 
                        </label>
                    </section>
                </footer>
            </div>
        )
    }
    
}

export default Footer