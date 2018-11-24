import React,{Component,Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import './preview.scss';
import im from '../images/h.jpg'
import wupin from '../images/wuping.jpg'
import full from '../images/star-full-new.png'
import half from '../images/star-half-new.png'
import egg from '../images/eg.png'
import users from '../images/user.jpg'
import yinyue from '../images/yinyue.png'
import yidao from '../images/yidao.png'
import axios from 'axios'
class Preview extends Component{
    constructor(props) {
        super(props);
        // list:[],
        this.state = {
            list:[],
            img:[],
            movieLists:[],
            images:[],
            name:[]
        }
        this.listshow = this.listshow.bind(this)
        this.listMovie =this.listMovie.bind(this)
        this.pid = props.location.pathname.split('/')[2]
    }
    onClicks(){
        //点击之后

    }
    render(){
        return(
            <Fragment>
            <div className='headers'>
                <i className="iconfont icon-fanhui-copy"></i>
                <h2 style={{
                color:' #f4f4f4'
                }}>
                {this.state.list.nm}</h2>
                <span/>
            </div>
            <div className='preview-intro'>
                < div className='preview'>
                    <img src={this.state.list.img}/>
                </div>
                < div className='preview-r'>
                    <div className='p1'> {this.state.list.nm}</div>
                    <i> {this.state.list.enm}</i>
                    <ul>
                        <li>
                            <img src={full}/>
                         </li>   
                         <li>
                            <img src={full}/>
                         </li>   
                         <li>
                            <img src={full}/>
                         </li>   
                         <li>
                            <img src={full}/>
                         </li>   
                         <li>
                            <img src={half}/>
                         </li>   
                         <li>
                           <em>9.3</em>
                         </li>   
                    </ul>
                    <div className="score-num">
                        <span>(68.1万人评分)</span>
                    </div>
                    <div className="movie-category">
                        <span> {this.state.list.cat} <i>3DIMAX</i></span>
                    </div>
                    <div className="movie-content-row">
                        <span> {this.state.list.fra}/ {this.state.list.dur}分钟</span>
                    </div>
                    <div className= "movie-content-row">
                        <span> {this.state.list.pubDesc}</span>
                    </div>
                </div>
            </div>
            <div className="section-seperate">
                <h4>特惠购票</h4>
                <p> {this.state.list.dra}</p>
                <i className="iconfont icon-down-trangle-copy-copy"  onClick={this.onClicks.bind(this)}></i>  
            </div>
            <div className='section'>
                <h3>观影小贴士</h3>
                <div className="eg">
                    <span>
                        <img src={egg}/>
                    </span> 
                    <i>有1个彩蛋，在片尾字幕前</i>   
                </div>
            </div>
            <div className='person'>
                <ul className='movie-celebrities'>{
                    this.state.img.map((item,index) => {
                        return (
                            <li>
                            <img src={item}/>
                            <h3>此处需要数据引入</h3>
                            <h4>数据没响应</h4>
                        </li>
                        )
                    })
                }   
                </ul>
                <div className="personname">
                    <div className='per'>全体演职人员</div>
                    <i className="iconfont icon-down-trangle"></i> 
                </div>
            </div>

            <div className="media">
                <h1>媒体库</h1>
                <ul className='movie-celebrities'>{
                    this.state.img.map((item,index) => {
                        return (
                            <li>
                                <img src={item}/>
                            </li>
                        )
                    })
                }   
                </ul>
                <div className="link-group">
                    <h4>
                        <span>视频</span>
                        <div>
                            <em className="number">{this.state.list.vnum}</em>
                            <i className="iconfont icon-down-trangle"></i> 
                        </div>
                    </h4>
                    <h3>
                        <span>剧照</span>
                        <div>
                            <em className="number1">{this.state.list.pn}</em>
                            <i className="iconfont icon-down-trangle"></i> 
                        </div>
                    </h3>
                </div>
            </div>
            <div className='storebill'>
                <div>
                    <h4>正版周边</h4>
                    <div>
                        <span>
                            全部
                        </span>
                        <i className="iconfont icon-down-trangle"></i> 
                    </div>
                </div>
                <ul className='wupin'>
                    <li>
                        <img src={wupin}/>
                        <h3>什么什么公仔</h3>
                        <div>
                            <span><em>25</em>元</span>
                            <i>零售价<em>28</em>元</i>
                        </div>

                    </li>
                    <li>
                        <img src={wupin}/>
                        <h3>什么什么公仔</h3>
                        <div>
                            <span><em>25</em>元</span>
                            <i>零售价<em>28</em>元</i>
                        </div>

                    </li>
                </ul>   

            </div>
            <div className="movie-news">
                <h3>资讯</h3>
                <div className="panel-content">
                    <img src={im}/>
                    <div className='txt'>姜文太皮了，竟然“教坏”《毒液》的大反派说这种话？</div>
                    <i className="iconfont icon-down-trangle"></i> 
                </div>
            </div>
            <div className='movie-num'>
                <ul>
                    <li>
                        <span className='num1'>{this.state.list.showst}</span>
                        <em>昨日票房排行</em>
                    </li>
                    <li>
                        <span className='num2'>{this.state.list.wish}</span>
                        <em>首周票房(万)</em>
                    </li>
                    <li>
                        <span className='num3'>{this.state.list.snum}</span>
                        <em>累计票房(万)</em>
                    </li>
                </ul>
                <i className="iconfont icon-down-trangle"></i> 
            </div>
            <div className='reactid'>
                <h3>短评</h3>
                <ul>
                    <li>
                        <h4>
                            <ol>
                                <li><img src={full}/></li>
                                <li><img src={full}/></li>
                                <li><img src={full}/></li>
                                <li><img src={full}/></li>
                                <li><img src={half}/></li>
                            </ol>
                            <i>11-9</i>
                        </h4>
                        <div className='txts'>
                            电影很好看，但是开场验票才告诉我自带3D眼镜？？？
                            搞得我裸眼看3D看了一个多小时，真的是弟弟行为！
                            
                        </div>
                        <div className='users'>
                            <div className='u-l'>
                                <img src={users}/>
                                <em>Monster6697</em>
                                <span>购</span>
                            </div>
                            <div className='u-r'>
                            <i className="iconfont icon-zan pinlun">6611</i>
                            <i className="iconfont icon-pinglun pinlun">435</i>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4>
                            <ol>
                                <li><img src={full}/></li>
                                <li><img src={full}/></li>
                                <li><img src={full}/></li>
                                <li><img src={full}/></li>
                                <li><img src={full}/></li>
                            </ol>
                            <i>11-9</i>
                        </h4>
                        <div className='txts'>
                            电影很好看，但是开场验票才告诉我自带3D眼镜？？？
                            搞得我裸眼看3D看了一个多小时，真的是弟弟行为！
                            
                        </div>
                        <div className='users'>
                            <div className='u-l'>
                                <img src={users}/>
                                <em>Monster6697</em>
                                <span>购</span>
                            </div>
                            <div className='u-r'>
                            <i className="iconfont icon-zan pinlun">6611</i>
                            <i className="iconfont icon-pinglun pinlun">435</i>
                            </div>
                        </div>
                    </li>
                </ul>
                <b>查看全部<span>26984548</span>条评论</b>
            </div>
            <div className='attrLi'>
                <div className='filmMusics'>
                    <div className='fos'>
                        <img src={yinyue}/>
                        <div>
                            <h3>电影原声</h3>
                            <h5>毒液前来</h5>
                        </div>
                    </div>
                    <i className="iconfont icon-down-trangle"></i> 
                </div>
                <div className='parentguidances'>
                <div className='yy'>
                        <img src={yidao}/>
                        <div>
                            <h3>家长引导</h3>
                            <h5>本片在美国的评级为【PG-13】，未满13岁的儿童需在家长的陪同下观看。</h5>
                        </div>

                </div>
                <i className="iconfont icon-down-trangle"></i>  
                </div>
            </div>
            <div className='finally'>
                <h3>相关电影</h3>
                <ul className='vip'>
                { this.state.images.map((item,index)=>{
                        return(
                            <li>
                                <img src={item.img}></img><span></span>
                                <h4>{item.nm}</h4>
                            </li>
                        )
                    })
                }

                </ul>
                <p>下载猫眼电影，查看更多电影信息</p>
                <h4>© 猫眼电影 客服电话:<a href="#">1010-5335</a></h4>
                <b>京ICP备16022489号-1<span></span>京公网安备11010502030881号</b>
                <h2>北京猫眼文化传媒有限公司</h2>
            </div>
            </Fragment>
        )

    }
    listshow (pid){
        const apiProxy = 'https://bird.ioliu.cn/v1/?url='
        var url = `http://m.maoyan.com/ajax/detailmovie?movieId=${pid}`
        axios.get(apiProxy + url).then(result=>{
            let newList = JSON.parse(JSON.stringify(result.data.detailMovie));
            newList.img = newList.img.split("w.h").join("120.180")
            let newImg = [];
            for(let i=0;i<newList.photos.length;i++){
                newImg.push( newList.photos[i].split("w.h").join("85.115"))
            }
            this.setState({
                list: newList,
                img:newImg
            })
        });
    }
    listMovie(){
        const api = 'https://bird.ioliu.cn/v1/?url='
        var url = `http://m.maoyan.com/ajax/movieOnInfoList?token=`

        axios.get(api+url).then(result=>{
            var newList1 = JSON.parse(JSON.stringify(result.data.movieList));
          console.log(newList1)
           var a=[]
            for(let i=0;i<newList1.length;i++){
                //
                console.log(newList1[i])
                newList1[i].img = newList1[i].img.split("w.h").join("120.180")
                a.push(newList1[i])
            }
            this.setState({
                movieLists:result.data.movieList,
                images:a
            })
        })
    }
    componentDidMount(){
        this.listshow(this.pid);
        this.listMovie()
        console.log(this.pid)
    }
}
export default Preview;