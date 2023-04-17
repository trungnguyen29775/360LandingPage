import './About.css'
const About = ()=>
{
    return(
        <div className="about">
        <div className="about-title">
            Về Chúng Tôi
        </div>
        <div className="about-x">
            <div className="actor">
                <div className="actor-img">
                    <img className="special" src="./dat.jpg" alt="ducdat"/>
                </div>
                <div className="actor-content middle">
                    <h3 id="infor-name">Phạm Đức Đạt</h3>
                    <h4 id="infor-script">Phụ trách vận hành – tài chính dự án</h4>
                    <h5 id="infor">ĐH Quốc tế - ĐHQG TP.HCM</h5>
                    <h5 id="infor">ducdatit2002@gmail.com</h5>
                    <h5 id="infor">0902850103</h5>
                </div>
                <div className="actor-more middle"></div>
            </div>
            <div className="actor">
                <div className="actor-img">
                    <img src="./trung.jpg" alt="trung"/>
                </div>
                <div className="actor-content middle">
                    <h3 id="infor-name">Nguyễn Trần Minh Trung</h3>
                    <h4 id="infor-script">Phụ trách phát triển công nghệ dự án</h4>
                    <h5 id="infor">ĐH Quốc tế - ĐHQG TP.HCM</h5>
                    <h5 id="infor">trungnguyen29775@gmail.com</h5>
                    <h5 id="infor">0972419560</h5>
                </div>
                <div className="actor-more middle"></div>
            </div>
        </div>
        <div className="about-x">
            <div className="actor">
                <div className="actor-img">
                    <img className="special" src="./queanh.jpg" alt="queanh"/>
                </div>
                <div className="actor-content middle">
                    <h3 id="infor-name">Phạm Quế Ngọc Anh</h3>
                    <h4 id="infor-script">Phụ trách truyền thông – marketing</h4>
                    <h5 id="infor">ĐH Quốc tế - ĐHQG TP.HCM</h5>
                    <h5 id="infor">quengocanh.pham@gmail.com</h5>
                    <h5 id="infor">0364569979</h5>
                </div>
                <div className="actor-more middle"></div>
            </div>
            <div className="actor">
                <div className="actor-img">
                    <img src="./duong.jpg" alt="trung"/>
                </div>
                <div className="actor-content middle">
                    <h3 id="infor-name">Lê Duy Dương</h3>
                    <h4 id="infor-script">Phụ trách kỹ thuật – graphic design</h4>
                    <h5 id="infor">ĐH Quốc tế - ĐHQG TP.HCM</h5>
                    <h5 id="infor">duyduong07022002@gmail.com</h5>
                    <h5 id="infor">0357753457</h5>
                </div>
                <div className="actor-more middle"></div>
            </div>
        </div>
    </div>
    )
}
export default About;